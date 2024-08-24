import SpinAndWin from "react-spin-game";
import "react-spin-game/dist/index.css";
import { useEffect, useRef } from "react";

export default function SpinWheelGame({ spinnerRef, spinItems }) {
  
  

  return (
    <div className="overflow-hidden main_spin_wheel [&>div>div>div]:bg-transparent [&>div>div>div]:shadow-none border-none [&>div>div>div>canvas]:border-none">
      
      {
        spinItems && 
        <SpinAndWin
            ref={spinnerRef}
            data={spinItems}
            result={"test3"}
            hideButton={true}
            horizantalText={true}    
               
        />
      }
    </div>
  );
}
