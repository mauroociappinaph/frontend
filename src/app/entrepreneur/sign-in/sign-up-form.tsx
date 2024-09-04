"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signUp } from "./sign-up-api";

export function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log("Form data:", data);
    await signUp({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      businessName: data.businessName,
    }).then((res) => {
      console.log("Sign up response:", res);
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <Label>Nombre</Label>
      <Input {...register("firstName")} /> {/* Cambiar "name" a "firstName" */}
      <Label>Apellido</Label>
      <Input {...register("lastName")} />{" "}
      {/* Cambiar "Apellido" a "lastName" */}
      <Label>Email</Label>
      <Input {...register("email")} />
      <Label>Contraseña</Label>
      <Input type="password" {...register("password")} />
      <Label>Nombre de Negocio</Label>
      <Input {...register("businessName")} />
      <Button type="submit">Registrarse</Button>
    </form>
  );
}
