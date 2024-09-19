import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { ProductForm } from "./product-form";

function ProductNewPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Crear Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductNewPage;
