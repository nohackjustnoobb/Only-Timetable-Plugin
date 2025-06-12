import { getValue, saveRoutes, saveStops, setValue } from "../utils/isar.ts";
import { routes, stops } from "./data.ts";

const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

async function updateRoutes() {
  const lastUpdate = await getValue("lastUpdate");
  if (lastUpdate && Date.now() - Number(lastUpdate) < UPDATE_INTERVAL) return;

  await saveStops(stops);
  await saveRoutes(routes);

  await setValue("lastUpdate", String(Date.now()));
}

export default updateRoutes;
