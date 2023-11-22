import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { connect } from "react-redux";
import { FaConnectdevelop } from "react-icons/fa";
import { useEffect } from "react";

function App({ decoding }) {
  const { isDecoding } = decoding;

  useEffect(() => {}, [isDecoding]);

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

const mapStateToProps = (state) => ({
  decoding: state.decoding,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
