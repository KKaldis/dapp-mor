import { useState } from "react";
// import { useMoralis } from "react-moralis";
import RGBButton from "./RGBButton";
import { IoWalletOutline } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa";
import Modal from "./Modal";

export default function ButtonLogin() {
  // const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const [hovered, setHovered] = useState(false);

  return true ? (
    <RGBButton
      className={`bg-dark border-primary ${
        !hovered ? "rgbShadow neonText" : null
      }`}
      // onClick={() => authenticate({ signingMessage: "Logging" })}
    >
      {/* <IoWalletOutline className="me-3" />  */}
      <FaConnectdevelop className="me-3 mb-0 rotateZ h4" color="white" />
      Connect
    </RGBButton>
  ) : (
    <div
      style={{ zIndex: 0, height: 60 }}
      className="position-relative text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(false)}
    >
      <RGBButton
        className="bg-dark border-primary w-100 logout"
        // message={` 0x...${user.attributes.ethAddress.slice(-4)}`}
        // messagehover="Logout"
      >
        <IoWalletOutline className="me-3" />
        {"0x...654}"}
      </RGBButton>
      <ul>
        <li
          className="position-absolute bg-dark rgbButton rounded border-primary logout"
          style={{
            zIndex: hovered ? 0 : -1,
            top: hovered ? 60 : 0,
            left: "0",
            right: "0",
            transition: "0.33s",
            opacity: hovered ? 1 : 0,
            margin: "0rem 1rem",
          }}
          // onClick={() => logout()}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
