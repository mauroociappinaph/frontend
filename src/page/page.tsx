import React from "react";
import Link from "next/link";
import Header from "@/components/component/Header";
import { Button } from "@/components/ui/button";

function LandingPage() {
  return (
    <div>
      <h1>Emprendeart</h1>
      <Header />
      <Link href="/home" passHref>
        <Button>Empezar</Button>
      </Link>
    </div>
  );
}

export default LandingPage;
