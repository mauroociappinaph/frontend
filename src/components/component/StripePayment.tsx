"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Banknote } from "lucide-react";

export default function StripePaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-blue-50 rounded-lg">
      <Card className="bg-black text-white p-4 rounded-lg">
        <CardContent className="flex items-center justify-center">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-5-9h10v2H7v-2z" />
          </svg>
          <span className="ml-2 text-xl font-bold">Pay</span>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Nombre completo</Label>
          <Input id="fullName" placeholder="Julia Pérez Sánchez" />
        </div>

        <div>
          <Label htmlFor="country">País</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Estados Unidos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">Estados Unidos</SelectItem>
              <SelectItem value="es">España</SelectItem>
              <SelectItem value="mx">México</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="address">Dirección</Label>
          <Input id="address" placeholder="Domicilio" />
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          variant={paymentMethod === "card" ? "default" : "outline"}
          className="flex-1"
          onClick={() => setPaymentMethod("card")}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Card
        </Button>
        <Button
          variant={paymentMethod === "afterpay" ? "default" : "outline"}
          className="flex-1"
          onClick={() => setPaymentMethod("afterpay")}
        >
          <Banknote className="mr-2 h-4 w-4" />
          Afterpay
        </Button>
        <Button
          variant={paymentMethod === "klarna" ? "default" : "outline"}
          className="flex-1"
          onClick={() => setPaymentMethod("klarna")}
        >
          K
        </Button>
      </div>

      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Número de tarjeta</Label>
            <Input id="cardNumber" placeholder="1234 1234 1234 1234" />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="expiryDate">Fecha de caducidad</Label>
              <Input id="expiryDate" placeholder="MM / AA" />
            </div>
            <div className="flex-1">
              <Label htmlFor="securityCode">Código de seguridad</Label>
              <Input id="securityCode" placeholder="CVV" />
            </div>
          </div>
        </div>
      )}

      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
        Enviar pedido
      </Button>
    </div>
  );
}
