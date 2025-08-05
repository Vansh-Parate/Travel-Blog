import React from 'react'
import mainImage from '../assets/main.jpg'
    
const MainCard = () => {
  return (
    <div className='container mx-auto px-2 py-1'>
        <div className='mb-12'>
            <div className='rounded-lg  bg-card text-card-foreground shadow-sm overflow-hidden px-5'>
                <div className='relative sm:h-[300px] md:h-[520px] px-4'>
                    <img src={mainImage} className='object-cover md:h-full w-full sm:h-full rounded-xl overflow-auto'></img>
                  <div className="absolute bottom-12 left-5 inset-0 flex items-end">
                       <div className='p-4 sm:p-6 text-blue-100'>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Exploring Kashmir</h2>
                          <p className="mb-4 text-sm sm:text-base">Discover the <b className='text-xl'>Paradise on Earth </b></p>
                          <button className="bg-black px-3.5 py-2 font-semibold rounded-lg ring-offset-0">Read More</button>
                       </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainCard
