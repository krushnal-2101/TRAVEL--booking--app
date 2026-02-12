<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b07cb649-aa64-416a-9305-ac47ecb4e95d" />


✈️ Travelia – Travel Booking App (React + Firebase)

Travelia is a modern travel booking web app built with React (Vite) and Firebase.
Users can browse trips, login/signup, and explore destinations.

🚀 Features

🔐 Firebase Authentication (Login / Signup)

🧭 Protected Routes

🏝️ Trips listing page

🎨 Responsive UI with Bootstrap

⚡ Fast build using Vite

🔥 Firebase integration

🛠️ Tech Stack

React JS (Vite)

Firebase

React Router DOM

Bootstrap

CSS

📂 Folder Structure
travel-booking-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── auth/
│   │   └── Auth.jsx
│   ├── Components/
│   ├── Pages/
│   ├── Routes/
│   │   ├── Layout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── Firebase/
│   │   └── config.js
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
└── README.md
⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/your-username/travelia.git
cd travelia
2️⃣ Install Dependencies
npm install
3️⃣ Run Project
npm run dev

App runs on:

http://localhost:5173
🔥 Firebase Setup

Create a Firebase project and add config in:

src/Firebase/config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
🔐 Login Credentials (Demo)

You can register new users from signup page.

📸 Screenshots

Home Page

Trips Page

Login Page

(Add screenshots here)

🧑‍💻 Author

Krushnal Bhatti

📜 License

This project is for educational purpose.
