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

const Login = ({ decoding, changeDecodingTime, changeIsDecoding }) => {
  const { decodingTime, isDecoding } = decoding;
  console.log(decoding);
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

  // const randomizedStrings = useRef();
  // useRetext(randomizedStrings, "retext-select");
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" }, // Initial state (hidden)
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    }, // Visible state (revealed)
  };
  useEffect(() => {
    changeDecodingTime(5000);
    changeIsDecoding(true);
  }, []);

  const onStart = () => {
    toast(
      <>
        <FaConnectdevelop className="me-3 mb-0 rotateZ h4" color="white" />
        Decoding Message...
      </>,
      {
        position: "bottom-right",
        toastId: "toastIdDecoding",
        // pauseOnFocusLoss: false,
        hideProgressBar: true,
        // closeOnClick: false,
        pauseOnHover: false,
        // draggable: true,
        // progress: true,
        theme: "dark",
        // type: "info",
        closeButton: false,
        autoClose: decodingTime,
        bodyClassName: "rgbShadow bg-dark p-3 border-primary rounded",
      }
    );
    // You can execute any custom code when the animation starts here
  };

  const onFinish = () => {
    toast("Decoding Complete", {
      position: "bottom-right",
      // toastId: "toastIdComplete",
      autoClose: false,
      hideProgressBar: true,
      closeButton: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
      bodyClassName: "rgbShadow bg-dark p-3 border-primary rounded",
    });
    changeIsDecoding(false);

    // You can execute any custom code when the animation finishes here
  };
  return (
    <Tilt className="Tilt box" options={options}>
      <div className="p-5">
        <div
          className="rgbShadow  glassMorphism border-primary rounded  fancy-border"
          // ref={randomizedStrings}
        >
          {/* Animate the comment-out tags */}
          <motion.h3
            className="neonText rounded m-0 delay py-4 px-5 text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {useTextRandomize("welcome", decodingTime, true, onStart, onFinish)}
          </motion.h3>

          <motion.p variants={textVariants} initial="hidden" animate="visible">
            <b>{useTextRandomize(`Name: `, decodingTime, true)}</b>
            {useTextRandomize(`Kostas Kaldis`, decodingTime, true)}
          </motion.p>

          <motion.p variants={textVariants} initial="hidden" animate="visible">
            <b>{useTextRandomize(`Tech: `, decodingTime, true)}</b>
            {useTextRandomize(`Kostas Kaldis`, decodingTime, true)}
          </motion.p>

          <motion.ul variants={textVariants} initial="hidden" animate="visible">
            <motion.li
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {useTextRandomize(`🚀 Early Access`, decodingTime, true)}
            </motion.li>
            <motion.li
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {useTextRandomize(
                `💰 Investment Opportunities`,
                decodingTime,
                true
              )}
            </motion.li>
            <motion.li
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {useTextRandomize(`🤝 Community`, decodingTime, true)}
            </motion.li>
          </motion.ul>

          <motion.p variants={textVariants} initial="hidden" animate="visible">
            {useTextRandomize(
              `🚀 Start exploring and stay tuned for our upcoming project launches!
            `,
              decodingTime,
              true
            )}
          </motion.p>
          <Button1>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              OK!
            </motion.div>
          </Button1>
        </div>
      </div>
    </Tilt>
  );
};

const mapStateToProps = (state) => ({
  decoding: state.decoding,
});

const mapDispatchToProps = (dispatch) => ({
  changeDecodingTime: (decodingTime) => dispatch(setDecodingTime(decodingTime)),
  changeIsDecoding: (isDecoding) => dispatch(setIsDecoding(isDecoding)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
