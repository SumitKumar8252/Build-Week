import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkhffmj29VNW2y7SfM3Z6N7M7-rYCl8Ho",
  authDomain: "social-buddy-7f22b.firebaseapp.com",
  projectId: "social-buddy-7f22b",
  storageBucket: "social-buddy-7f22b.firebasestorage.app",
  messagingSenderId: "1066300615554",
  appId: "1:1066300615554:web:46fe8e6ed07f688d69bd9b",
  measurementId: "G-QS6W7RLFLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const db= getFirestore(app);
