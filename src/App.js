import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { connect } from "react-redux";

function App() {
  return (
    <Layout>
      <span className="stripes"></span>
      <ToastContainer style={{ zIndex: 1 }} />
      {/* <ToastContainer style={{ zIndex: 1 }} id="toastIdComplete" /> */}
      <Login />
      {/* <Welcome /> */}
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
