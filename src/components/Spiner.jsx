import React, { useEffect, useRef, useState } from 'react'
import SpinWheelGame from './SpinWheelGame'
import SpinnerFrame from './SpinnerFrame'

export default function Spiner() {
    const ref = useRef(null);
    const [availableSpins, setAvailableSpins] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [phone, setPhone] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const [spinItems, setSpinItems] = useState([
        ["PKR 100", "#ffffff00"],
        ["PKR 150", "#ffffff00"],
        ["PKR 200", "#ffffff00"],
        ["PKR 250", "#ffffff00"],
        ["PKR 300", "#ffffff00"],
        ["PKR 350", "#ffffff00"],
        ["PKR 400", "#ffffff00"],
        ["PKR 450", "#ffffff00"],
        ["PKR 500", "#ffffff00"],
        ["PKR 550", "#ffffff00"],
        ["PKR 600", "#ffffff00"],
        ["PKR 650", "#ffffff00"],
    ]);
    const [prize, setPrize] = useState(null);
    const spinSound = new Audio('../public/spinner-sound.mp3');

    const generatePrize = () => {
    let num =   Math.floor(Math.random() * spinItems.length);
    setPrize(spinItems[num][0]);
    }


    const handleVerifyCoupon = () => {
        let allocatedSpins = 0;

        if (coupon.trim().toLowerCase() === "code123" && phone === "1234") {
            allocatedSpins = 3;
        } else if (coupon.trim().toLowerCase() === "code456" && phone === "5678") {
            allocatedSpins = 6;
        } else if (coupon.trim().toLowerCase() === "code789" && phone === "1122") {
            allocatedSpins = 9;
        } else {
            alert("Invalid voucher code or phone number");
            return;
        }
        

        setAvailableSpins(allocatedSpins);
        setIsVerified(true);
    }
    const handleSpinLuckWheel = () => {
        if (availableSpins > 0) {
            spinSound.play();
            setAvailableSpins((prevSpins) => prevSpins - 1);
            ref.current.handleSpin();
        } else {
            alert("You have no spins right now!");
        }
    }

    useEffect(() => {
        generatePrize();
    }, [availableSpins]);

    return (



        <main className='py-56 bg-[url(../public/mobile-final.svg)] md:bg-[url(../public/desktop-final.svg)] w-full bg-center bg-cover overflow-hidden'>
            <section className='w-12/12 h-full xl:w-10/12 mx-auto flex items-start justify-center relative'>
                <img src="/Flag PSD.svg" alt="" className='max-h-[400px] absolute lg:static top-0 -left-20 sm:-left-16 md:left-0 xl:max-h-[500px] object-contain' />
                <SpinnerFrame
                    spinnerRef={ref}
                    spinItems={spinItems}
                    prize={prize}
                />
                <img src="/Flag PSD.svg" alt="" className='max-h-[400px] absolute lg:static top-0 -right-20 sm:-right-16 md:right-0 xl:max-h-[500px] object-contain' />
            </section>
            <div className='flex flex-col justify-center items-center relative z-[80] mt-7' >
                
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
                type="number"
                value={phone}
                placeholder="Phone e.g 923XXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
                className="md:w-1/4 w-1/2 text-center p-3 rounded-lg text-xs md:text-sm outline-none"
            />
            <input
                type="text"
                value={coupon}
                placeholder="Add Voucher Code"
                onChange={(e) => setCoupon(e.target.value)}
                className="md:w-1/4 w-1/2 text-center p-3 rounded-lg text-xs md:text-sm outline-none"
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

