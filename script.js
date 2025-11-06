
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
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Reference materials container
const materialsList = document.getElementById("materials-list");
const storageRef = ref(storage);

// Fetch and display files
listAll(storageRef)
  .then((res) => {
    materialsList.innerHTML = "";
    if (res.items.length === 0) {
      materialsList.innerHTML = "<p>No materials uploaded yet.</p>";
    } else {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          const fileName = itemRef.name.replace(/_/g, " ");
          const div = document.createElement("div");
          div.className = "material-box";
          div.innerHTML = `
            <h3>${fileName}</h3>
            <a href="${url}" class="download-btn" target="_blank">Download</a>
          `;
          materialsList.appendChild(div);
        });
      });
    }
  })
  .catch((error) => {
    console.error("Error loading files:", error);
    materialsList.innerHTML = `
      <p style="color: #ff7777;">
        ⚠️ Error loading materials. Please check your Firebase setup.
      </p>`;
  });

