import ButtonLogin from "./ui/ButtonLogin";
import { BsCurrencyBitcoin } from "react-icons/bs";
import Logo from "./ui/Logo";

export default function TopBar() {
  return (
    <div
      className="p-2 p-sm-2 p-lg-3 p-xxl-4 border-bottom border-secondary align-items-center d-flex justify-content-between glassMorphism"
      style={{ top: "0" }}
    >
      <Logo />
      {/* <BsCurrencyBitcoin fontSize={"3rem"} /> */}
      <ButtonLogin />
    </div>
  );
}
