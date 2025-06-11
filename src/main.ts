import { fetchEtaDb, fetchEtas } from "hk-bus-eta";

if (import.meta.main) {
  const db = await fetchEtaDb();

  const etas = await fetchEtas({
    ...db.routeList["101+1+KWUN TONG (YUE MAN SQUARE)+KENNEDY TOWN"],
    seq: 0,
    language: "en",
    serviceDayMap: db.serviceDayMap,
    stopList: db.stopList,
    holidays: db.holidays,
  });

  console.log(etas);
}
