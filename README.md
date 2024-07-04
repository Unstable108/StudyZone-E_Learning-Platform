
# StudyZone - An E-Learning Platform

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Contact](#contact)

## About

**StudyZone** is a comprehensive e-learning platform designed to provide an immersive online learning experience. It allows users to browse and enroll in various courses, view lectures, and manage their learning progress. The platform also includes an admin dashboard for course and user management.

## Features

- **User Authentication**: Secure user login and registration.
- **Course Management**: Add, edit, and delete courses and lectures.(**For Admin**)
- **User Dashboard**: Track enrolled courses and progress.
- **Payment Integration**: Secure payment gateway using RazorPay.
- **Admin Dashboard**: Manage users, courses, and content.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Unstable108/StudyZone-E_Learning-Platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StudyZone-E_Learning-Platform
   ```
3. Install the dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd backend
   npm install
   ```
4. Set up environment variables for the server (create a `.env` file in the `server` directory):
   ```env
   JWT_SECRET=your_jwt_secret
   MONGODB_URL=your_mongo_db_uri
   Razorpay_Key_Id=your_razorpay_key_id
   Razorpay_Key_Secret=your_razorpay_key_secret
   PORT = 3000
   EMAIL=email_to_use_nodemailer
   EMAIL_PASSWORD=password_for_nodemailer
   ```
5. Start the server and client:
   ```bash
   cd frontend
   npm run dev
   cd backend
   npm start
   ```

## Usage

Once the project is set up and running, you can access the platform at `http://localhost:3000`. Register or log in to explore the features.

## Screenshots

Here are some screenshots of the StudyZone platform:

- **Login Page**:
  ![Login Page](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/LoginPage.png)

- **Home Page**:
  ![Home Page](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/HomePage.png)

- **User Dashboard**:
  ![Dashboard](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/Dashboard.png)

- **Available Courses**:
  ![Available Courses](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/Available%20Courses.png)

- **Enroll**:
  ![Enroll](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/Enroll.png)

- **Playing Lecture**:
  ![Playing Lecture](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/playingLecture.png)

- **Payment**:
  ![Payment](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/payment.png)

- **RazorPay Integration**:
  ![RazorPay](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/RazorPay.png)

- **Admin Dashboard**:
  ![Admin Dashboard](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/adminDashboard.png)

- **Add Course**:
  ![Add Course](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/addCourse.png)

- **Add Lectures**:
  ![Add Lectures](https://github.com/Unstable108/StudyZone-E_Learning-Platform/blob/master/screenshotes/addLectures.png)

## Technologies

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT
- **Payment Integration**: RazorPay

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


## Contact

For any inquiries, please contact [debasish2000.26@gmail.com](mailto:debasish2000.26@gmail.com).
