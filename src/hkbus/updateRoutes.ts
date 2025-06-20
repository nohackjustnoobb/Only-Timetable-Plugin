import { Company, fetchEtaDb } from "hk-bus-eta";
import { Route, Stop } from "../utils/model.ts";
import { getValue, saveRoutes, saveStops, setValue } from "../utils/isar.ts";

const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

const TRANSLATIONS: { [lanuageCode: string]: { [co: string]: string } } = {
  en: {
    kmb: "KMB",
    ctb: "CTB",
    nlb: "NLB",
    lrtfeeder: "MTR",
    gmb: "GMB",
    sunferry: "Sun",
    hkkf: "HKKF",
    fortuneferry: "Fortune",
  },
  zh: {
    kmb: "九巴",
    ctb: "城巴",
    nlb: "嶼巴",
    gmb: "專線小巴",
    lrtfeeder: "港鐵",
    sunferry: "新渡輪",
    hkkf: "港九小輪",
    fortuneferry: "富裕小輪",
  },
  zh_Hans: {
    kmb: "九巴",
    ctb: "城巴",
    nlb: "屿巴",
    gmb: "专线小巴",
    lrtfeeder: "港铁",
    sunferry: "新渡轮",
    hkkf: "港九小轮",
    fortuneferry: "富裕小轮",
  },
};

async function updateRoutes() {
  // Check if the last update was within the update interval
  const lastUpdate = await getValue("lastUpdate");
  if (lastUpdate && Date.now() - Number(lastUpdate) < UPDATE_INTERVAL) return;

  const db = await fetchEtaDb();

  const stops: Stop[] = [];
  for (const [stopId, stopListEntry] of Object.entries(db.stopList)) {
    const stop: Stop = {
      id: stopId,
      name: {
        ...stopListEntry.name,
        // TODO translate to zh_Hans
        zh_Hans: stopListEntry.name.zh,
      },
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

  const convertToStopId = (company: string, ids: string[]) =>
    ids.map((id) => {
      if (reversedStopMap[company][id]) return reversedStopMap[company][id];
      if (db.stopList[id]) return id;

      throw new Error(`Invalid stop ID: ${id} for company: ${company}`);
    });

  const routes: Route[] = [];

  for (const [routeId, routeListEntry] of Object.entries(db.routeList)) {
    const company = Object.keys(routeListEntry.stops)[0] as Company;
    const convertedStops = convertToStopId(
      company,
      routeListEntry.stops[company]
    );

    let displayId = routeListEntry.route;
    // If the service type is greater than 1, it means it's a special service
    if (Number(routeListEntry.serviceType) > 1) displayId += " ⃰";

    const route: Route = {
      id: routeId,
      displayId: displayId,
      name: [
        ...Object.values(routeListEntry.orig),
        ...Object.values(routeListEntry.dest),
      ].join("+"),
      source: Object.fromEntries(
        Object.entries(TRANSLATIONS).map(([lang, translations]) => [
          lang,
          routeListEntry.co
            .map((k) => translations[k])
            .join("+")
            .toLocaleUpperCase(),
        ])
      ),
      orig: convertedStops[0],
      dest: convertedStops[convertedStops.length - 1],
      stops: convertedStops,
      meta: routeListEntry,
    };

    routes.push(route);
  }

  await saveRoutes(routes);

  await setValue("serviceDayMap", JSON.stringify(db.serviceDayMap));
  await setValue("holidays", JSON.stringify(db.holidays));
  await setValue("stopList", JSON.stringify(db.stopList));

  // Update the last update timestamp
  await setValue("lastUpdate", String(Date.now()));
}

export default updateRoutes;
