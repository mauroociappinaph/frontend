"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { profileApi } from "@/app/entrepreneur/profile/profile-api";
import { ProductCard } from "@/app/products/productCard";
import type { Entrepreneur } from "../../../../types/types";
import { PaginationDemo } from "@/components/component/Paginador";

function EntrepreneurProfile() {
  const { id } = useParams();
  const [entrepreneur, setEntrepreneur] = useState<Entrepreneur | null>(null);
  const itemsPerPage = 4;

  useEffect(() => {
    if (id) {
      const fetchEntrepreneur = async () => {
        try {
          const data = await profileApi(id.toString());
          setEntrepreneur(data);
        } catch (error) {
          console.error("Error fetching entrepreneur:", error);
        }
      };

      fetchEntrepreneur();
    }
  }, [id]);

  return (
    <div className="container m-6">
      <h1 className="text-4xl font-bold">{`${entrepreneur?.businessName}`}</h1>
      <div>
        {entrepreneur && (
          <div>
            <p>
              Nombre: {entrepreneur?.firstName} {entrepreneur?.lastName}
            </p>
            <p>Correo: {entrepreneur?.email}</p>

            <p>
              Descripción del negocio:{" "}
              {entrepreneur?.businessDescription || "No disponible"}
            </p>
            <div>
              <h2 className="text-2xl font-semibold mt-4 text-center">
                Productos
              </h2>
              {entrepreneur?.products?.length > 0 ? (
                <PaginationDemo
                  totalItems={entrepreneur?.products.length}
                  itemsPerPage={itemsPerPage}
                >
                  {(paginatedProducts) => (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                      {paginatedProducts.map((index) => {
                        const product = entrepreneur.products[index];
                        return (
                          <ProductCard key={product.id} product={product} />
                        );
                      })}
                    </div>
                  )}
                </PaginationDemo>
              ) : (
                <p>No hay productos disponibles.</p>
              )}
            </div>
          </div>
        )}
      </div>
      {entrepreneur && (
        <Link
          href={`/products/new?entrepreneurId=${entrepreneur?.id}`}
          className={buttonVariants()}
        >
          Crear Producto
        </Link>
      )}
    </div>
  );
}

export default EntrepreneurProfile;
