import { useState } from "react";
import RGBButton from "./RGBButton";

export default function Button1({ children }) {
  const [hovered, setHovered] = useState(false);

  return true ? (
    <RGBButton
      className={`bg-dark border-primary ${!hovered ? "rgbShadow neonText" : null
        }`}
    >
      {children}
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

        {children}
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
        >
          {children}
        </li>
      </ul>
    </div>
  );
}
