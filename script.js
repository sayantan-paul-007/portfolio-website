const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const toggleCircle = document.getElementById("toggleCircle");
const mode = document.querySelector('.mode');
// Dark and Light Mode Toggle
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("bg-[#0A0A0A]", "text-[#F8FAFC]");
    body.classList.remove("bg-white", "text-gray-900");
    toggleCircle.classList.add("translate-x-6");
    toggleCircle.classList.remove("translate-x-0");
    toggleCircle.classList.add("bg-red-500");
    toggleCircle.classList.remove("bg-white");
    mode.innerText = "dark"

  } else {
    body.classList.add("bg-white", "text-gray-900");
    body.classList.remove("bg-[#0A0A0A]", "text-[#F8FAFC]");
    toggleCircle.classList.add("translate-x-0");
    toggleCircle.classList.remove("translate-x-6");
    toggleCircle.classList.remove("bg-red-500");
    toggleCircle.classList.add("bg-white");
     mode.innerText = "light"
  }
});
// Tech Stack section and Content Switching
   const tabButtonStack = document.querySelectorAll('.tab-btn-stack');
    const tabContentStack = document.querySelectorAll('.tab-content-stack');

    tabButtonStack.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active styling
        tabButtonStack.forEach(btn => btn.classList.remove('bg-purple-600'));
        button.classList.add('bg-purple-600');

        // Hide all content
        tabContentStack.forEach(content => content.classList.add('hidden'));

        // Show selected tab
        const selectedTab = button.getAttribute('data-tab');
        document.getElementById(selectedTab).classList.remove('hidden');
      });
    });
// Project section and Content Switching
    const tabButtonProjects = document.querySelectorAll('.tab-btn-projects');
    const tabContentProjects = document.querySelectorAll('.tab-content-projects');

    tabButtonProjects.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active styling
        tabButtonProjects.forEach(btn => btn.classList.remove('bg-purple-600'));
        button.classList.add('bg-purple-600');

        // Hide all content
        tabContentProjects.forEach(content => content.classList.add('hidden'));

        // Show selected tab
        const selectedTab = button.getAttribute('data-tab');
        document.getElementById(selectedTab).classList.remove('hidden');
      });
    });
// Certificate section and Content Switching
const tabButtonCertificate = document.querySelectorAll('.tab-btn-certificate');
const tabContentCertificate = document.querySelectorAll('.tab-content-certificate');

tabButtonCertificate.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active styling
    tabButtonCertificate.forEach(btn => btn.classList.remove('bg-purple-600'));
    button.classList.add('bg-purple-600');

    // Hide all content
    tabContentCertificate.forEach(content => content.classList.add('hidden'));

    // Show selected tab
    const selectedTab = button.getAttribute('data-tab');
    document.getElementById(selectedTab).classList.remove('hidden');
  });
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import {firebaseConfig} from './firebase-config'

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);









// Contact Form
document.getElementById("contactForm").addEventListener("submit",async function (e) {
  e.preventDefault();

  const name = sanitize(document.getElementById("name").value.trim());
  const email = sanitize(document.getElementById("email").value.trim());
  const message = sanitize(document.getElementById("message").value.trim());
  const errorMessage = document.getElementById("errorMessage");

  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required.";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!isValidEmailStrict(email)) {
    alert("Invalid or temporary email detected. Please use a valid, personal email.");
    return;
  }

  if (!isValidName(name)) {
    alert("Please enter a valid name. Only letters, spaces, and hyphens are allowed, and each word should start with a capital letter.");
    return;
  }
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    alert("Message sent successfully!");
    this.reset();
  }catch (error) {
    console.error("Error adding document: ", error);
    alert("Error sending message: " + error.message);
  }
});

function sanitize(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}
function isValidName(name) {
  // Trim spaces from both ends
  name = name.trim();

  // Length check
  if (name.length < 2 || name.length > 50) return false;

  // Regex explanation:
  // ^            → start of string
  // [A-Z][a-z]*  → capital letter followed by lowercase letters (optional)
  // ([-\s][A-Z][a-z]*)* → allow hyphen or space, followed by capitalized word
  // $            → end of string
  const nameRegex = /^([A-Z][a-z]*)([-\s][A-Z][a-z]*)*$/;

  return nameRegex.test(name);
}
function isValidEmailStrict(email) {
  email = email.trim();
  if (email.length < 6 || email.length > 100) return false;
  const disposableDomains = [
    "tempmail.com", "10minutemail.com", "mailinator.com", "guerrillamail.com",
    "yopmail.com", "trashmail.com", "fakeinbox.com", "getnada.com"
  ];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)?(com|in|org|net|edu|io|gov|ai|dev|tech)$/i;
  if (!emailRegex.test(email)) return false;
  const domain = email.split('@')[1].toLowerCase();
  return !disposableDomains.some(disposable => domain.includes(disposable));
}