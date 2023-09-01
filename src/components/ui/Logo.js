import React from "react";
import "./logo.scss";

export default function Logo() {
  return (
    <div className="logo-wrapper">
      <div className="threeSixty logo">
        <div className="d-flex neon-text">
          <div>
            <div>
              <div className="deg-45">
                <div className="rotate">0</div>
              </div>
            </div>
            <div className="mirrorX">
              <div className="deg-45">
                <div className="rotate">0</div>
              </div>
            </div>
          </div>
          <div className="mirrorY">
            <div className="mirrorX">
              <div className="deg-45">
                <div className="rotate">0</div>
              </div>
            </div>
            <div className="deg-45">
              <div className="rotate">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
