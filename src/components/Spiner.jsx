import React, { useRef, useState } from 'react'
import SpinWheelGame from './SpinWheelGame'
import SpinnerFrame from './SpinnerFrame'

export default function Spiner() {
    const ref = useRef(null);
    const [availableSpins, setAvailableSpins] = useState(10);
    
    const handleSpinLuckWheel = () => {
        console.log("clicked ref = ", ref.current);
        if(availableSpins > 0) {
            setAvailableSpins(availableSpins-1);
        }
        
        ref.current.handleSpin();
    }

    const handleClick = () => {
        alert("You have no spins right now !")
    }
    return (



        <main className='py-56 bg-[url(../public/bgdesktop.png)] w-full bg-center bg-cover overflow-hidden'>
            <section className='w-12/12 h-full xl:w-10/12 mx-auto flex items-start justify-center relative'>
            <img src="/Flag.png" alt="" className='max-h-[400px] absolute lg:static top-0 -left-20 sm:-left-16 md:left-0 xl:max-h-[500px] object-contain'  />
            <SpinnerFrame
                spinnerRef={ref}    
            />
            <img src="/Flag.png" alt="" className='max-h-[400px] absolute lg:static top-0 -right-20 sm:-right-16 md:right-0 xl:max-h-[500px] object-contain' />
            </section>
            <div className='flex flex-col justify-center items-center relative z-[80]' >
                <button 
                    type='button' 
                    onClick={handleSpinLuckWheel} 
                    className={`md:w-3/12 w-1/3 tex\t-center md:p-2 p-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 cursor-pointer text-white md:text-lg z-20 ${availableSpins == 0 ? "bg-opacity-70 hover:from-cyan-400 hover:to-blue-400 cursor-not-allowed" : ""}`}
                    disabled={availableSpins == 0}
                >Spin Here</button>
                <h2 className='md:text-2xl text-blue-600 font-bold'>You have {availableSpins} spin(s) available</h2>
            </div>
        </main>
        // <div className='spiner-container flex flex-col items-center justify-center -mt-10 '>
        //     <div className='left-container md:w-10/12 flex items-center justify-center   border border-black '>
        //         {/* <div className="left md:w-3/12 w-3/12 md:mt-40 object-cover"><img src='/Flag.png' alt="" /></div> */}
        //         <div className="main-center md:w-5/12 w-7/12 relative">
        //             <div className='w-full h-full border'>

        //                 <SpinnerFrame 
        //                     spinnerRef={ref}
        //                 />

        //             </div>

        //         </div>
        //         {/* <div className="right md:w-3/12 w-3/12 md:mt-40"><img src='/Flag.png' alt="" /></div> */}
        //     </div>
            
        // </div>

    )
}


/*
<div className='relative border'>
                            //  Image 3 (Golden Frame)
                            <img className='relative z-20 w-full z-40' src="/03.png" alt="" />
                            <div className="absolute w-[80%] h-[80%] top-[14.5%] left-[5.0%] z-30">
                                <SpinWheelGame />
                            </div>
                            // Image 2 (Background)
                            <img src="/02.png" alt="" className='absolute z-20 w-[91%] h-[79%] top-[14.5%] left-[5.0%]' />
                            // Image 1 Center Image
                            <img src="/01.png" alt="" className="absolute  inset-0 m-auto flex items-center justify-center w-[28%] h-[30%] top-[2.6%] left-[0.5%] z-50" />
                        </div>

*/