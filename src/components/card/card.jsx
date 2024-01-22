import React from 'react'
import data from './data.js';

export const Card = () => {
  return (
    < div className=' overflow-scroll w-full'>
          <div className='flex  items-center justify-center gap-[60px]  h-[400px] w-[1900px] '>    
      {data.map((card) => (
        <div className='h-[350px] '>
        <div key={card.id} className='border rounded-md h-[320px] w-[370px] flex-nowrap flex flex-col items-center justify-center px-[24px] shadow-md'>
        <h2 className=" text-[18px] lg:text-xl font-semibold mb-2">{card.title}</h2>
            <p>{card.content}</p>
    </div>
    </div>
    ))}
    </div>
    </div>


  )
}
