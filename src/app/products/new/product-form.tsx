"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));
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
