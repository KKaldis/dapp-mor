import Side from "./Side";
import TopBar from "./TopBar";

export default function Layout(props) {
  return (
    <div div className="vw-100 vh-100 d-flex flex-column bg-dark text-light">
      <TopBar />
      <div className="d-flex flex-row align-items-center h-100">
        <Side />
        <div className="w-100 d-flex justify-content-center">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
