"use client";
import React from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";
import useNavHook from "../../hook/useNavHook";
import { useStore } from "../../store/useStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Nav = () => {
  const { scrolled, menuOpen, toggleMenu } = useNavHook();
  const { user, clearUser } = useStore();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "h-16 bg-background/80 backdrop-blur-sm shadow-md"
          : "h-24 bg-background"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
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

        {user ? (
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatarUrl || "/default-avatar.png"} />{" "}
              <AvatarFallback>
                {user.email.charAt(0).toUpperCase()}
              </AvatarFallback>{" "}
              {/* Fallback para el avatar */}
            </Avatar>
            <button onClick={clearUser} className="text-primary">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/entrepreneur/sign-in">Iniciar sesión</Link>
              </li>
              <li>
                <Link href="/entrepreneur/sign-up">Registrarse</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
