# Frontend Application

## 📖 Descripción

Este proyecto es una aplicación frontend desarrollada utilizando **Next.js** y **TypeScript**. Su objetivo principal es proporcionar una interfaz de usuario dinámica y moderna, con una experiencia optimizada para la gestión de usuarios, autenticación y manejo de pagos, con integraciones a servicios externos como **Stripe** y **Cloudinary**.

## ✨ Características Principales

- **Autenticación** con NextAuth.js.
- **Gestión de imágenes** usando Cloudinary.
- **Manejo de formularios** con React Hook Form.
- **Solicitudes HTTP**
- **Sistema de pagos** integrado con Stripe.
- Gestión de estado global utilizando **Zustand**.
- **Estilos personalizados** con Tailwind CSS y componentes reutilizables con Radix UI.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu entorno:

- **Node.js** (versión 14 o superior)
- **npm** o **pnpm** como gestor de paquetes

## 🚀 Instalación

Sigue los pasos a continuación para configurar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mauroociappinaph/frontend
   ```

2. Dirígete al directorio del proyecto:

   ```bash
   cd frontend
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   # o
   pnpm install
   ```

## 💻 Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
# o
pnpm dev
```

Esto abrirá la aplicación en modo desarrollo en [http://localhost:3000](http://localhost:3000).

### Comandos adicionales:

- **Compilar el proyecto**:

  ```bash
  npm run build
  ```

- **Ejecutar en producción**:

  ```bash
  npm run start
  ```

- **Linter**:

  ```bash
  npm run lint
  ```

## 📚 Estructura del Proyecto

```
├── src/
│   ├── app/              # Páginas y rutas
│   ├── components/       # Componentes reutilizables
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Librerías y utilidades
│   ├── store/            # Almacenamiento de estado con Zustand
│   ├── utils/            # Utilidades varias
│   └── types/            # Definiciones de tipos
├── public/               # Archivos estáticos
├── package.json          # Dependencias y scripts del proyecto
├── tailwind.config.ts    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Next.js**: Framework React para renderizado del lado del servidor y del cliente.
- **TypeScript**: Superconjunto de JavaScript que añade tipos estáticos.
- **Tailwind CSS**: Framework para estilos CSS.
- **Zustand**: Manejo de estado global ligero y flexible.
- **NextAuth**: Autenticación para Next.js.
- **Axios**: Cliente HTTP basado en promesas.
- **Cloudinary**: Gestión de imágenes en la nube.
- **Stripe**: Procesador de pagos.
- **React Hook Form**: Manejo eficiente de formularios en React.

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, no dudes en hacer un fork, crear una nueva rama y enviar un Pull Request.

---

¡Gracias por revisar este proyecto! Si tienes alguna duda o sugerencia, no dudes en abrir un issue.
