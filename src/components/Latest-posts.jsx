import React from 'react';
import { Link } from 'react-router-dom';

// This would typically come from your CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Affordable places in Europe",
    description: "Discover Europe's hidden gems: Big experiences, small prices.",
    date: "2024-04-12",
    header: "Affordable places in Europe"
  },
  {
    id: 2,
    title: "Exploring street food of India",
    description: "Embark on a culinary journey through the vibrant street markets of Southeast Asia..",
    date: "2024-06-28",
    header: "Exploring street food of India"
  },
  {
    id: 3,
    title: "Craft Your Perfect Journey",
    description: "Learn how to make a travel plan.",
    date: "2023-09-15",
    header: "Craft Your Perfect Journey"
  }
]

export default function LatestPosts() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Latest Blog Posts</h2>
      <div className="space-y-4 sm:space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border-b pb-4 sm:pb-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              <Link to={`/travel/${post.header}`} className="hover:underline text-orange-500 transition-colors duration-200">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">{post.description}</p>
            <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}