import {
  ArrowRight,
  Users,
  Lightbulb,
  HandshakeIcon,
  Rocket,
} from "lucide-react";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Acerca de Nosotros
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Somos la plataforma que conecta emprendedores visionarios con clientes
          potenciales, impulsando el crecimiento y fomentando relaciones
          comerciales duraderas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-primary" />}
            title="Innovación Constante"
            description="Fomentamos soluciones creativas y personalizadas para cada emprendedor y cliente."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Colaboración Efectiva"
            description="Facilitamos conexiones significativas que impulsan el éxito mutuo."
          />
          <FeatureCard
            icon={<HandshakeIcon className="h-8 w-8 text-primary" />}
            title="Confianza y Transparencia"
            description="Construimos relaciones basadas en la honestidad y el respeto mutuo."
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Nuestro Compromiso</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos dedicamos al éxito de emprendedores y clientes por igual.
            Nuestra plataforma no solo conecta, sino que también nutre y
            potencia cada relación comercial, asegurando un impacto positivo y
            duradero en los negocios de todos los involucrados.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Descubre cómo podemos ayudarte a crecer
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 text-center">
          <Rocket className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            Impulsa tu Negocio con Nosotros
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ya sea que estés comenzando tu viaje emprendedor o buscando expandir
            tu negocio, nuestra plataforma te ofrece las herramientas y
            conexiones que necesitas para alcanzar nuevas alturas.
          </p>
          <Link href="/entrepreneur/sign-in">
            <Button> Únete a Nuestra Comunidad</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
