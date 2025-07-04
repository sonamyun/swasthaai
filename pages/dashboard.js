// Firebase Authentication
import { auth } from "./firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("auth-type").textContent = user.providerData[0].providerId;
  } else {
    window.location.href = "../index.html"; // Redirect to login if not signed in
  }
});

// Generic click alert for action buttons
document.querySelectorAll(".action-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`${btn.textContent.trim()} clicked!`);
  });
});

// ASK HELP redirects to emergency page
document.getElementById("ask-help").addEventListener("click", () => {
  window.location.href = "emergency.html";
});

// LOCATE opens Google Maps with specific location
document.getElementById("locate").addEventListener("click", () => {
  const location = encodeURIComponent("hospitals near Mahalaxmi Lalitpur Cosmos College Block B");
  window.open(`https://www.google.com/maps/search/${location}`, "_blank");
});

// ASK DOCTOR opens membership modal
document.getElementById("ask-doctor").addEventListener("click", () => {
  document.getElementById("membership-popup").style.display = "flex";
});

// Close membership popup
window.closePopup = function () {
  document.getElementById("membership-popup").style.display = "none";
};
