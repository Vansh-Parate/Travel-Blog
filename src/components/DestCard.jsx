import React from 'react'
import { Link } from 'react-router-dom'
import m1Image from '../assets/m-1.jpeg'
import b1Image from '../assets/b-1.jpg'
import p1Image from '../assets/p-1.jpg'
import i1Image from '../assets/i-1.jpg'
import z1Image from '../assets/z-1.jpg'
import h1Image from '../assets/h-1.jpg'

const DestCard = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 px-[10rem] py-[4rem]">
      <Card
      image={m1Image}
      title="MANALI"
      />
      <Card
      image={b1Image}
      title="BALI"
      />
      <Card
      image={p1Image}
      title="PARIS"
      />
      <Card
      image={i1Image}
      title="ICELAND"
      />
      <Card 
      image={z1Image}
      title="ZURICH"
      />
      <Card
      image={h1Image}
      title="HAWAII"
      />
    </div>
  )
}

function Card({image,title}) {
  return(
    <div className="overflow-hidden shadow-lg border-gray-200 border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className='p-4 h-[22rem] pb-11 relative'>
            <Link to={`/blog/${title}`}>
            <img src={image} className='h-full cursor-pointer'></img>
            </Link>
            <div className='px-[4rem] w-[350px] absolute inset-0 top-[289px] right-5 left-3'>
            <div className='flex justify-center items-center bg-brown pt-2 pb-2'>
                {title}
            </div>
            </div>
        </div>
      </div>
  )
}

export default DestCard;
