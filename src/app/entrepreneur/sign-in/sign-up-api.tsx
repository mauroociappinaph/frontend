export async function signUp({
  email,
  password,
  firstName,
  lastName,
  businessName,
}: {
  email: string;
  password: string | number;
  firstName: string | undefined;
  lastName: string | undefined;
  businessName: string;
}) {
  const res = await fetch("http://localhost:4000/api/entrepreneurs/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      businessName,
    }),
  });
  const data = await res.json();

  return data;
}
