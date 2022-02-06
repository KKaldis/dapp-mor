import RGBButton from "./RGBButton";
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
      <RGBButton
        onClick={() => changeView("Upcoming")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiRocket className="me-3" />
        Upcoming
      </RGBButton>
      <RGBButton
        onClick={() => changeView("Stake")}
        className="bg-dark border-secondary d-flex
        justify-content-center"
      >
        <BiLockAlt className="me-3" />
        Stake
      </RGBButton>
      <RGBButton
        onClick={() => changeView("Transfer")}
        className="bg-dark border-secondary d-flex
       justify-content-center"
      >
        <BiSend className="me-3" />
        Transfer
      </RGBButton>
      <RGBButton
        onClick={() => changeView("Assets")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiCoin className="me-3" />
        Assets
      </RGBButton>
      <RGBButton
        onClick={() => changeView("Skordat")}
        className="bg-dark border-secondary d-flex
      justify-content-center"
      >
        <BiHive className="me-3" />
        Skordat
      </RGBButton>
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
