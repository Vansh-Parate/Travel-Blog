const mongoose = require('mongoose');

const travelStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    minlength: [10, 'Content must be at least 10 characters long']
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      maxlength: [200, 'Caption cannot exceed 200 characters']
    }
  }],
  experience: {
    type: String,
    required: [true, 'Experience description is required'],
    minlength: [20, 'Experience must be at least 20 characters long']
  },
  anecdotes: {
    type: String,
    required: [true, 'Anecdotes are required'],
    minlength: [20, 'Anecdotes must be at least 20 characters long']
  },
  avoid: {
    type: String,
    required: [true, 'Things to avoid are required'],
    minlength: [20, 'Things to avoid must be at least 20 characters long']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    name: {
      type: String,
      required: [true, 'Destination name is required'],
      trim: true
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  tripDetails: {
    startDate: {
      type: Date,
      required: [true, 'Trip start date is required']
    },
    endDate: {
      type: Date,
      required: [true, 'Trip end date is required']
    },
    budget: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    travelStyle: {
      type: String,
      enum: ['budget', 'mid-range', 'luxury', 'backpacking', 'family', 'solo', 'group'],
      default: 'mid-range'
    }
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Tag cannot exceed 30 characters']
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true
});

// Generate slug from title before saving
travelStorySchema.pre('save', function(next) {
  if (!this.isModified('title')) return next();
  
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
  
  next();
});

// Virtual for like count
travelStorySchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Virtual for trip duration
travelStorySchema.virtual('tripDuration').get(function() {
  if (!this.tripDetails.startDate || !this.tripDetails.endDate) return null;
  const diffTime = Math.abs(this.tripDetails.endDate - this.tripDetails.startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

// Ensure virtual fields are serialized
travelStorySchema.set('toJSON', { virtuals: true });
travelStorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('TravelStory', travelStorySchema); 