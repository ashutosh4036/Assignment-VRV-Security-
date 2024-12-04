Table of Contents:

Project Overview
Technologies Used
Setup Instructions
Environment Variables
API Endpoints
Usage Example
Project Structure
<------------------------------------------------------------------------------------------------->

Project Overview
This project demonstrates:

Authentication: Users can register, log in, and receive a JWT token for secure session management.
Authorization: Access to certain routes is restricted based on the user's role.
RBAC: Different roles (Admin, User, Moderator) have varying levels of access to specific resources.

<------------------------------------------------------------------------------------------------->

Technologies Used
Node.js
Express.js
JWT (jsonwebtoken)
bcrypt.js for password hashing

<------------------------------------------------------------------------------------------------->

Setup Instructions
Clone the repository:

git clone <repository-url>  
cd <project-folder>  

<------------------------------------------------------------------------------------------------->
Install dependencies:

npm install  
Create a .env file in the root directory and configure the environment variables (see below).

Start the server:

npm start  
Environment Variables
Create a .env file in the project root and add the following variables:

env
Copy code
PORT=3000  
JWT_SECRET=your_jwt_secret_key  
Replace your_jwt_secret_key with a secure secret key.

<------------------------------------------------------------------------------------------------->
API Endpoints
Method	Endpoint	Description	                   AuthorizationRequired	RolesAllowed
POST	/register	Register a new user  	                  No             Any
POST	/login	    Log in and receive a token	              No	         Any
GET	/dashboard	    Access dashboard	                      Yes	         Admin, User
GET	/admin	        Admin-specific resource	                  Yes	         Admin

<------------------------------------------------------------------------------------------------->


Usage Example
Register a User
Request:
POST /register

Body:

{  
  "username": "john_doe",  
  "password": "securepassword",  
  "role": "User"  
}  


Log in
Request:
POST /login

Body:
{  
  "username": "john_doe",  
  "password": "securepassword"  
}  

Response:
{  
  "token": "your_generated_jwt_token"  
}  


Access Protected Route (Dashboard)
Request:
GET /dashboard

Headers:
{  
  "Authorization": "Bearer your_generated_jwt_token"  
}  