import { motion } from "framer-motion";

const Modal = (props) => {
  const variants = {
    open: { opacity: 1, zIndex: "2", pointerEvents: "auto" },
    closed: {
      opacity: 0,
      zIndex: "2",
      pointerEvents: "none",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="closed"
      exit="closed"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      animate={props.show ? "open" : "closed"}
      onClick={props.handleModal}
      className="Overlay "
    >
      <div className="Modal rgbShadow bg-dark">{props.children}</div>
    </motion.div>
  );
};

export default Modal;
