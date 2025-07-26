const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Travel Blog API is running!' });
});

// Import routes
const authRoutes = require('./routes/auth');
// const postRoutes = require('./routes/posts');
// const storyRoutes = require('./routes/stories');

// Use routes
app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/stories', storyRoutes);

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/travel-blog');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer(); 