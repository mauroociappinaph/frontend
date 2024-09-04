"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { logIn } from "./log-in-api";

export function LogInForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log("Form data:", data);
      const res = await logIn({
        email: data.email,
        password: data.password,
      });
      console.log("Log in response:", res);
      if (res && res.id) {
        // Redirigir a la página de perfil del usuario usando su id
        router.push(`/entrepreneur/profile/${res.id}`);
      } else {
        console.error("Error: ID not found in response");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Email</Label>
      <Input {...register("email")} />
      <Label>Contraseña</Label>
      <Input type="password" {...register("password")} />
      <Button type="submit">Iniciar sesión</Button>
    </form>
  );
}
