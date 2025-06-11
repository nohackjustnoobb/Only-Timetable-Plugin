import { fetchEtaDb } from "hk-bus-eta";
import { Route, Stop } from "../utils/model.ts";
import { getValue, saveRoutes, saveStops, setValue } from "../utils/isar.ts";

const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

async function updateRoutes() {
  // Check if the last update was within the update interval
  const lastUpdate = await getValue("lastUpdate");
  if (lastUpdate && Date.now() - Number(lastUpdate) < UPDATE_INTERVAL) return;

  const db = await fetchEtaDb();

  const stops: Stop[] = [];
  for (const [stopId, stopListEntry] of Object.entries(db.stopList)) {
    const stop: Stop = {
      id: stopId,
      name: stopListEntry.name,
      lat: stopListEntry.location.lat,
      long: stopListEntry.location.lng,
      meta: db.stopMap[stopId],
    };
    stops.push(stop);
  }

  await saveStops(stops);

  const reversedStopMap: { [company: string]: { [id: string]: string } } = {};
  for (const [stopId, stopTuple] of Object.entries(db.stopMap)) {
    if (!db.stopList[stopId]) throw new Error(`Invalid stop ID: ${stopId}`);

    for (const [company, companyStopId] of stopTuple) {
      if (!reversedStopMap[company]) reversedStopMap[company] = {};

      reversedStopMap[company][companyStopId] = stopId;
    }
  }
  const convertToStopId = (company: string, ids: string[]) => [
    company,
    ids.map((id) => {
      if (reversedStopMap[company][id]) return reversedStopMap[company][id];
      if (db.stopList[id]) return id;

      throw new Error(`Invalid stop ID: ${id} for company: ${company}`);
    }),
  ];

  const routes: Route[] = [];

  for (const [routeId, routeListEntry] of Object.entries(db.routeList)) {
    const convertedStops = Object.entries(routeListEntry.stops).map(
      ([company, ids]) => convertToStopId(company, ids)
    );

    const groupedCompany: { [stops: string]: string[] } = {};
    for (const [company, ids] of convertedStops) {
      const bound =
        routeListEntry.bound[company as keyof typeof routeListEntry.bound];
      const stopsKey = JSON.stringify({
        stops: ids,
        bound: bound,
      });
      if (!groupedCompany[stopsKey]) groupedCompany[stopsKey] = [];

      groupedCompany[stopsKey].push(company as string);
    }

    for (const [stopsKey, companies] of Object.entries(groupedCompany)) {
      const parsed = JSON.parse(stopsKey);
      const stops = parsed.stops as string[];
      const bound = parsed.bound as string;
      const groupRouteListEntry = JSON.parse(JSON.stringify(routeListEntry));

      // Update the routeListEntry with only the companies in this group
      groupRouteListEntry.co = companies;
      groupRouteListEntry.bound = Object.fromEntries(
        companies.map((c) => [c, groupRouteListEntry.bound[c]])
      );
      groupRouteListEntry.stops = Object.fromEntries(
        companies.map((c) => [c, groupRouteListEntry.stops[c]])
      );

      let displayId = routeListEntry.route;
      // If the service type is greater than 1, it means it's a special service
      if (Number(routeListEntry.serviceType) > 1) displayId += " ⃰";

      const route: Route = {
        id: `${routeId}+${companies.join("+")}+${bound}`,
        displayId: displayId,
        name: [
          ...Object.values(routeListEntry.orig),
          ...Object.values(routeListEntry.dest),
        ].join("+"),
        // TODO add other languages
        source: { en: companies.join(" / ").toLocaleUpperCase() },
        orig: stops[0],
        dest: stops[stops.length - 1],
        stops: stops,
        meta: groupRouteListEntry,
      };

      routes.push(route);
    }
  }

  await saveRoutes(routes);

  await setValue("serviceDayMap", JSON.stringify(db.serviceDayMap));
  await setValue("holidays", JSON.stringify(db.holidays));
  await setValue("stopList", JSON.stringify(db.stopList));

  // Update the last update timestamp
  await setValue("lastUpdate", String(Date.now()));
}

export default updateRoutes;
