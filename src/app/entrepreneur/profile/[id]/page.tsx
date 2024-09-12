"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { profileApi } from "@/app/entrepreneur/profile/profile-api";
import { ProductCard } from "@/app/products/productCard";

// Definir las interfaces
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Entrepreneur {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  businessDescription?: string;
  products: Product[];
}

function EntrepreneurProfile() {
  const { id } = useParams();
  const [entrepreneur, setEntrepreneur] = useState<Entrepreneur | null>(null);

  useEffect(() => {
    console.log("id:", id);
  }, [id]);

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
      <h1 className="text-4xl font-bold">{`Perfil Emprendedor con id: ${id}`}</h1>
      <div>
        {/* Mostrar los datos del emprendedor */}
        {entrepreneur && (
          <div>
            <p>
              Nombre: {entrepreneur?.firstName} {entrepreneur?.lastName}
            </p>
            <p>Correo: {entrepreneur?.email}</p>
            <p>Negocio: {entrepreneur?.businessName}</p>
            <p>
              Descripción del negocio:{" "}
              {entrepreneur?.businessDescription || "No disponible"}
            </p>

            {/* Mostrar los productos */}
            <div>
              <h2 className="text-2xl font-semibold mt-4 text-center">
                Productos
              </h2>
              {entrepreneur?.products?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                  {entrepreneur?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
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
