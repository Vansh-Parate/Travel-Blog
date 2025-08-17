import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after the component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay to trigger animation
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Title with fade-in animation */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6 sm:mb-10 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Us
        </h1>

        {/* Introduction Section */}
        <div
          className={`bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 transition-transform duration-1000 ease-out ${
            isVisible ? 'transform-none' : 'transform translate-y-10'
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-gray-800">Welcome to TravelBlog</h2>
          <p className="text-gray-700 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
            At TravelBlog, we are passionate about exploring the world and sharing our experiences with you.
            Whether it's a weekend getaway to a hidden gem or an adventure to a far-off destination, we strive
            to bring you the best tips, guides, and inspiration for your next trip.
          </p>
          <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
            Join us on this journey as we explore the beauty of different cultures, landscapes, and experiences,
            and help you plan your own dream vacations!
          </p>
        </div>

        {/* Mission and Vision with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div
            className={`bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 transition-transform duration-700 ease-out transform hover:scale-105 ${
              isVisible ? 'transform-none' : 'transform translate-y-10'
            }`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
              Our mission is to provide valuable travel insights, highlight must-see destinations, and create
              a community of travelers who share their own experiences and tips to help each other.
            </p>
          </div>

          <div
            className={`bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 transition-transform duration-700 ease-out transform hover:scale-105 ${
              isVisible ? 'transform-none' : 'transform translate-y-10'
            }`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
              We envision a world where everyone can experience the joy of travel. Our goal is to make travel more
              accessible, enjoyable, and enriching by sharing insights that make it easier for people to explore
              the world.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-gray-500 text-sm sm:text-base">© 2024 TravelBlog. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
