import React from "react";
import useTextRandomize from "../hooks/useTextRandomize";

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <span> {useTextRandomize(`Kostas Kaldis`)}</span>
      <h1>Welcome</h1>
      <h2>Kostas Kaldis Portfolio</h2>
    </div>
  );
};

export default Welcome;
