#  Instagram Clone Backend

A production-ready REST API built with Node.js, Express.js, and MongoDB, replicating core Instagram features including authentication, post management, social interactions, and cloud image uploads.

---

##  Features

-  JWT-based user registration, login & protected routes
-  Cloud image uploads via ImageKit 
-  Create, fetch, and manage posts
-  Like / Unlike posts
-  Follow / Unfollow users
-  MongoDB with Mongoose ODM (MVC architecture)

---

##  Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Token) |
| File Storage | ImageKit |
| Architecture | MVC |

---

## 📁 Project Structure

instagram-clone-backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
└── server.js

---

##  Getting Started

### Prerequisites
- Node.js v18+
- MongoDB URI (Atlas or local)
- ImageKit account credentials

### Installation

```bash
git clone https://github.com/ErAnushkaMathur/instagram-clone-backend
cd instagram-clone-backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_key
```

### Run

```bash
npm start
```

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| POST | `/api/posts` | Create new post (auth required) |
| PUT | `/api/posts/:id/like` | Like or unlike a post |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | `/api/users/:id/follow` | Follow a user |
| PUT | `/api/users/:id/unfollow` | Unfollow a user |

---

## 👩‍💻 Author

**Anushka Mathur**
[LinkedIn](https://linkedin.com/in/your-link) • [GitHub](https://github.com/ErAnushkaMathur)
