# Mini Hackathon Backend – Campus Connect

This repository contains the backend API for the Mini Hackathon project.  
It handles authentication, request creation, and request acceptance using Node.js, Express, and MongoDB.

## 🚀 Features
- User authentication (JWT-based)
- Create help requests
- View open requests
- Accept requests
- View accepted requests
- MongoDB database integration

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv

## 📁 Project Structure
## 🔗 API Endpoints

### Auth
- POST `/auth/register` – Register a new user
- POST `/auth/login` – Login and receive JWT

### Requests
- POST `/api/requests` – Create a help request
- GET `/api/requests` – View open requests
- PUT `/api/requests/:id/accept` – Accept a request
- GET `/api/requests/accepted` – View accepted requests
- ## ⚙️ Environment Setup

This project requires environment variables to run properly.

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
*``
