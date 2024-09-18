"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Menu Hamburguesa visible en móviles */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Links del menú en desktop */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm text-primary lg:text-base font-medium hover:underline underline-offset-4 "
            prefetch={false}
          >
            <span className="text-primary">Home</span>
          </Link>
          <Link
            href="/home"
            className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            <span className="text-primary">Productos</span>
          </Link>
          <Link
            href="/entrepreneur/log-in"
            className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            <span className="text-primary">Iniciar sesión</span>
          </Link>
          <Link
            href="/entrepreneur/sign-in"
            className="text-sm lg:text-base font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            <span className="text-primary">Registrarse</span>
          </Link>
        </nav>

        {/* Menú desplegable en móviles */}
        {menuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-background shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/home"
                  className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/entrepreneur/log-in"
                  className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  href="/entrepreneur/sign-in"
                  className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
