import { Route, Stop } from "./model.ts";

declare global {
  // deno-lint-ignore no-explicit-any
  const sendMessage: (type: string, ...data: any) => any;
}

// For debugging only, comment out when building
// const sendMessage = (type: string, ...data: any) => console.log(type, data);
// const sendMessage = (_: string, ...__: any) => {};

/**
 * Persists an array of Route objects by serializing specific properties and dispatching them
 * through a messaging interface.
 *
 * @param routes - The Route objects to persist.
 * @returns A Promise that resolves when the operation completes.
 */
async function saveRoutes(routes: Route[]) {
  await sendMessage(
    "saveRoutes",
    routes.map((route) => {
      if (route.meta) route.meta = JSON.stringify(route.meta);
      if (route.source) route.source = JSON.stringify(route.source);

      return route;
    })
  );
}

/**
 * Persists an array of Stop objects by serializing selected properties and dispatching them
 * through a messaging interface.
 *
 * @param stops - The Stop objects to persist.
 * @returns A Promise that resolves when the operation completes.
 */
async function saveStops(stops: Stop[]) {
  await sendMessage(
    "saveStops",
    stops.map((stop) => {
      if (stop.name) stop.name = JSON.stringify(stop.name);
      if (stop.meta) stop.meta = JSON.stringify(stop.meta);

      return stop;
    })
  );
}

/**
 * Retrieves the value associated with the specified key from storage.
 *
 * @param key - The key whose value should be retrieved.
 * @returns A promise that resolves to the value as a string if found, or `null` if not found or on error.
 */
async function getValue(key: string): Promise<string | null> {
  const resp = await sendMessage("getValue", key);
  if (resp === null || resp === undefined) return null;
  return resp;
}

/**
 * Asynchronously sets a value for the specified key by sending a message.
 *
 * @param key - The key to associate with the value.
 * @param value - The value to be stored.
 * @returns A promise that resolves when the operation is complete.
 */
async function setValue(key: string, value: string): Promise<void> {
  await sendMessage("setValue", key, value);
}

export { saveRoutes, saveStops, getValue, setValue };
