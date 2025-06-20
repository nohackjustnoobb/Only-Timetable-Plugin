import { getValue, saveRoutes, saveStops, setValue } from "../utils/isar.ts";
import { Route, Stop } from "../utils/model.ts";
import { busRouteInfos, Station, stationCoordinates } from "./data.ts";
import { StationTranslations } from "./additional_data.ts";

const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

async function updateRoutes() {
  // Check if the last update was within the update interval
  const lastUpdate = await getValue("lastUpdate");
  if (lastUpdate && Date.now() - Number(lastUpdate) < UPDATE_INTERVAL) return;

  const stops: Stop[] = [];
  for (const [id, station] of Object.entries(Station)) {
    const name = StationTranslations[id as keyof typeof Station];
    const coor = stationCoordinates[station];

    stops.push({
      id,
      name: name,
      lat: coor.latitude,
      long: coor.longitude,
    });
  }
  saveStops(stops);

  const routes: Route[] = [];
  for (const [id, info] of Object.entries(busRouteInfos)) {
    const stops = info.stations.map(
      (s) => Object.entries(Station).find(([_, v]) => v === s)?.[0]
    );
    if (stops.includes(undefined))
      throw new Error(`Invalid stop in route ${id}: ${stops}`);

    if (["2", "N", "H"].includes(id)) {
      // Special handling for routes 2, N, and H
      continue;
    }

    routes.push({
      id,
      displayId: id.replaceAll("+", "").replaceAll("*", " ⃰"),
      source: {
        en: "CUHK",
        zh: "中大",
        zh_Hans: "中大",
      },
      orig: stops[0],
      dest: stops[stops.length - 1],
      stops: stops as string[],
    });
  }
  saveRoutes(routes);

  // Update the last update timestamp
  await setValue("lastUpdate", String(Date.now()));
}

export default updateRoutes;
