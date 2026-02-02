import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

export function getDbClient(): Client {
  if (!client) {
    client = createClient({
      url: process.env.TURSO_DATABASE_URL || "file:local.db",
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  return client;
}

export default new Proxy({} as Client, {
  get(_target, prop) {
    const c = getDbClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = (c as any)[prop];
    if (typeof value === "function") {
      return value.bind(c);
    }
    return value;
  },
});
