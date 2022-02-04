import Layout from "./components/Layout";
import Login from "./components/Login";
import Transfer from "./components/Transfer";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();

  return <Layout>{!isAuthenticated ? <Login /> : <Transfer />}</Layout>;
}

export default App;
