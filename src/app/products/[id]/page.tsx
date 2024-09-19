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
import { ProductEnterpreunerID } from "../../../types/types";
import Link from "next/link";

const ProductPage = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState<ProductEnterpreunerID | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener el producto cuando el componente se monta
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        if (typeof id === "string") {
          const data = await getProduct(id);
          console.log("Datos del producto:", data); // Verificar los datos obtenidos
          setProduct(data);
        } else {
          setError("ID de producto no válido");
        }
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
          {product.entrepreneursId ? (
            <>
              <p>ID del Emprendedor: {product.entrepreneursId}</p>{" "}
              {/* Mostrar el ID en la interfaz */}
              <Link
                href={`/entrepreneur/profile/${product.entrepreneursId}`}
                passHref
              >
                <Button className="mt-5">Contactar Emprendedor</Button>
              </Link>
            </>
          ) : (
            <p>Emprendedor no disponible</p>
          )}
        </CardFooter>
        <Link href={`/home`} passHref>
          <Button className="mt-5">Volver a Productos</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProductPage;
