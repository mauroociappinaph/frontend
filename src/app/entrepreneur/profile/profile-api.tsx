// src/app/entrepreneur/profile/profile-api.ts
export async function profileApi(id: string) {
  const res = await fetch(`http://localhost:4000/api/entrepreneurs/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch entrepreneur with id: ${id}`);
  }

  return await res.json();
}

export default profileApi;
