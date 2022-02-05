import ButtonRGB from "./ButtonRGB";
import { BiSend, BiLockAlt, BiCoin, BiRocket, BiHive } from "react-icons/bi";
import { connect } from "react-redux";
import { sideViewChanged } from "../../redux/actions";

const Side = ({ changeView }) => {
  return (
    <div
      className=" text-center p-3 p-sm-3 p-lg-4 p-xxl-5
     border-end border-secondary h-100 d-flex flex-column 
     glassMorphism justify-content-evenly"
    >
      <ButtonRGB
        onClick={() => changeView("Upcoming")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiRocket className="me-3" />
        Upcoming
      </ButtonRGB>
      <ButtonRGB
        onClick={() => changeView("Stake")}
        className="bg-dark border-secondary d-flex
        justify-content-center"
      >
        <BiLockAlt className="me-3" />
        Stake
      </ButtonRGB>
      <ButtonRGB
        onClick={() => changeView("Transfer")}
        className="bg-dark border-secondary d-flex
       justify-content-center"
      >
        <BiSend className="me-3" />
        Transfer
      </ButtonRGB>
      <ButtonRGB
        onClick={() => changeView("Assets")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiCoin className="me-3" />
        Assets
      </ButtonRGB>
      <ButtonRGB
        onClick={() => changeView("Skordat")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiHive className="me-3" />
        Skordat
      </ButtonRGB>
    </div>
  );
};
const mapStateToProps = (state) => ({
  sideView: state.sideView,
});

const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => dispatch(sideViewChanged(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);
