"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function EntrepreneurProfile() {
  const { id } = useParams(); // Obtener el ID de los parámetros de la URL

  useEffect(() => {
    console.log("id:", id); // Debe imprimir el id obtenido de la URL
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl font-bold">{`Perfil Emprendedor con id: ${id}`}</h1>
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
