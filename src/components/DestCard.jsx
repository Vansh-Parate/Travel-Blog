import React from 'react'
import { Link } from 'react-router-dom'

const DestCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Card
      image="/images/m-1.jpeg"
      title="MANALI"
      />
      <Card
      image="/images/b-1.jpg"
      title="BALI"
      />
      <Card
      image="/images/p-1.jpg"
      title="PARIS"
      />
      <Card
      image="/images/i-1.jpg"
      title="ICELAND"
      />
      <Card 
      image="/images/z-1.jpg"
      title="ZURICH"
      />
      <Card
      image="/images/h-1.jpg"
      title="HAWAII"
      />
    </div>
  )
}

function Card({image,title}) {
  return(
    <div className="overflow-hidden shadow-lg border-gray-200 border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg">
        <div className='relative'>
            <Link to={`/blog/${title}`}>
            <img src={image} className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover cursor-pointer' alt={title}></img>
            </Link>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-3 sm:p-4'>
            <div className='text-center font-semibold text-sm sm:text-base'>
                {title}
            </div>
            </div>
        </div>
      </div>
  )
}

export default DestCard;
