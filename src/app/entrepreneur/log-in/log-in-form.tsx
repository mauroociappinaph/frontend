"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { logIn } from "./log-in-api";
import { useStore } from "@/store/useStore";

export function LogInForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { setUser } = useStore();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await logIn({
        email: data.email,
        password: data.password,
      });

      if (result.access_token) {
        localStorage.setItem("access_token", result.access_token);

        setUser(result.entrepreneur);

        router.push(`/entrepreneur/profile/${result.entrepreneur.id}`);
      } else {
        console.error("Error en la autenticación");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
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
