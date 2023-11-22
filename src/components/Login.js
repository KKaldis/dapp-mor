import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Button1 from "./ui/Button1";
import { useRef } from "react";
import useRetext from "../hooks/useRetext";
import useTextRandomize from "../hooks/useTextRandomize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setDecodingTime, setIsDecoding } from "../redux/actions";
import { FaConnectdevelop } from "react-icons/fa";
import RGBButton from "./ui/RGBButton";

const Login = ({ decoding, changeDecodingTime, changeIsDecoding }) => {
  const { decodingTime, isDecoding } = decoding;

  const options = {
    reverse: false, // reverse the tilt direction
    max: 1, // max tilt rotation (degrees)
    perspective: 100, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" }, // Initial state (hidden)
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  };
  useEffect(() => {
    changeDecodingTime(5000);
    changeIsDecoding(true);
  }, []);

  const onStart = () => {
    toast(<Test />, {
      useLazyContainer: false,
      position: "top-right",
      toastId: "toastIdDecoding",
      hideProgressBar: true,
      pauseOnHover: false,
      theme: "dark",
      closeButton: false,
      autoClose: 9000,
      bodyClassName: "rgbShadow bg-dark p-3 border-primary rounded d-flex",
    });
  };

  const onFinish = () => {
    changeIsDecoding(false);
  };
  return (
    <Tilt className="Tilt box" options={options}>
      <motion.div
        className="p-5 tilt-box"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="rgbShadow  glassMorphism border-primary rounded  fancy-border tilt-box">
          <h3
            className="neonText rounded m-0 delay py-4 px-5 text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {useTextRandomize(`Hello`, 50, false)}
          </h3>

          <p>
            {useTextRandomize(
              `Welcome to my portfolio page. Please be aware that this portfolio is designed to showcase intricate animations and stylish effects, which may require a more robust computer to fully experience.`,
              decodingTime,
              true,
              onStart,
              onFinish
            )}
          </p>

          <p>
            {useTextRandomize(
              `If you encounter any performance issues due to the animations, you can easily adjust or disable them using the buttons provided above.`,
              decodingTime,
              true
            )}
          </p>
          <ul>
            <li>
              {useTextRandomize(`Animated Backround`, decodingTime, true)}
            </li>
            <li>{useTextRandomize(`Arcade Stripes`, decodingTime, true)}</li>
            <li>{useTextRandomize(`RGB`, decodingTime, true)}</li>
          </ul>

          {!isDecoding && (
            <RGBButton
              className="bg-dark border-primary rgbShadow "
              hasAnimate={!isDecoding}
            >
              <div>OK!</div>
            </RGBButton>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const ToastMessage = ({ decoding }) => {
  const { isDecoding } = decoding;
  console.log(isDecoding);

  return (
    <RGBButton className="bg-dark border-primary rgbShadow ">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center fw-bolder text-nowrap">
          <FaConnectdevelop
            className={`me-3 mb-0  h4 rotateZ ${
              !isDecoding && "pause-animation"
            }`}
            color="white"
          />
          {isDecoding ? "Decoding Message..." : "Decoding Complete"}
        </div>
      </div>
      <div>{isDecoding ? "Please wait" : "Click to close"}</div>
    </RGBButton>
  );
};

const mapStateToProps = (state) => ({
  decoding: state.decoding,
});

const mapDispatchToProps = (dispatch) => ({
  changeDecodingTime: (decodingTime) => dispatch(setDecodingTime(decodingTime)),
  changeIsDecoding: (isDecoding) => dispatch(setIsDecoding(isDecoding)),
});

export const Test = connect(mapStateToProps, mapDispatchToProps)(ToastMessage);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
