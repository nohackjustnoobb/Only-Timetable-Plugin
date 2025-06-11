import { fetchEtas } from "hk-bus-eta";
import { getValue } from "../utils/isar.ts";
import { Eta, Route, Stop } from "../utils/model.ts";

async function getEta(route: Route, stop: Stop): Promise<Eta[]> {
  const meta = JSON.parse(route.meta);

  const serviceDayMap = JSON.parse((await getValue("serviceDayMap"))!);
  const stopList = JSON.parse((await getValue("stopList"))!);
  const holidays = JSON.parse((await getValue("holidays"))!);

  const seq = route.stops!.indexOf(stop.id);

  const etas = await fetchEtas({
    ...meta,
    seq,
    stopList,
    serviceDayMap,
    holidays,
    language: "en",
  });

  return etas
    .map((eta) => ({
      isRealTime: eta.remark.en == "",
      arrivalTime: Date.parse(eta.eta),
    }))
    .filter((eta) => !isNaN(eta.arrivalTime));
}

export default getEta;
