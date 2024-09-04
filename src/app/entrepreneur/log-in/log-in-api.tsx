export async function logIn({
  email,
  password,
}: {
  email: string;
  password: string | number;
}) {
  const res = await fetch("http://localhost:4000/api/entrepreneurs/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();

  return data;
}
