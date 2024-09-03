import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function Entrepreneur() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Perfil Emprendedor</h1>

      <Link href="/products/new" className={buttonVariants()}>
        Crear Producto
      </Link>
    </div>
  );
}

export default Entrepreneur;
