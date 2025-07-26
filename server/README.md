# Travel Blog Backend API

A Node.js/Express backend for the Travel Blog application with user authentication, content management, and interactive features.

## 🚀 Features

- **User Authentication**: JWT-based authentication with registration and login
- **Content Management**: Blog posts and travel stories with CRUD operations
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Input validation using Joi
- **Security**: Password hashing with bcrypt
- **File Upload**: Support for image uploads (Cloudinary integration ready)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠 Installation

1. **Clone the repository and navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the server directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/travel-blog
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Start MongoDB** (if using local MongoDB)
   ```bash
   # On Windows
   mongod
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Blog Posts (Coming Soon)
- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get single blog post
- `POST /api/posts` - Create new blog post (protected)
- `PUT /api/posts/:id` - Update blog post (protected)
- `DELETE /api/posts/:id` - Delete blog post (protected)

### Travel Stories (Coming Soon)
- `GET /api/stories` - Get all travel stories
- `GET /api/stories/:id` - Get single travel story
- `POST /api/stories` - Create new travel story (protected)
- `PUT /api/stories/:id` - Update travel story (protected)
- `DELETE /api/stories/:id` - Delete travel story (protected)

## 🔧 Development

### Project Structure
```
server/
├── models/          # Database models
│   ├── User.js
│   ├── BlogPost.js
│   └── TravelStory.js
├── routes/          # API routes
│   └── auth.js
├── middleware/      # Custom middleware
│   └── auth.js
├── server.js        # Main server file
├── seed.js          # Database seeding script
└── package.json
```

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Sample Registration Request
```json
POST /api/auth/register
{
  "username": "traveler",
  "email": "traveler@example.com",
  "password": "password123",
  "profile": {
    "firstName": "John",
    "lastName": "Traveler",
    "bio": "Passionate traveler"
  }
}
```

### Sample Login Request
```json
POST /api/auth/login
{
  "email": "traveler@example.com",
  "password": "password123"
}
```

## 🗄 Database Models

### User
- username, email, password
- profile (firstName, lastName, bio, location, website)
- role (user/admin)
- isVerified, lastLogin
- timestamps

### BlogPost
- title, content, excerpt
- images array
- author (ref to User)
- tags, category, status
- featured, views, likes
- slug (auto-generated)
- timestamps

### TravelStory
- title, content
- images array
- experience, anecdotes, avoid
- author (ref to User)
- destination (name, country, coordinates)
- tripDetails (dates, budget, travelStyle)
- tags, status, featured
- views, likes, rating
- slug (auto-generated)
- timestamps

## 🚀 Deployment

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use a strong `JWT_SECRET`
- Configure MongoDB Atlas connection string
- Set up Cloudinary credentials for image uploads

### Recommended Hosting
- **Backend**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary

## 📝 TODO

- [ ] Implement blog post routes
- [ ] Implement travel story routes
- [ ] Add image upload functionality
- [ ] Add search and filtering
- [ ] Implement comments system
- [ ] Add user ratings and reviews
- [ ] Set up email notifications
- [ ] Add admin dashboard
- [ ] Implement caching
- [ ] Add comprehensive testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 