"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct } from "../product.api";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [entrepreneurId, setEntrepreneurId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("entrepreneurId");
    if (id) {
      setEntrepreneurId(id); // Asegurarse de asignar el valor correcto
    }
    console.log("entrepreneurId:", id);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (!entrepreneurId) {
      console.error("No entrepreneur ID found");
      return;
    }

    try {
      console.log("Form data:", {
        ...data,
        price: parseFloat(data.price),
        entrepreneurId: parseInt(entrepreneurId, 10), // Convertir el ID a un número
      });

      await createProduct({
        name: data.name,
        description: data.description,
        image: data.image,
        price: parseFloat(data.price),
        entrepreneurId: parseInt(entrepreneurId, 10), // Asegúrate de enviar entrepreneurId como número
      });

      // Redirigir al perfil del emprendedor después de crear el producto
      router.push(`/entrepreneur/profile/${entrepreneurId}`);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Nombre del Producto</Label>
      <Input {...register("name")} />
      <Label>Descripción del Producto</Label>
      <Input {...register("description")} />
      <Label>Precio</Label>
      <Input {...register("price")} />
      <Label>Imagen</Label>
      <Input {...register("image")} />

      <Button>Crear Producto</Button>
    </form>
  );
}
