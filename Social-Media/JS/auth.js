import { auth, db } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  doc,
  getDocs,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const videoOverlay = document.getElementById("videoOverlay");
  const loadingVideo = document.getElementById("loadingVideo");

  //Login
  if (loginBtn) {
    loginBtn.addEventListener("click", async (event) => {
      event.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      loginBtn.disabled = true;

      try {
        await signInWithEmailAndPassword(auth, email, password);

        videoOverlay.style.display = "flex";
        loadingVideo.currentTime = 0;
        loadingVideo.play();

        // Wait 500ms before redirecting to dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 500);
      } catch (error) {
        alert(error.message);
        loginBtn.disabled = false;
      }
    });
  }

  //Signup
  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", userCredentials.user.uid), { email });
        window.location.href = "index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  //Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      alert("Logged out successfully.");
      window.location.href = "index.html";
    });
  }
});
