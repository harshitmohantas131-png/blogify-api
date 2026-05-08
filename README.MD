# 🚀 Blogify API

A professional RESTful API for a blogging platform built with Node.js, Express.js, MongoDB, JWT authentication, Cloudinary integration, and Stripe payments.

---

## 📖 Description

Blogify API is a backend service for a blogging platform that supports:

- User authentication
- Blog post CRUD operations
- Protected routes with JWT
- File uploads using Cloudinary
- Stripe payment integration
- Order management
- MongoDB Atlas cloud database

---

# ✨ Features

- 🔐 JWT Authentication
- 🍪 HttpOnly Cookie-based Login
- 📝 Post CRUD Operations
- ☁️ Cloudinary Image Uploads
- 💳 Stripe Payment Integration
- 📦 Order Management
- 🛡️ Protected Routes & Authorization
- 📄 Pagination Support
- 🌐 MongoDB Atlas Integration

---

# 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT
- **File Uploads:** Cloudinary
- **Payments:** Stripe
- **Environment Management:** dotenv
- **Security:** bcryptjs, cookie-parser

---

# 📦 Prerequisites

Before running this project, ensure you have:

- Node.js installed
- MongoDB Atlas account
- Cloudinary account
- Stripe account
- Git installed

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/blogify-api.git
cd blogify-api
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create a `.env` file in the root directory.

---

# 🔑 Environment Variables

```env
# Server
PORT=3000

# MongoDB
MONGO_URI=your_mongodb_uri

# JWT
JWT_SECRET=your_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret
```

---

# 📡 API Endpoints

## 🔐 Authentication

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/v1/auth/register` | Register User | ❌ |
| POST | `/api/v1/auth/login` | Login User | ❌ |
| POST | `/api/v1/auth/logout` | Logout User | ✅ |
| POST | `/api/v1/auth/change-password` | Change Password | ✅ |

---

## 📝 Posts

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/api/v1/posts` | Get All Posts | ❌ |
| GET | `/api/v1/posts/:id` | Get Single Post | ❌ |
| POST | `/api/v1/posts` | Create Post | ✅ |
| PUT | `/api/v1/posts/:id` | Update Post | ✅ |
| DELETE | `/api/v1/posts/:id` | Delete Post | ✅ |

---

## ☁️ Uploads

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/v1/upload` | Upload Image | ✅ |

---

## 💳 Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/payments/create-payment-intent` | Create Payment |
| POST | `/api/v1/payments/confirm-payment` | Confirm Payment |

---

## 📦 Orders

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/v1/orders` | Create Order | ✅ |
| GET | `/api/v1/orders/my-orders` | Get User Orders | ✅ |
| GET | `/api/v1/orders/:id` | Get Order Details | ✅ |

---

# ▶️ Running the Project

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

---

# 📁 Project Structure

```bash
blogify-api/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# 🛡️ Security Features

- Password hashing with bcrypt
- JWT Authentication
- HttpOnly cookies
- Protected Routes
- Ownership Authorization
- Environment Variables Protection

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by Harshit Mohanta 🚀