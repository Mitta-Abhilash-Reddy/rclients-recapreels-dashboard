const BASE_URL = ""; // development proxy via Vite server

export async function getDashboard(linkId: string) {
  const res = await fetch(`/api/p/${linkId}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}
