import ButtonLogin from "./ButtonLogin";
import { BsCurrencyBitcoin } from "react-icons/bs";

export default function TopBar() {
  return (
    <div
      className="p-3 p-sm-3 p-lg-4 p-xxl-5 border-bottom border-secondary align-items-center d-flex justify-content-between glassMorphism"
      style={{ top: "0" }}
    >
      <BsCurrencyBitcoin fontSize={"3rem"} />
      <ButtonLogin />
    </div>
  );
}
