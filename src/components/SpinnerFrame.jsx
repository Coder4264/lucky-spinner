import React, { useState } from "react";
import SpinWheelGame from "./SpinWheelGame";

export default function SpinnerFrame({ spinnerRef, spinItems, prize }) {
  
  return (
    <section className="">
      <div className="spin-container">
        <img src={"/Frame-GIF.gif"} className="spinner-outer-img" />
        <img src={"/needle.svg"} className="spin-ticker ml-px -mt-0.5" />
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
