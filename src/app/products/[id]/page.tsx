"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProduct } from "../product.api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../../../types/types";

const ProductPage = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener el producto cuando el componente se monta
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProduct(id); // Obtener el producto usando el ID
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
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
          <Button className="mt-5">Eliminar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Exportar el componente como `default`
export default ProductPage;
