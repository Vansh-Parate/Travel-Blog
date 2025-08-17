import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Featured() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-6 sm:mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FeaturedCard
            image="/images/z-1.jpg"
            title="Zurich, Switzerland"
            description="Lakeside charm, Alpine views in Swiss paradise."
          />
          <FeaturedCard
            image="/images/h-1.jpg"
            title="Hawaii, USA"
            description="Relax on pristine beaches and explore lush landscapes."
          />
          <FeaturedCard
            image="/images/p-1.jpg"
            title="Paris, France"
            description="Experience the city of love and its iconic landmarks."
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ image, title, description }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-white">
      <img src={image} alt={title} className="w-full h-40 sm:h-48 md:h-52 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-xs sm:text-sm">Popular destination</span>
          </div>
          <Link to={`/blog/${title}`} className="text-blue-500 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
