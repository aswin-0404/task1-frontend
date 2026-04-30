export const getCurrentUser = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/me/", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) return null;

  return await res.json();
};