import ButtonRGB from "./ui/ButtonRGB";
import { BiSend, BiLockAlt, BiCoin, BiRocket, BiHive } from "react-icons/bi";

export default function Side() {
  return (
    <div
      className=" text-center p-3 p-sm-3 p-lg-4 p-xxl-5
     border-end border-secondary h-100 d-flex flex-column 
     glassMorphism justify-content-evenly"
    >
      <ButtonRGB
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiRocket className="me-3" />
        Upcoming
      </ButtonRGB>
      <ButtonRGB
        className="bg-dark border-secondary d-flex
        justify-content-center"
      >
        <BiLockAlt className="me-3" />
        Stake
      </ButtonRGB>
      <ButtonRGB
        className="bg-dark border-secondary d-flex
       justify-content-center"
      >
        <BiSend className="me-3" />
        Transfer
      </ButtonRGB>
      <ButtonRGB
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiCoin className="me-3" />
        Assets
      </ButtonRGB>
      <ButtonRGB
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiHive className="me-3" />
        Skordat
      </ButtonRGB>
    </div>
  );
}
