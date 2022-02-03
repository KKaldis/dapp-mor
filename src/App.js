import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboards from "./components/Dashboards";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();

  return <Layout>{!isAuthenticated ? <Login /> : <Dashboards />}</Layout>;
}

export default App;
