import getEta from "./aiu/getEta.ts";
import { routes, stops } from "./aiu/data.ts";

if (import.meta.main) {
  (async () => {
    const etaList = await getEta(routes[1], stops[4]);
    if (!etaList.length) {
      console.log("本日運行予定のバスはありません。");
      return;
    }
    console.log("次のバス到着予定時刻:");
    etaList.forEach((eta, idx) => {
      const date = new Date(eta.arrivalTime);
      console.log(date.toLocaleString());
    });
  })();
}
