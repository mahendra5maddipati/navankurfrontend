# Navankur Frontend

This project is the frontend for the Navankur application. It is built using React and implements user authentication flows (registration, login, logout, and password reset) with protected routes. Session data is managed on the backend using Redis.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Session Management](#session-management)
- [Troubleshooting](#troubleshooting)

## Features

- **User Authentication:** Register, login, and logout functionality.
- **Protected Routes:** Only logged-in users can access protected pages such as Home and Profile.
- **Password Reset:** Forgot Password and Reset Password features integrated.
- **Session Management:** Active session data is handled on the backend via Redis.
- **Responsive UI:** Simple styling and layout to provide a clean user experience.

## Project Structure

```
navankurafrontend/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── ForgotPassword.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── PrivateRoute.js
│   │   ├── Register.js
│   │   └── ResetPassword.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── Pages/
│   │   ├── Home.js
│   │   └── Profile.js
│   ├── Utils/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
└── README.md  <-- This file
```

## Installation

1. **Clone the repository** (if you haven't already):

   ```sh
   git clone https://github.com/your-username/navankurAssignment.git
   cd navankurAssignment/navankurafrontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

1. **Run the development server:**

   ```sh
   npm start
   ```

2. **Build for production:**

   ```sh
   npm run build
   ```

## API Integration

The frontend communicates with the backend API hosted at `https://navankurbackend.onrender.com/api/auth`. The following endpoints are used:

- **Registration:** `POST /register`
- **Login:** `POST /login`
- **Logout:** `POST /logout`
- **Profile:** `GET /profile`
- **Request Password Reset:** `POST /request-password-reset`
- **Reset Password:** `POST /reset-password`

API calls are defined in the `src/Utils/api.js` file using Axios.

## Session Management

User sessions are stored and managed by the backend using Redis. Upon successful login, a JWT token is issued and stored in Redis for 1 hour (3600 seconds). Logging out removes the session from Redis. Protected routes in this frontend check for a session token stored in `localStorage` and redirect unauthenticated users to the login page.

## Troubleshooting

- **Authentication Issues:** If you encounter issues with sessions (e.g., expired token or no token found), try logging out and logging in again.
- **API Errors:** Check the backend logs (and Redis keys if needed using Redis Insights or the provided utility `utils/listRedisKeys.js`) for details on any API-related problems.
- **Environment Variables:** Ensure your backend `.env` file is correctly configured with your MongoDB, Redis, JWT, and email settings. The frontend uses the API URL configured in `src/Utils/api.js`.