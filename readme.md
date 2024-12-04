
# Role-Based Access Control (RBAC) with Node.js

This project is a demonstration of a secure Role-Based Access Control (RBAC) system using Node.js. It features authentication, authorization, and role-based access to specific resources.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage Example](#usage-example)
- [Project Structure](#project-structure)

---

## Project Overview

This project implements:
- **Authentication**: Users can register, log in, and receive a JWT token for secure session management.
- **Authorization**: Specific routes are restricted based on user roles.
- **Role-Based Access Control (RBAC)**: Users with roles such as `Admin`, `User`, and `Moderator` have different access levels.

---

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) (JWT) for session management
- [bcrypt.js](https://github.com/kelektiv/node.bcrypt.js) for password hashing

---

## Setup Instructions

### Clone the repository
```bash
git clone <repository-url>
cd <project-folder>
```

### Install dependencies
```bash
npm install
```

### Configure environment variables
1. Create a `.env` file in the root directory.
2. Add the following variables:
    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret_key
    ```
   Replace `your_jwt_secret_key` with a secure key of your choice.

### Start the server
```bash
npm start
```

---

## Environment Variables

The following environment variables are required:
- `PORT`: The port on which the server runs (default: 3000).
- `JWT_SECRET`: Secret key used to sign and verify JWT tokens.

---

## API Endpoints

| Method | Endpoint       | Description                  | Authorization Required | Roles Allowed          |
|--------|----------------|------------------------------|-------------------------|-------------------------|
| POST   | `/register`    | Register a new user          | No                      | Any                     |
| POST   | `/login`       | Log in and receive a token   | No                      | Any                     |
| GET    | `/dashboard`   | Access user dashboard        | Yes                     | Admin, User             |
| GET    | `/admin`       | Admin-specific resource      | Yes                     | Admin                   |

---

## Usage Example

### Register a User
**Request**  
```http
POST /register
```
**Body**  
```json
{
  "username": "john_doe",
  "password": "securepassword",
  "role": "User"
}
```

### Log in
**Request**  
```http
POST /login
```
**Body**  
```json
{
  "username": "john_doe",
  "password": "securepassword"
}
```
**Response**  
```json
{
  "token": "your_generated_jwt_token"
}
```

### Access Protected Route (Dashboard)
**Request**  
```http
GET /dashboard
```
**Headers**  
```json
{
  "Authorization": "Bearer your_generated_jwt_token"
}
```

---

## Project Structure

```plaintext
<project-folder>
│
├── .env               # Environment variables
├── package.json       # Project metadata and dependencies
├── server.js          # Main server entry point
├── routes/            # API route definitions
└── controllers/       # Route handlers
```

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project as per the license terms.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
