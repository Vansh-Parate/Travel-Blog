import React from 'react'
    
const MainCard = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
        <div className='mb-8 sm:mb-12'>
            <div className='rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden'>
                <div className='relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px]'>
                    <img 
                        src="/images/main.jpg" 
                        className='object-cover w-full h-full rounded-xl'
                        alt="Kashmir landscape"
                    />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 lg:p-8">
                       <div className='text-white'>
                          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Exploring Kashmir</h2>
                          <p className="mb-4 text-sm sm:text-base lg:text-lg">Discover the <b className='text-lg sm:text-xl lg:text-2xl'>Paradise on Earth </b></p>
                          <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg ring-offset-0 hover:bg-gray-100 transition-colors duration-300">Read More</button>
                       </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainCard
