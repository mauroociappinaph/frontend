"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { profileApi } from "@/app/entrepreneur/profile/profile-api";

// Definir las interfaces
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
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
  const [entrepreneur, setEntrepreneur] = useState<Entrepreneur | null>(null); // Tipo Entrepreneur o null

  useEffect(() => {
    console.log("id:", id);
  }, [id]);

  useEffect(() => {
    const fetchEntrepreneur = async () => {
      if (id) {
        try {
          const data = await profileApi(id.toString());
          setEntrepreneur(data);
        } catch (error) {
          console.error("Error fetching entrepreneur:", error);
        }
      }
    };

    fetchEntrepreneur();
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl font-bold">{`Perfil Emprendedor con id: ${id}`}</h1>

      {/* Mostrar los datos del emprendedor */}
      {entrepreneur && (
        <div>
          <p>
            Nombre: {entrepreneur.firstName} {entrepreneur.lastName}
          </p>
          <p>Correo: {entrepreneur.email}</p>
          <p>Negocio: {entrepreneur.businessName}</p>
          <p>
            Descripción del negocio:{" "}
            {entrepreneur.businessDescription || "No disponible"}
          </p>

          {/* Mostrar los productos */}
          <h2 className="text-2xl font-semibold mt-4">Productos</h2>
          {entrepreneur.products.length > 0 ? (
            <ul>
              {entrepreneur.products.map((product) => (
                <li key={product.id}>
                  <p>Nombre: {product.name}</p>
                  <p>Descripción: {product.description}</p>
                  <p>Precio: {product.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      )}

      <Link
        href={`/products/new?entrepreneurId=${id}`}
        className={buttonVariants()}
      >
        Crear Producto
      </Link>
    </div>
  );
}

export default EntrepreneurProfile;
