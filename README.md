# Instagram Clone Backend

A backend application built with Node.js, Express.js, and MongoDB that provides APIs for user authentication and post management functionalities inspired by Instagram.

## Features

* User registration and login
* JWT-based authentication and authorization
* Create new posts
* Fetch all posts
* Fetch individual post details
* Like and unlike posts
* Follow and unfollow users
* Image upload integration using ImageKit
* MongoDB database integration with Mongoose

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* ImageKit

## Getting Started

### Installation

```bash
git clone <repository-url>
cd instagram-clone-backend
npm install
```

### Environment Variables

Create a `.env` file and add:

```env
MONGODB_URI=your_database_url
JWT_SECRET=your_secret_key
IMAGEKIT_PRIVATE_KEY=your_key
```

### Run the Application

```bash
npm start
```

## Learning Outcomes

Through this project, I gained practical experience with authentication, middleware, database schema design, file uploads, and backend API development using Node.js and Express.js.
