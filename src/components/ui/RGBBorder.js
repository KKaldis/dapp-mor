import React from "react";

export default function RGBBorder(props) {
  return (
    <div className={props.className + " rgbBorder"} id={props.id} onClick={props.onClick}>
      <borderspan></borderspan>
      <borderspan></borderspan> 
      <borderspan></borderspan>
      <borderspan></borderspan>
      {props.children}
    </div>
  );
}
