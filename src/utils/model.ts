/**
 * Represents a transit stop with optional multilingual names and metadata.
 *
 * @property id - Unique identifier for the stop.
 * @property name - The name of the stop, which can be either:
 *   - An object mapping language codes to names (e.g., `{ "en": "Main Street", "fr": "Rue Principale" }`).
 *   - A string representing the name.
 *   If a language-specific name is not available, fallback to the "en" key.
 * @property lat - (Optional) Latitude of the stop.
 * @property long - (Optional) Longitude of the stop.
 * @property meta - (Optional) Additional metadata associated with the stop.
 */
interface Stop {
  id: string;
  name?: { [lang: string]: string } | string;
  lat?: number;
  long?: number;
  // deno-lint-ignore no-explicit-any
  meta?: any;
}

/**
 * Represents a transportation route with optional multilingual support and metadata.
 *
 * @property id - Unique identifier for the route.
 * @property displayId - Optional display identifier for the route.
 * @property source - The name of the source, which can be either:
 *   - An object mapping language codes to sources (e.g., `{ "en": "Main Street", "fr": "Rue Principale" }`).
 *   If a language-specific name is not available, fallback to the "en" key.
 * @property dest - Optional destination identifier.
 * @property orig - Optional origin identifier.
 * @property stops - Optional list of stop identifiers along the route.
 * @property meta - Optional metadata associated with the route.
 */
interface Route {
  id: string;
  displayId?: string;
  source?: { [lang: string]: string } | string;
  name?: string;
  dest?: string;
  orig?: string;
  stops?: string[];
  // deno-lint-ignore no-explicit-any
  meta?: any;
}

/**
 * Represents the estimated time of arrival (ETA) information.
 *
 * @property isRealTime - Indicates whether the ETA is based on real-time data.
 * @property arrivalTime - The arrival time as a Unix timestamp (in seconds).
 */
interface Eta {
  isRealTime: boolean;
  arrivalTime: number;
}

export type { Stop, Route, Eta };
