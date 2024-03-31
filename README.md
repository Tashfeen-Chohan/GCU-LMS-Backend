# MERN Authentication System

This repository houses a robust authentication system built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. Designed with simplicity and security in mind, this system enables students to securely register, login, and manage their accounts.

## Features :

- **User Registration**: Students can register by providing essential information such as name, roll number, email, phone number, address, gender, and major (Computer Science, Software Engineering, Information Technology).
- **Validation**: Robust validation ensures that each registration is unique, with checks to prevent duplication of email, roll number, and phone number.
- **Beautiful Loading Effect**: Enjoy a seamless registration and login experience with a captivating loading effect that enhances user interaction and feedback.
- **Toastify Notifications**: Upon successful login, students are greeted with toast notifications, providing instant feedback and reassurance of successful authentication.
- **Navigate to Home Page**: Following login, students are seamlessly redirected to the home page, where they can access all their information conveniently.
- **Home Page Display**: The home page provides a comprehensive view of the student's profile, displaying all registered information for easy access and reference.
- **Logout Functionality**: Students can securely log out of their accounts, ensuring the privacy and security of their information.
- **Responsive Design**: The system is designed to provide an optimal viewing experience across a wide range of devices, ensuring accessibility and usability on desktops, tablets, and mobile phones.

## Usage :

### Registration Requirements:
- **Name**: Must be at least 3 characters long.
- **Roll Number Format**: Follows the GCU roll number allotment system format `xxxx-bsxx-xx` (for example, for a Computer Science student: `0278-BSCS-21`, where the first part is the actual roll number, the second part represents the major, and the third part indicates the year).
- **Email**: Must be a valid email address.
- **Password**: Must be at least 5 characters long and contain at least 1 lowercase letter, 1 uppercase letter, and 1 numeric digit.
- **Phone Number**: Must be a Pakistan-based 11-digit number (numeric only).

### Login Requirements :
- **Roll Number**: The student must provide their roll number in the specified format.
- **Password**: The student must provide their password to log in to their account.

Upon meeting these requirements, students can successfully register for an account and log in.

## Technologies Used :

- **MongoDB**: A flexible and scalable NoSQL database used for data storage.
- **Express.js**: A minimalist web framework for Node.js that facilitates the creation of robust APIs.
- **React.js**: A popular JavaScript library for building user interfaces, providing a dynamic and responsive front-end experience.
- **Node.js**: A powerful JavaScript runtime environment that enables server-side execution of JavaScript code.
- **Axios**: A promise-based HTTP client for making asynchronous requests to the server.
- **React Toastify**: A React library for toast notifications, enhancing user feedback and interaction.
- **React Spinner**: A library for creating smooth loading effects, providing a seamless user experience during data processing.

## Demo [Sign up] :

![GCU LMS - Google Chrome 01_04_2024 12_23_24 am](https://github.com/Tashfeen-Chohan/GCU-LOGIN-Backend/assets/147094961/53fac590-6c50-490e-a44d-8bc73f0ab0ad)

## Login Page

![GCU LMS - Google Chrome 01_04_2024 12_23_35 am](https://github.com/Tashfeen-Chohan/GCU-LOGIN-Backend/assets/147094961/5bc76df8-4b7f-4598-96b9-1d03767b4be3)

## Home Page [After Login] :

![GCU LMS - Google Chrome 01_04_2024 12_26_16 am](https://github.com/Tashfeen-Chohan/GCU-LOGIN-Backend/assets/147094961/9f77c04b-dbbf-4547-a2b0-18da029a58be)

## Responsive :

![iPhone-13-PRO-gcu-login-register vercel app](https://github.com/Tashfeen-Chohan/GCU-LOGIN-Backend/assets/147094961/8d9002be-ee3c-4404-ae68-342f0b24feb5)


![iPhone-13-PRO-gcu-login-register vercel app (1)](https://github.com/Tashfeen-Chohan/GCU-LOGIN-Backend/assets/147094961/b7940df3-262d-423b-ae2e-2779e3646bdb)








