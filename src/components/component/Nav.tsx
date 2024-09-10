import React from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CheckIcon className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-primary ">Emprendeart</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          prefetch={false}
        >
          <span className="text-primary">Home</span>
        </Link>
        <Link
          href="/home"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          prefetch={false}
        >
          <span className="text-primary">Productos</span>
        </Link>
        <Link
          href="/entrepreneur/log-in"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          prefetch={false}
        >
          <span className="text-primary">Iniciar sesión</span>
        </Link>
        <Link
          href="/entrepreneur/sign-in"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          prefetch={false}
        >
          <span className="text-primary">Registrarse</span>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
