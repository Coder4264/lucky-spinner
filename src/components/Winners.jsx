import React from 'react'
import dayjs from 'dayjs'

export default function Winners() {
  const TodayDate = dayjs()
  const handleClick = () => {
    alert("No Data to Show Yet!")
  }
  const UserData = [
    {
      id: 1,
      name: "Person1",
      points: "250 points"
    },
    {
      id: 2,
      name: "Person2",
      points: "250 points"
    },
    {
      id: 3,
      name: "Person3",
      points: "250 points"
    },
    {
      id: 4,
      name: "Person4",
      points: "250 points"
    },
    {
      id: 5,
      name: "Person5",
      points: "250 points"
    },
    {
      id: 6,
      name: "Person6",
      points: "250 points"
    },
    {
      id: 7,
      name: "Person7",
      points: "250 points"
    },
    {
      id: 8,
      name: "Person8",
      points: "250 points"
    },
    {
      id: 9,
      name: "Person9",
      points: "250 points"
    },
    {
      id: 10,
      name: "Person10",
      points: "250 points"
    }
  ]
  return (

    <section className="w-full h-full sm:w-[500px] h-[500px] sm:h-[800px] relative mx-auto text-white">
  <img src="/winner-frame.svg" alt="Winner Container" className="w-full sm:h-[800px] object-cover relative z-20" />
  <article className="frame-header w-full h-full absolute top-0 left-0 py-4 sm:py-8 px-2 sm:px-16 overflow-hidden z-20 mt-5 mx-auto">
    <h3 className='text-center text-2xl text-white font-semibold'>Winner</h3>
    <div className='flex justify-between items-center gap-2 px-6 my-2'>
      <button onClick={handleClick} className='bg-orange-600 py-1 px-2 sm:px-3 rounded-lg cursor-pointer hover:bg-white'>Winner's List</button>
      <button onClick={handleClick} className='bg-white text-black py-1 px-2 sm:px-3 rounded-lg cursor-pointer'>Winning Record</button>
    </div>
    <ul className="w-full h-[calc(100%-120px)] overflow-hidden sm:h-[75%] -mt-1 sm:mt-8 z-1 px-6 z-10">
      {UserData.map(({id, name, points}) => (
        <section className="animation-section flex items-center justify-between px-2 py-2 sticky top-0" key={id}>
          <div className="date">{TodayDate.format('DD/MM/YYYY')}</div>
          <div className="user-data flex flex-col items-center">
            <div>{name}</div>
            <div className="user-points text-orange-500">{points}</div>
          </div>
        </section>
      ))}
    </ul>
  </article>
</section>






    // <div className='w-full lg:w-6/12 p-5 text-white flex justify-center overflow-y-hidden'>
    //   <div className='winner-container flex justify-center w-full md:w-8/12 h-full md:h-[70%] overflow-y-hidden'>
    //     <img src="/winnerframe-bg.svg" alt="Winner Container " className=' z-10 -py-12' />
    //     <div className='winner-items overflow-y-hidden absolute mt-5 md:mt-10 flex flex-col items-center h-overflow-y-hidden w-[100%] h-[90%]'>
    //       <h3 className='text-2xl md:text-5xl '>Winners</h3>
          
    //       <div className='winner-main-container w-full md:w-[90%] h-[100%]ml-auto px-10 mt-24'> 
          // {UserData.map(({id, name, points}) =>(
          //     <section className="flex items-center justify-between px-2 py-2 sticky top-0 overflow-y-hidden" key={id}>
          //     <div className="date">{TodayDate.format('DD/MM/YYYY')}</div>
          //     <div className="user-data flex flex-col items-center">
          //       <div>{name}</div>
          //       <div className="user-points text-orange-500">{points}</div>
          //     </div>
          // </section>
          // ))}
    //     </div>

    //     </div>
    //   </div>
    // </div>
  )
}
