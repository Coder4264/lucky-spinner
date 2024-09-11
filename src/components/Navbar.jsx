import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
        id: 1,
        title: "Home",
        img: "https://cdn-icons-png.flaticon.com/128/11553/11553645.png"
    },
    {
        id: 2,
        title: "Mobile",
        img: "https://cdn-icons-png.flaticon.com/128/11391/11391386.png"
    },
    {
        id: 3,
        title: "Sports",
        img: "https://cdn-icons-png.flaticon.com/128/13334/13334757.png"
    },
    {
        id: 4,
        title: "E-Sports",
        img: "https://cdn-icons-png.flaticon.com/128/11554/11554026.png"
    },
    {
        id: 5,
        title: "Casino",
        img: "https://cdn-icons-png.flaticon.com/128/10566/10566182.png"
    },
    {
        id: 6,
        title: "Slots",
        img: "https://cdn-icons-png.flaticon.com/128/10511/10511177.png"
    },
    {
        id: 7,
        title: "Fishing",
        img: "https://cdn-icons-png.flaticon.com/128/13722/13722072.png"
    },
    {
        id: 8,
        title: "4D",
        img: "https://cdn-icons-png.flaticon.com/128/11680/11680070.png"
    },
    {
        id: 9,
        title: "Lottery",
        img: "https://cdn-icons-png.flaticon.com/128/12203/12203533.png"
    },
    {
        id: 10,
        title: "Fast Games",
        img: "https://cdn-icons-png.flaticon.com/128/16152/16152349.png"
    },
    {
        id: 11,
        title: "Promos",
        img: "https://cdn-icons-png.flaticon.com/128/16088/16088323.png"
    },
    {
        id: 12,
        title: "Lucky Wheel",
        img: "https://cdn-icons-png.flaticon.com/128/12203/12203548.png"
    }

  ]
  return (
    <nav className="bg-blue-600 p-3 flex justify-between items-center gap-10 relative navbar shadow-xl">
      <div className="flex items-center gap-3 md:gap-50 ">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* <img src="/movie-logo-2.png" alt="logo"  className='w-44'/> */}
      </div>

      <div className={`absolute nav-cont inset-y-0 flex flex-col h-screen rounded-tr-lg shadow-lg  md:flex-row md:top-16 top-12 left-0 h- lg:w-5/12 w-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 ease-in-out z-20`}>
        <div className="lg:w-1/2 w-full h-full px-7 flex flex-col gap-10 mt-5">
          <ul className="">
            <li className="py-3">
              <a href="#" className="flex items-center hover:text-blue-500">
                <img src="https://cdn-icons-png.flaticon.com/128/10833/10833485.png" alt="Download" className="w-6 h-6" />
                <span className="ml-3 text-xl">Download</span>
              </a>
            </li>
            <li className="py-5">
              <a href="#" className="flex items-center hover:text-blue-500">
                <img src="https://cdn-icons-png.flaticon.com/128/6701/6701715.png" alt="VIP" className="w-6 h-6" />
                <span className="ml-3 text-xl">VIP</span>
              </a>
            </li>
            <li className="py-5">
              <a href="#" className="flex items-center hover:text-blue-500">
                <img src="https://cdn-icons-png.flaticon.com/128/889/889537.png" alt="VIP" className="w-6 h-6" />
                <span className="ml-3 text-xl">Leaderboard</span>
              </a>
            </li>
            <li className="py-5">
              <a href="#" className="flex items-center hover:text-blue-500">
                <img src="https://cdn-icons-png.flaticon.com/128/2601/2601507.png" alt="VIP" className="w-6 h-6" />
                <span className="ml-3 text-xl">Sponsors</span>
              </a>
            </li>
            
          </ul>

          <div>
            <ul className='hidden lg:flex flex-col gap-1 p-2 md:ml-3'>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">About Us</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Live Chat</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Info Centre</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Contact Us</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Responsible Gaming</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Terms & Conditions</a></li>
                <li className='text-slate-400 text-sm list-disc hover:text-blue-500'><a href="#">Affiliate</a></li>
            </ul>
            <div className='hidden mt-10 md:flex items-center justify-center'>
            <button className='bg-yellow-400 px-16 py-2 rounded-xl'>Log in</button>
            </div>
            
          </div>
        </div>
        <div className='w-full h-1 md:w-px md:h-[90%] bg-slate-100 mx-5 md:my-5'></div>
        <div className="lg:w-1/2 w-full h-screen md:flex flex-col grid grid-cols-3 md:gap-6 gap-3 mx-auto px-5 py-3 md:mt-5 -mt-3">
            {menu.map(({id, title, img}) => (
                <div className='flex items-center md:flex-row flex-col gap-3' key={id}>
                <img src={img} className='w-7 h-7' alt="" />
                <a href="#" className=" hover:text-blue-500 text-md">{title}</a>
            </div>
            ))}
            
        </div>
        <div className='md:hidden md:py-0 mb-5 flex items-center justify-center'>
            <button className='bg-yellow-400 px-20 py-2 rounded-xl'>Log in</button>
        </div>
      </div>
{/* 
      <div className="hidden lg:flex gap-3 space-x-4 mr-auto">
        <a href="#" className="text-white hover:text-blue-500">Sports</a>
        <a href="#" className="text-white hover:text-blue-500">E-Sports</a>
        <a href="#" className="text-white hover:text-blue-500">Casino</a>
        <a href="#" className="text-white hover:text-blue-500">Slots</a>
        <a href="#" className="text-white hover:text-blue-500">Fishing</a>
        <a href="#" className="text-white hover:text-blue-500">4D</a>
        <a href="#" className="text-white hover:text-blue-500">Lottery</a>
        <a href="#" className="text-white hover:text-blue-500">Fast Games</a>
        <a href="#" className="text-white hover:text-blue-500">Promos</a>
        <a href="#" className="text-white hover:text-blue-500">VIP</a>
              </div> */}

      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md">Join now</button>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
