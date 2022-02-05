export default function ButtonRGB(props) {
  return (
    <div
      message={props.message}
      messageHover={props.messageHover}
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
