export async function signUp(email: string, password: string) {
  const res = await fetch("http://localhost:4000/api/entrepreneurs/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      firstName: "",
      lastName: "",
      businessName: "",
    }),
  });
  const data = await res.json();
  console.log(data);
}
