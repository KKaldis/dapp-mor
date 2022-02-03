import React from "react";
import ButtonLogin from "./ButtonLogin";
import { BsCurrencyBitcoin } from "react-icons/bs";

export default function TopBar() {
  return (
    <div
      className="p-5 border-bottom border-secondary align-items-center d-flex justify-content-between"
      style={{ top: "0" }}
    >
      <BsCurrencyBitcoin fontSize={"3rem"} /> <ButtonLogin />
    </div>
  );
}
