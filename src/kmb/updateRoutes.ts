import { fetchWrapper } from "../utils/fetch.ts";
import { getValue, saveRoutes, saveStops, setValue } from "../utils/isar.ts";
import { Route, Stop } from "../utils/model.ts";

const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

async function updateRoutes() {
  // Check if the last update was within the update interval
  const lastUpdate = await getValue("lastUpdate");
  if (lastUpdate && Date.now() - Number(lastUpdate) < UPDATE_INTERVAL) return;

  // Fetch and save stops and routes from the GOV API
  let resp = await fetchWrapper(() =>
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop")
  );

  // deno-lint-ignore no-explicit-any
  const stops: Stop[] = resp["data"].map((stop: any) => ({
    id: stop.stop,
    name: {
      zh: stop.name_tc,
      en: stop.name_en,
      "zh-CN": stop.name_sc,
    },
    lat: Number(stop.lat),
    long: Number(stop.long),
  }));

  await saveStops(stops);

  resp = await fetchWrapper(() =>
    fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop")
  );

  const routeStops: { [route: string]: { [seq: number]: string } } = {};
  const routes: { [route: string]: Route } = {};
  for (const data of resp["data"]) {
    const routeId = data.route + (data.bound ? `-${data.bound}` : "");
    if (!routes[routeId])
      routes[routeId] = {
        id: routeId,
        displayId: data.route,
        meta: {
          bound: data.bound,
          service_type: data.service_type,
        },
      };

    if (!routeStops[routeId]) routeStops[routeId] = {};

    routeStops[routeId][data.seq] = data.stop;
  }

  for (const [routeId, stops] of Object.entries(routeStops)) {
    const route = routes[routeId];
    route.stops = Object.entries(stops)
      .toSorted(
        (a, b) => (b[0] as unknown as number) - (a[0] as unknown as number)
      )
      .map((s) => s[1]);
    route.dest = route.stops?.[route.stops.length - 1];
    route.orig = route.stops?.[0];
  }

  await saveRoutes(Object.values(routes));

  // Update the last update timestamp
  await setValue("lastUpdate", String(Date.now()));
}

export default updateRoutes;
