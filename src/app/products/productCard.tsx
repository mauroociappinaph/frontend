"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "./product.api";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  async function handleDelete(id: any) {
    console.log("ProductCard: Eliminar producto", product.id);
    try {
      await deleteProduct(product.id);
      console.log("Producto eliminado exitosamente");
      setProducts(products.filter((product) => product.id !== id));
      router.refresh();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  }

  return (
    <div>
      <Card key={product.id}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <CardContent>
          <p>Descripción: {product.description}</p>
          <p>Precio: {product.price}</p>
        </CardContent>
        <CardFooter className="flex justify-center gap-2">
          <Button className="mt-5">Editar</Button>
          <Button
            className="mt-5"
            variant="destructive"
            onClick={() => handleDelete(product.id)}
          >
            Eliminar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
