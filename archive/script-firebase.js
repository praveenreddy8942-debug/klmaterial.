// Archived Firebase script (moved from root to avoid accidental usage)
// Original file: script.js
// This file contained a Firebase Storage-based loader for materials.
// It's been archived because the site now uses Supabase for materials.

// ----- original content -----
// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

// 🔥 Replace with YOUR actual Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "cse-materials.firebaseapp.com",
  projectId: "cse-materials",
  storageBucket: "cse-materials.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// NOTE: analytics and storage initialization were here in the original
// The rest of the original script listed files from Firebase Storage
// and rendered them into the DOM. This logic is preserved here for
// reference but is no longer active on the live materials page.

// ----------------------------
