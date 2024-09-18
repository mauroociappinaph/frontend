import { useRouter } from "next/router";
import { useStore } from "../../../../store/useStore";
import { signOut } from "../../sign-out/sign-out-api"; // Asegúrate de importar correctamente signOut desde donde esté ubicado

const useSignOutHandler = () => {
  const router = useRouter();
  const clearUser = useStore((state) => state.clearUser);

  const handleLogOut = async (): Promise<void> => {
    try {
      // Llamar a la función signOut para realizar la solicitud de logout
      const response = await signOut();

      if (response.message === "Logout successful") {
        // Eliminar el token del almacenamiento local
        localStorage.removeItem("token");

        // Limpiar el estado del usuario
        clearUser();

        // Redirigir al usuario a la página de inicio de sesión
        router.push("/login"); // En Next.js usamos router.push para navegar
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return handleLogOut;
};

export default useSignOutHandler;
