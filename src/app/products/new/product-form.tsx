"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct } from "../product.api";
import ImageUpload from "./imageUpload";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [entrepreneurId, setEntrepreneurId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState(""); // Using imageUrl from ImageUpload

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
        image: imageUrl, // Use imageUrl here, not data.image
      });

      await createProduct({
        name: data.name,
        description: data.description,
        image: imageUrl, // Corrected: Use imageUrl instead of data.image
        price: parseFloat(data.price),
        entrepreneurId: parseInt(entrepreneurId, 10), // Asegúrate de enviar entrepreneurId como número
      });

      // Redirigir al perfil del emprendedor después de crear el producto
      router.push(`/entrepreneur/profile/${entrepreneurId}`);
      router.refresh();
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
      <div>
        <Label>Product Image</Label>
        <ImageUpload setImageUrl={setImageUrl} />{" "}
        {/* Ensure imageUrl is updated */}
      </div>

      <Button>Crear Producto</Button>
    </form>
  );
}
