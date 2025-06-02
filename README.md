# 💰 Expense Tracker App

This is a full-stack mobile app that helps you track your income and expenses.

## 🛠 What I Used

- **React Native with Expo** – to build the mobile app  
- **Node.js + Express** – for the backend (API)  
- **Clerk** – for user authentication  
- **Neon** – for PostgreSQL database  
- **Render** – to deploy the backend

## 📁 Project Structure

react-native-wallet/
├── mobile/ → React Native (frontend)
└── backend/ → Node.js (backend API)

## 🚀 How to Run the Project

### Mobile App

1. Go to the mobile folder:

    ```
    cd mobile
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Start the app:

    ```
    npx expo start
    ```

---

### Backend API

1. Go to the backend folder:

    ```
    cd backend
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the server:

    ```
    npm run dev
    ```

✅ Make sure to set up your `.env` file for the backend (e.g., database URL, Clerk keys, etc.)

## 🙋‍♂️ Why I Built This

I followed a tutorial to learn full-stack mobile development and successfully deployed both frontend and backend. This project helped me understand how real-world apps are structured and work together.

---

## 📌 Notes

- I used **Clerk** for authentication instead of writing it from scratch.
- The backend is deployed on **Render**, and the database is hosted on **Neon**.
