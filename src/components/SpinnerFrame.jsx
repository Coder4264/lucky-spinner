import React, { useState } from "react";
import SpinWheelGame from "./SpinWheelGame";

export default function SpinnerFrame({ spinnerRef }) {
  
    const [spinItems, setSpinItems] = useState([
        ["test1", "#ffffff00",],
        ["test2", "#ffffff00"],
        ["test3", "#ffffff00"],
        ["test4", "#ffffff00"],
        ["test5", "#ffffff00"],
        ["test6", "#ffffff00"],
      ]);

  return (
    <section className="">
      <div className="spin-container">
        <img src={"/03.png"} className="spinner-outer-img" />
        <img src={"/01.png"} className="spin-ticker" />
        <img src={"/02.png"} className="spin-spinner-bg" />
        <div>
          <SpinWheelGame 
            spinnerRef={spinnerRef}
            spinItems={spinItems}
          />
        </div>
      </div>

    </section>
  );
}
