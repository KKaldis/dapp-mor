import Side from "./Side";
import TopBar from "./TopBar";
import { useMoralis } from "react-moralis";
import Dashboard from "./Dashboard";

export default function Layout(props) {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark text-light">
      <TopBar />
      <div
        className="d-flex flex-row align-items-center h-100"
        style={{ maxHeight: "inherit", boxSizing: "border-box" }}
      >
        {isAuthenticated && <Side />}
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          className="cube"
          style={{
            maxHeight: "inherit",
            maxWidth: "inherit",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
          {props.children}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
