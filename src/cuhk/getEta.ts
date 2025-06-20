import { Eta, Route, Stop } from "../utils/model.ts";
import { SpecialRoutes } from "./additional_data.ts";
import { busRouteInfos, busStationTimings, Station } from "./data.ts";

const average = (array: number[]) =>
  array.reduce((a, b) => a + b) / array.length;

// deno-lint-ignore require-await
async function getEta(route: Route, stop: Stop): Promise<Eta[]> {
  if (!route || !stop || !route.stops) return [];

  // stop to stop
  const s2s: string[] = [];
  for (let i = 0; i < route.stops.length - 1; i++) {
    const curStop = route.stops[i];
    // The first stop
    if (curStop === stop.id) break;

    const nextStop = route.stops[i + 1];
    s2s.push(
      `${Station[curStop as keyof typeof Station]}>>${
        Station[nextStop as keyof typeof Station]
      }`
    );

    if (nextStop === stop.id) break;
  }

  const timeTaken = Math.round(
    s2s.map((s) => average(busStationTimings[s])).reduce((a, b) => a + b, 0) /
      60
  );

  const now = new Date();
  now.setSeconds(0, 0);

  const info = busRouteInfos[route.id as keyof typeof busRouteInfos];

  const isSpecialRoute = Object.keys(SpecialRoutes).includes(route.id);
  if (isSpecialRoute) {
    info.minuteMarks =
      SpecialRoutes[route.id as keyof typeof SpecialRoutes].minuteMarks;
  }

  // Not on service day
  if (!info.serviceDays.includes(now.getDay())) return [];

  // Calculate next bus departures for today
  const etas: Eta[] = [];
  for (let h = now.getHours(); h <= info.lastService[0]; h++) {
    if (etas.length >= 3) break;

    for (const mark of info.minuteMarks) {
      if (etas.length >= 3) break;

      let skipThisStop = false;
      if (isSpecialRoute) {
        const special = SpecialRoutes[route.id as keyof typeof SpecialRoutes];
        if (!special.notOn.includes(mark) && special.skip.includes(stop.id)) {
          skipThisStop = true;
        }
      }
      if (skipThisStop) continue;

      const dep = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        h,
        mark,
        0,
        0
      );
      const arrivalTime = dep.getTime() + timeTaken * 60 * 1000;

      if (arrivalTime >= now.getTime())
        etas.push({
          isRealTime: false,
          arrivalTime,
        });
    }
  }

  return etas.slice(0, 3);
}

export default getEta;
