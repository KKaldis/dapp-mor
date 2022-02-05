import Layout from "./components/Layout";
import Login from "./components/Login";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();

  return <Layout>{!isAuthenticated && <Login />}</Layout>;
}

export default App;
