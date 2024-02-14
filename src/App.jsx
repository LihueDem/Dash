//import { LoginPage } from "./layouts/AuthLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import { GeneralLayout } from "./layouts/GeneralLayout.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  const { state } = useContext(AuthContext);
  console.log(state);
  return (
    <>
      {!state?.isLogged && <AuthLayout />}
      {state?.isLogged && <GeneralLayout />}
    </>
  );
}

export default App;
