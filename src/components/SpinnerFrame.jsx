import React, { useState } from "react";
import SpinWheelGame from "./SpinWheelGame";

export default function SpinnerFrame({ spinnerRef, spinItems, prize }) {
  
  return (
    <section className="">
      <div className="spin-container">
        <img src={"/frame-final.svg"} className="spinner-outer-img" />
        <img src={"/01.png"} className="spin-ticker" />
        <img src={"/wheel-final.svg"} className="spin-spinner-bg" />
        <div>
          <SpinWheelGame 
            spinnerRef={spinnerRef}
            spinItems={spinItems}
            prize={prize}
          />
        </div>
      </div>      
    </section>
  );
}
