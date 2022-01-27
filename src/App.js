import { useMoralis } from "react-moralis";
import ButtonRGB from "./components/ButtonRGB";



function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div className="vw-100 vh-100 d-flex  bg-dark justify-content-center align-items-center">
        <ButtonRGB label="LogIn" click={() => authenticate({ signingMessage: "fsdfsdfsf" })} />
      </div>
    );
  }

  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark justify-content-center align-items-center">
      <h1 className="text-light">Welcome {user.get("username")}</h1>
      <ButtonRGB label="Logout" click={ () =>logout()} />


    </div>
  );
}

export default App;
