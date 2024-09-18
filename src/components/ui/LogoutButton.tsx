import useSignOutHandler from "../../app/entrepreneur/sign-out/handler/sign-out-api-handler";

const LogoutButton = () => {
  return <button onClick={useSignOutHandler}>Cerrar Sesión</button>;
};

export default LogoutButton;
