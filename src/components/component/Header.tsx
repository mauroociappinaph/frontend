import React from "react";

export default function Header() {
  return (
    <header className=" w-full bg-[url('https://img.freepik.com/foto-gratis/gente-colabora-acogedor-cafe-al-aire-libre-plantas-e-iluminacion-calida-todos-trabajando-computadoras-portatiles_1258-296128.jpg?t=st=1725490323~exp=1725493923~hmac=a4468550046ecf6819ef82e2a80970ed3bfa240e4eb9d4f95ce6cc15d8f090b7&w=1800')] bg-cover bg-center bg-no-repeat py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6">
        <div className="inline-flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Conecta con tus clientes
          </h1>
        </div>
        <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base/relaxed xl:text-xl/relaxed text-white">
          {typeof window !== "undefined" &&
          window.location.href.includes("localhost") ? (
            <span className="bg-yellow-500 p-1 text-white">
              Warning: This is a development environment.
            </span>
          ) : null}
          Nuestra plataforma te ayuda a encontrar y conectar con potenciales
          clientes para hacer crecer tu negocio.
        </p>
      </div>
    </header>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
