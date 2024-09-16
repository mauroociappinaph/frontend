"use client";
import React from "react";
import { getProducts } from "../products/product.api";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "@/components/component/Paginador"; // Importar el paginador

export const dynamic = "force-dynamic";

async function HomePage() {
  const products = await getProducts();
  const itemsPerPage = 4; // Número de productos por página

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <div className="container">
      <CardHeader>
        <CardTitle className="text-center"> Todos los Productos </CardTitle>
      </CardHeader>

      {/* Implementar el Paginador */}
      <PaginationDemo totalItems={products.length} itemsPerPage={itemsPerPage}>
        {(paginatedProducts) => (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((index: number) => {
              const product = products[index];

              if (!product) {
                return null;
              }

              if (!product.id) {
                console.error("Product has no ID:", product);
                return null;
              }

              if (!product.name) {
                console.error("Product has no name:", product);
                return null;
              }

              return (
                <Card className="m-2 p-2" key={product.id}>
                  <CardHeader>
                    <CardTitle className="text-center">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  {product.image ? (
                    <img
                      className="w-full h-48  object-cover"
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <p>No image available</p>
                    </div>
                  )}
                  <CardContent>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                  </CardContent>

                  {/* Botón colocado debajo del contenido */}
                  <div className="flex justify-center mt-4">
                    <Link href={`/products/${product.id}`} passHref>
                      <Button>Ver Producto</Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </PaginationDemo>
    </div>
  );
}

export default HomePage;
