import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { SignUpForm } from "./sign-up-form";

function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
