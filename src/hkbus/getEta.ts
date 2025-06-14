import { fetchEtas } from "hk-bus-eta";
import { getValue } from "../utils/isar.ts";
import { Eta, Route, Stop } from "../utils/model.ts";

const NEED_STOPLIST = ["mtr", "fortuneferry"];
const NEED_SERVICE_DAY_MAP = ["fortuneferry", "sunferry", "hkkf"];

async function getEta(route: Route, stop: Stop): Promise<Eta[]> {
  const meta = JSON.parse(route.meta);

  const requiredServiceDayMap =
    NEED_SERVICE_DAY_MAP.filter((v) => meta.co.includes(v)).length > 0;
  const serviceDayMap = requiredServiceDayMap
    ? JSON.parse((await getValue("serviceDayMap"))!)
    : null;
  const holidays = requiredServiceDayMap
    ? JSON.parse((await getValue("holidays"))!)
    : null;

  const requiredStopList =
    NEED_STOPLIST.filter((v) => meta.co.includes(v)).length > 0;
  const stopList = requiredStopList
    ? JSON.parse((await getValue("stopList"))!)
    : null;

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
