const API_BASE = import.meta.env.VITE_API_URL ?? "";

/** GET helper returning JSON */
export async function getJSON(path, { signal } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Accept: "application/json" },
    credentials: "include", // remove if you don't use cookies
    signal,
  });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`);
  return res.json();
}

/** POST helper returning JSON */
export async function postJSON(path, body, { signal } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
    signal,
  });
  if (!res.ok) throw new Error(`POST ${path} -> ${res.status}`);
  return res.json();
}
