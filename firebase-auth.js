// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6EYHJBZiaJ7zkSFAceB6Dl2zDvq9rHG0",
  authDomain: "ai-assistant-3d1d1.firebaseapp.com",
  projectId: "ai-assistant-3d1d1",
  storageBucket: "ai-assistant-3d1d1.appspot.com",
  messagingSenderId: "955748553206",
  appId: "1:955748553206:web:6565b4c200d00c16b137d7",
  measurementId: "G-DNZ342NMQR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
