import { Eta, Route, Stop } from "../utils/model.ts";
import { specialRoutes, timetables, semBreaks, holidays } from "./data.ts";

function getNextThreeTimetableTimes(
  routeId: string,
  type: "regular" | "holiday" | "semBreak",
  timeTaken: number,
  now: Date
): number[] {
  const timetable = timetables[routeId];
  if (!timetable) return [];
  const times = (timetable[type] as [number, number][]).map(([h, m]) => {
    const mins = m + timeTaken;
    if (mins >= 60) {
      const extraHours = Math.floor(mins / 60);
      const newMinutes = mins % 60;
      return [h + extraHours, newMinutes] as [number, number];
    }

    return [h, mins] as [number, number];
  });

  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const futureTimes = times
    .map(([h, m]) => [h, m] as [number, number])
    .filter(([h, m]) => h * 60 + m >= nowMinutes)
    .sort((a, b) => a[0] * 60 + a[1] - (b[0] * 60 + b[1]))
    .slice(0, 3);

  // Convert to ms from epoch for today
  return futureTimes.map(([h, m]) => {
    const dt = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      h,
      m,
      0,
      0
    );
    return dt.getTime();
  });
}

// deno-lint-ignore require-await
async function getEta(route: Route, stop: Stop): Promise<Eta[]> {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD

  // Find stop index in route.stops (array of stop ids)
  const stopIndex = route.stops!.indexOf(stop.id);
  let timeTake = 0;
  if (stopIndex > 0) {
    const timetable = timetables[route.id];
    // Sum all previous timeTake values up to stopIndex - 1
    timeTake = timetable.timeTake
      .slice(0, stopIndex)
      .reduce((a, b) => a + b, 0);
  }

  // special route
  if (Object.keys(specialRoutes).includes(route.id)) {
    const onlyOn = specialRoutes[route.id].onlyOn;

    if (onlyOn.includes(todayStr)) {
      return getNextThreeTimetableTimes(route.id, "regular", timeTake, now).map(
        (arrivalTime) => ({
          isRealTime: false,
          arrivalTime: arrivalTime,
        })
      );
    }

    return [];
  }

  // Check if the timetables have other types other than regular
  const timetable = timetables[route.id];
  if (timetable.holiday === undefined && timetable.semBreak === undefined) {
    return getNextThreeTimetableTimes(route.id, "regular", timeTake, now).map(
      (arrivalTime) => ({
        isRealTime: false,
        arrivalTime: arrivalTime,
      })
    );
  }

  // Check if today is semBreak
  // Refer to semBreaks in data.ts: an array of [start, end] date strings (YYYY-MM-DD)
  // Example: ["2025-08-01", "2025-08-31"]
  const isSemBreak = semBreaks.some(([start, end]) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    // Set time to 00:00:00 for start and 23:59:59 for end to include the whole day
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    return now >= startDate && now <= endDate;
  });
  if (isSemBreak) {
    return getNextThreeTimetableTimes(route.id, "semBreak", timeTake, now).map(
      (arrivalTime) => ({
        isRealTime: false,
        arrivalTime: arrivalTime,
      })
    );
  }

  // Check if today is a holiday
  const isWeekend = now.getDay() === 0 || now.getDay() >= 5; // Sunday=0, Saturday=6
  const isHoliday = holidays.includes(todayStr);
  if (isWeekend || isHoliday) {
    return getNextThreeTimetableTimes(route.id, "holiday", timeTake, now).map(
      (arrivalTime) => ({
        isRealTime: false,
        arrivalTime: arrivalTime,
      })
    );
  }

  return getNextThreeTimetableTimes(route.id, "regular", timeTake, now).map(
    (arrivalTime) => ({
      isRealTime: false,
      arrivalTime: arrivalTime,
    })
  );
}

export default getEta;
