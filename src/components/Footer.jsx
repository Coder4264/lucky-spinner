import React from 'react'

export default function Footer() {
  return (
    <div>
    <div className='px-10 mt-10 text-white flex md:flex-row flex-col gap-5'>
    <div className="about md:w-3/12 w-full">
        <h3 className='mb-5 text-blue-300 text-lg font-semibold'>Payment Methods</h3>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
        <p>Payment Method #1</p>
    </div>
    <div className="games flex flex-col gap-2 md:w-3/12 w-full">
        <h3 className='mb-5 text-blue-300 text-lg font-semibold'>Games</h3>
        <span><a href="">Sports</a></span>
        <span><a href="">E-Sports</a></span>
        <span><a href="">Casino</a></span>
        <span><a href="">Slots</a></span>
        <span><a href="">Fishing</a></span>
        <span><a href="">4D</a></span>
        <span><a href="">Lottery</a></span>
        <span><a href="">Fast Games</a></span>
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
    <h6 className='text-white bg-blue-600 p-2 text-center mt-10 w-full text-lg'>All Rights &copy; Resereved by Rehan Tufail </h6>
</div>
  )
}
