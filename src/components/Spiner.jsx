import React, { useRef, useState } from 'react'
import SpinWheelGame from './SpinWheelGame'
import SpinnerFrame from './SpinnerFrame'

export default function Spiner() {
    const [availableSpins, setAvailableSpins] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const ref = useRef(null);

    const handleVerifyCoupon = () => {
        let allocatedSpins = 0;

        switch(coupon.trim().toLowerCase()) {
            case "code123":
                allocatedSpins = 3;
                break;
            case "code456":
                allocatedSpins = 6;
                break;
            case "code789":
                allocatedSpins = 9;
                break;
            default:
                alert("Invalid voucher code");
                return;
        }

        setAvailableSpins(allocatedSpins);
        setIsVerified(true);
    }
    const handleSpinLuckWheel = () => {
        if (availableSpins > 0) {
            setAvailableSpins((prevSpins) => prevSpins - 1);
            ref.current.handleSpin();
        } else {
            alert("You have no spins right now!");
        }
    }
    return (



        <main className='py-56 bg-[url(../public/bgmobile.png)] md:bg-[url(../public/bgdesktop.png)] w-full bg-center bg-cover overflow-hidden'>
            <section className='w-12/12 h-full xl:w-10/12 mx-auto flex items-start justify-center relative'>
                <img src="/Flag PSD.svg" alt="" className='max-h-[400px] absolute lg:static top-0 -left-20 sm:-left-16 md:left-0 xl:max-h-[500px] object-contain' />
                <SpinnerFrame
                    spinnerRef={ref}
                />
                <img src="/Flag PSD.svg" alt="" className='max-h-[400px] absolute lg:static top-0 -right-20 sm:-right-16 md:right-0 xl:max-h-[500px] object-contain' />
            </section>
            <div className='flex flex-col justify-center items-center relative z-[80]' >
                
            {
    isVerified ? (
        <div className="flex flex-col items-center md:space-y-4 space-y-2 w-full">
            <button
                type="button"
                onClick={handleSpinLuckWheel}
                className={`md:w-1/4 w-1/2 text-center md:p-3 p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 cursor-pointer text-white md:text-lg text-sm z-20 ${availableSpins === 0 ? "bg-opacity-70 hover:from-cyan-400 hover:to-blue-400 cursor-not-allowed" : ""}`}
                disabled={availableSpins === 0}
                
            >
                Spin Here
            </button>
            <h2 className="md:text-2xl text-lg text-blue-600 font-bold text-center">
                You have {availableSpins} spin(s) available
            </h2>
        </div>
    ) : (
        <div className="flex flex-col items-center md:space-y-4 space-y-2 w-full">
            <input
                type="text"
                value={coupon}
                placeholder="Add Coupon Code Here"
                onChange={(e) => setCoupon(e.target.value)}
                className="md:w-1/4 w-1/2 text-center md:p-3 p-2 rounded-lg"
            />
            <button
                onClick={handleVerifyCoupon}
                className="bg-blue-500 text-white rounded-lg p-2 md:p-3 hover:bg-blue-600 transition duration-300 md:w-1/4 w-1/2 text-center md:p-3 p-2 rounded-lg"
            >
                Verify
            </button>
        </div>
    )
}


                


            </div>
        </main>

    )
}

