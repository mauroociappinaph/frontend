import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-600 py-6">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Emprendeart</h3>
        <p className="text-sm mb-4">
          Conectamos emprendedores con oportunidades, impulsando el crecimiento
          y el éxito en los negocios.
        </p>
        <p className="text-xs mb-2">
          Innovación | Colaboración | Confianza | Impacto Positivo
        </p>
        <p className="text-xs mb-4">Contacto: info@emprenderconecta.com</p>
        <Link
          href="https://www.instagram.com/emprenderconecta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gray-400 hover:text-gray-600 transition-colors mb-4"
        >
          <Instagram className="w-6 h-6" />
          <span className="sr-only">Síguenos en Instagram</span>
        </Link>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Emprendeart. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
