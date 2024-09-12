export const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 404:
      return "Recurso no encontrado.";
    case 500:
      return "Error interno del servidor.";
    default:
      return "Ocurrió un error inesperado.";
  }
};
