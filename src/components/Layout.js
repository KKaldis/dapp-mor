import Side from "./ui/Side";
import TopBar from "./TopBar";
import CubesBack from "./ui/CubesBack";
import { connect } from "react-redux";
import { motion } from "framer-motion";
// import Transfer from "./Transfer";
// import Balances from "./Balances";
// import Skordat from "./Skordat";

const Layout = (props) => {
  // let view = null;
  // // console.log(props.sideView);
  // switch (props.sideView) {
  //   case "Transfer":
  //     view = <Transfer />;
  //     break;
  //   case "Assets":
  //     view = <Balances />;
  //     break;
  //   default:
  //     view = <Skordat />;
  //     break;
  // }

  const clipPathVariants = {
    initial: {
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Your specified clip path
      top: "-100%",
      left: "-100%",
      bottom: "-100%",
      right: "-100%",
    },
    animate: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Start from 0
      top: "0%",
      left: "0%",
      bottom: "0%",
      right: "0%",
      transition: {
        duration: 2, // Adjust the duration as needed
      },
    },
  };

  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark text-light position-sticky">
      {/* <motion.div
        initial="initial"
        animate="animate"
        variants={clipPathVariants}
        className="h-100"
      > */}
      <TopBar />

      <CubesBack />
      <div
        className="d-flex flex-row align-items-center h-100 justify-content-center overflow-hidden"
        style={{ maxHeight: "inherit", boxSizing: "border-box" }}
      >
        {props.children}
        {/* {isAuthenticated && (
        <>
          <Side />
          <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column overflow-auto">
            {'view'}
          </div>
        </>
         )} */}
      </div>
      {/* </motion.div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideView: state.sideView,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
