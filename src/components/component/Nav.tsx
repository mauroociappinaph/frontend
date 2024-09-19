"use client";
import React from "react";
import Link from "next/link";
import { useStore } from "../../store/useStore"; // Importar el estado global para acceder al emprendedor
import { CheckIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useNavHook from "../../hook/useNavHook";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Avatar de schadn
import { FaUserCircle } from "react-icons/fa"; // Fallback icon from React Icons

const Nav = () => {
  const { scrolled, menuOpen, toggleMenu } = useNavHook();
  const { entrepreneur: entrepreneur, clearUser } = useStore(); // Cambiamos 'user' por 'entrepreneur'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "h-16 bg-background/80 backdrop-blur-sm shadow-md"
          : "h-24 bg-background"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo y Home Link */}
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CheckIcon className="h-6 w-6 text-primary" />
          <span className="text-lg lg:text-xl font-bold text-primary">
            Emprendeart
          </span>
        </Link>

        {/* Opciones de navegación */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm text-primary lg:text-base font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary"
            prefetch={false}
          >
            Productos
          </Link>

          {/* Mostrar las opciones de 'Registrar' e 'Iniciar sesión' solo si no hay emprendedor autenticado */}
          {!entrepreneur && (
            <>
              <Link
                href="/entrepreneur/log-in"
                className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary"
                prefetch={false}
              >
                Iniciar sesión
              </Link>

              <Link
                href="/entrepreneur/sign-in"
                className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary"
                prefetch={false}
              >
                Registrar
              </Link>
            </>
          )}

          {/* Mostrar el avatar y la opción de 'Cerrar sesión' si el emprendedor está autenticado */}
          {entrepreneur && (
            <div className="flex items-center space-x-4">
              <Avatar>
                {entrepreneur.avatar ? (
                  <AvatarImage src={entrepreneur.avatar} />
                ) : (
                  <>
                    <FaUserCircle className="h-8 w-8 text-primary" />
                    <AvatarFallback>
                      {entrepreneur.email.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              <button onClick={clearUser} className="text-primary">
                Cerrar sesión
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
