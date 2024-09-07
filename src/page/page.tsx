import React from "react";
import Link from "next/link";
import Header from "@/components/component/Header";
import AboutUs from "@/components/component/AboutUs";

function LandingPage() {
  return (
    <div>
      <h1>Emprendeart</h1>
      <Header />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
