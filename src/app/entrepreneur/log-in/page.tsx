import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { LogInForm } from "./log-in-form";

function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Iniciar sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <LogInForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
