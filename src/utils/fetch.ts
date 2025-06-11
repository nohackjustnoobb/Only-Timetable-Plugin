/**
 * Wraps a fetch function with retry logic and optional JSON parsing.
 *
 * @param fetchFunc - A function that returns a Promise resolving to a Response object.
 * @param retries - The maximum number of retry attempts (default is 5).
 * @param delay - The delay in milliseconds between retries (default is 250).
 * @param isJson - Whether to parse the response as JSON (default is true). If false, returns the response as a string.
 * @returns A Promise resolving to the parsed JSON object, or a string if `isJson` is false.
 * @throws If all retry attempts fail, throws an error indicating the failure.
 */
async function fetchWrapper(
  fetchFunc: () => Promise<Response>,
  retries = 5,
  delay = 250,
  isJson = true
  // deno-lint-ignore no-explicit-any
): Promise<any> {
  let attempts = 0;

  while (attempts < retries) {
    try {
      const resp = await fetchFunc();
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);

      const str = await resp.text();
      if (!isJson) return str;

      return JSON.parse(str);
      // deno-lint-ignore no-empty
    } catch (_) {}

    attempts++;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  throw new Error(`Failed to fetch after ${attempts} attempts`);
}

export { fetchWrapper };
