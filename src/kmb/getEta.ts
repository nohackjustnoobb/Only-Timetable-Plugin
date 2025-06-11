import { Eta, Route, Stop } from "../utils/model.ts";

async function getEta(route: Route, stop: Stop): Promise<Eta[]> {
  console.log("getEta function called");
}

export default getEta;
