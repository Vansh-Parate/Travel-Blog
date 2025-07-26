const mongoose = require('mongoose');
const User = require('./models/User');
const BlogPost = require('./models/BlogPost');
const TravelStory = require('./models/TravelStory');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/travel-blog');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await BlogPost.deleteMany({});
    await TravelStory.deleteMany({});

    console.log('Cleared existing data');

    // Create admin user
    const adminUser = new User({
      username: 'admin',
      email: 'admin@travelblog.com',
      password: 'admin123',
      profile: {
        firstName: 'Admin',
        lastName: 'User',
        bio: 'Travel blog administrator',
        location: 'Worldwide'
      },
      role: 'admin',
      isVerified: true
    });

    await adminUser.save();
    console.log('Created admin user');

    // Create sample user
    const sampleUser = new User({
      username: 'traveler',
      email: 'traveler@example.com',
      password: 'password123',
      profile: {
        firstName: 'John',
        lastName: 'Traveler',
        bio: 'Passionate traveler exploring the world',
        location: 'New York, USA'
      },
      isVerified: true
    });

    await sampleUser.save();
    console.log('Created sample user');

    // Create sample blog post
    const samplePost = new BlogPost({
      title: 'Affordable places in Europe',
      content: 'Explore Europe\'s hidden gems without breaking the bank! From charming cities to breathtaking landscapes, here\'s your guide to affordable yet unforgettable experiences in Europe.',
      excerpt: 'Europe\'s hidden gems: Big experiences, small prices.',
      images: [
        {
          url: 'https://img.freepik.com/free-photo/magnificent-old-castle-captured-by-bridge-beautiful-river-cloudy-day_181624-29120.jpg',
          alt: 'European castle',
          caption: 'Beautiful European castle'
        }
      ],
      author: sampleUser._id,
      tags: ['europe', 'budget', 'travel'],
      category: 'travel',
      status: 'published',
      featured: true
    });

    await samplePost.save();
    console.log('Created sample blog post');

    // Create sample travel story
    const sampleStory = new TravelStory({
      title: 'Exploring street food of India',
      content: 'Embark on a culinary journey through India\'s vibrant street markets. Taste the rich flavors and unique spices that define the country\'s diverse food scene.',
      images: [
        {
          url: 'https://img.freepik.com/free-photo/close-up-ancient-greece-ingredients_23-2151026690.jpg',
          alt: 'Indian street food',
          caption: 'Delicious Indian street food'
        }
      ],
      experience: 'Eating street food in India was an adventure like no other. The burst of flavors, from spicy chaat to sweet jalebis, was simply unforgettable.',
      anecdotes: 'Once, I ventured into the busy lanes of Kolkata to try their famous kathi rolls. As I was waiting, the vendor playfully warned me about the spice level, and I thought I could handle it. Big mistake!',
      avoid: 'While street food is a must, make sure to stick to vendors with clean setups to avoid any stomach issues.',
      author: sampleUser._id,
      destination: {
        name: 'Mumbai',
        country: 'India'
      },
      tripDetails: {
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-06-15'),
        budget: {
          amount: 1500,
          currency: 'USD'
        },
        travelStyle: 'budget'
      },
      tags: ['india', 'food', 'street-food'],
      status: 'published',
      featured: true
    });

    await sampleStory.save();
    console.log('Created sample travel story');

    console.log('Database seeded successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Run the seeding
connectDB().then(() => {
  seedData();
}); 