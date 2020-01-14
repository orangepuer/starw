import React from "react";
import "./spinner.css";

const Spinner =() => {
  return (
    <div className="loading-spinner-double-ring">
      <div className="lds">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export  default Spinner;