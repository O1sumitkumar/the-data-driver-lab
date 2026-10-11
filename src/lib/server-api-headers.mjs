/** Add the private API credential only in server entry points. */
export function serverApiHeaders(headers = { Accept: "application/json" }) {
  const result = new Headers(headers);
  const key = process.env.TDD_API_SERVER_KEY;
  if (key) result.set("X-API-Key", key);
  return result;
}
