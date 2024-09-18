const localhost = "http://localhost:4000/api";

export async function createProduct({
  name,
  price,
  image,
  description,
  entrepreneurId,
}: {
  name: string;
  price: number;
  image: string;
  description: string;
  entrepreneurId: number;
}) {
  const res = await fetch(`${localhost}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      image,
      description,
      entrepreneurId, // Enviar el ID del emprendedor al backend
    }),
  });
  const data = await res.json();
  return data;
}

export async function getProducts() {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export async function deleteProduct(id: string) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}

export async function getProduct(id: string) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
