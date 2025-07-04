// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA6EYHJBZiaJ7zkSFAceB6Dl2zDvq9rHG0",
  authDomain: "ai-assistant-3d1d1.firebaseapp.com",
  projectId: "ai-assistant-3d1d1",
  storageBucket: "ai-assistant-3d1d1.appspot.com",
  messagingSenderId: "955748553206",
  appId: "1:955748553206:web:6565b4c200d00c16b137d7",
  measurementId: "G-DNZ342NMQR"
};

// Initialize App and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toast Function
function showToast(message, isSuccess = true) {
  const toast = document.createElement("div");
  toast.className = `custom-toast ${isSuccess ? "success" : "error"}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// LOGIN
window.login = async function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showToast("Login successful!");
    setTimeout(() => {
      window.location.href = "/pages/dashboard.html";
    }, 1000);
  } catch (error) {
    showToast("Login failed: " + error.message, false);
  }
};

// REGISTER
window.register = async function (e) {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showToast("Account created!");
    setTimeout(() => {
      window.location.href = "/pages/dashboard.html";
    }, 1000);
  } catch (error) {
    showToast("Signup failed: " + error.message, false);
  }
};

// FORGOT PASSWORD TOGGLE
document.getElementById("forgot-password-link")?.addEventListener("click", (e) => {
  e.preventDefault();
  const resetContainer = document.getElementById("reset-password-container");
  if (resetContainer) resetContainer.style.display = "block";
});

// SEND RESET EMAIL
window.sendResetEmail = async function () {
  const email = document.getElementById("reset-email").value;
  if (!email) {
    showToast("Please enter your email.", false);
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    showToast("Password reset email sent!");
  } catch (error) {
    showToast("Error: " + error.message, false);
  }
};

window.login = async function (event) {
  event.preventDefault();
  // your login logic
};

window.register = async function (event) {
  event.preventDefault();
  // your register logic
};

window.sendResetEmail = async function () {
  // your reset logic
};

export { auth };
