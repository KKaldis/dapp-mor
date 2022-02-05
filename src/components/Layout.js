import Side from "./ui/Side";
import TopBar from "./TopBar";
import CubesBack from "./ui/CubesBack";
import { useMoralis } from "react-moralis";
import { connect } from "react-redux";
import Transfer from "./Transfer";

const Layout = (props) => {
  const { isAuthenticated } = useMoralis();
  let view = null;
  console.log(props.sideView);
  switch (props.sideView) {
    case "Transfer":
      view = <Transfer />;
      break;
    default:
      break;
  }

  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark text-light">
      <TopBar />
      <CubesBack />
      <div
        className="d-flex flex-row align-items-center h-100 justify-content-center"
        style={{ maxHeight: "inherit", boxSizing: "border-box" }}
      >
        {props.children}
        {isAuthenticated && (
          <>
            <Side />
            <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
              {view}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideView: state.sideView,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
