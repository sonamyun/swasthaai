// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA6EYHJBZiaJ7zkSFAceB6Dl2zDvq9rHG0",
  authDomain: "ai-assistant-3d1d1.firebaseapp.com",
  projectId: "ai-assistant-3d1d1",
  storageBucket: "ai-assistant-3d1d1.appspot.com",
  messagingSenderId: "955748553206",
  appId: "1:955748553206:web:6565b4c200d00c16b137d7",
  measurementId: "G-DNZ342NMQR"
};

// ✅ Initialize App and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ LOGIN
window.login = async function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "/pages/dashboard.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

// ✅ REGISTER
window.register = async function (e) {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created! Redirecting to dashboard...");
    window.location.href = "/pages/dashboard.html";
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
};

// ✅ FORGOT PASSWORD UI TOGGLE
document.getElementById("forgot-password-link")?.addEventListener("click", (e) => {
  e.preventDefault();
  const resetContainer = document.getElementById("reset-password-container");
  if (resetContainer) resetContainer.style.display = "block";
});

// ✅ SEND RESET EMAIL
window.sendResetEmail = async function () {
  const email = document.getElementById("reset-email").value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent! Check your inbox.");
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// ✅ Export for optional Firebase access in other files
export { auth };
