import React from 'react'

export default function PreFooter() {
  return (
    <>
    <div className='px-10 mt-10 text-white flex md:flex-row flex-col gap-5'>
        <div className="about md:w-3/12 w-full">
            <h3 className='mb-5 text-blue-300 text-lg font-semibold'>About Spin Wheel Game</h3>
            <p>BK8 Sports (Any Company name) is licensed and regulated by the Government of Neverland.</p>
        </div>
        <div className="games flex flex-col gap-2 md:w-3/12 w-full">
            <h3 className='mb-5 text-blue-300 text-lg font-semibold'>Games</h3>
            <div className='hideen-section flex flex-col'>
                <span><a href="">Sports</a></span>
                <span><a href="">E-Sports</a></span>
                <span><a href="">Casino</a></span>
                <span><a href="">Slots</a></span>
                <span><a href="">Fishing</a></span>
                <span><a href="">4D</a></span>
                <span><a href="">Lottery</a></span>
                <span><a href="">Fast Games</a></span>
            </div>
        </div>

        <div className="info flex flex-col gap-2 md:w-3/12 w-full">
            <h3 className='mb-5 text-blue-300 text-lg font-semibold'>Info</h3>
            <span><a href="">About Us</a></span>
            <span><a href="">VIP</a></span>
            <span><a href="">Leaderboard</a></span>
            <span><a href="">Appilate Program</a></span>
            <span><a href="">Contact Us</a></span>
            <span><a href="">Responsiblr Gaming</a></span>
            <span><a href="">Info Centre</a></span>
            <span><a href="">Terms & Conditions</a></span>
            <span><a href="">Privacy Policy</a></span>
        </div>

        <div className="misc flex flex-col gap-2 md:w-3/12 w-full">
        <h3 className='mb-5 text-blue-300 text-lg font-semibold'>Info</h3>
        <span>This Field is Reserved for Misc Items</span>
        </div>
        
    </div>
    <div className='h-px w-11/12 mx-auto bg-white my-10'></div>
    </>
  )
}
