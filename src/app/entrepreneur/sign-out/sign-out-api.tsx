const localhost = "http://localhost:4000/api";

export async function signOut() {
  const res = await fetch(`${localhost}/entrepreneurs/signout`, {
    // Usando template string para la URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}
