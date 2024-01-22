import React from 'react'
import data from './data.js';

export const Testimony = () => {
  return (
    < div className=' overflow-scroll w-full'>
          <div className='flex  items-center justify-center gap-[60px]  h-[400px]  w-[250px] lg:w-full '>    
      {data.map((card) => (
        <div className='h-[100px]  w-full '>
        <div key={card.id} className='border rounded-md h-[60px] w-[150px] flex-nowrap flex flex-col items-center justify-center px-[24px] shadow-md'>
        <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
           
    </div>
    </div>
    ))}
    </div>
    </div>


  )
}
