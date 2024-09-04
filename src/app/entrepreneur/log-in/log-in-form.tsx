"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { logIn } from "./log-in-api";
export function LogInForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log("Form data:", data);
    await logIn({
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log("Log in response:", res);
    });
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
