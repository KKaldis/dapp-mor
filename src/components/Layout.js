import Side from "./Side";
import TopBar from "./TopBar";

export default function Layout(props) {
  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark text-light">
      <TopBar />
      <div
        className="d-flex flex-row align-items-center h-100"
        style={{ maxHeight: "inherit", boxSizing: "border-box" }}
      >
        <Side />
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
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
