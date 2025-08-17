import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard() {
  return (
    <div>
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-6 sm:mb-8">Travel Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card
              image="/images/e-1.jpg"
              title="Affordable places in Europe"
              desc="Europe's hidden gems: Big experiences, small prices."
              date="April 12, 2024"
            />
            <Card
              image="/images/s-1.jpg"
              title="Exploring street food of India"
              desc="Embark on a culinary journey through the vibrant street markets of Southeast Asia."
              date="June 28, 2024"
            />
            <Card
              image="/images/t-1.avif"
              title="Craft Your Perfect Journey"
              desc="Learn how to make a travel plan."
              date="September 15, 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ image, title, desc, date }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-white">
      <img src={image} alt={title} className="w-full h-40 sm:h-48 md:h-52 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{desc}</p>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center">
            <span className="text-xs sm:text-sm">{date}</span>
          </div>
          <Link to={`/travel/${title}`} className="text-blue-500 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
