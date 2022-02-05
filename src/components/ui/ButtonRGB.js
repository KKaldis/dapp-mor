export default function ButtonRGB(props) {
  return (
    <div
      message={props.message}
      messagehover={props.messagehover}
      className={`rgbButton shineButton rounded ${props.className} `}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </div>
  );
}
