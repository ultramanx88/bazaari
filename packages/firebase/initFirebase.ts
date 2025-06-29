import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics"; // ใช้เมื่อจำเป็น

const firebaseConfig = {
  apiKey: "AIzaSyBkvsOMllft9otohdwis4QqZQoV5vIDfwc",
  authDomain: "bazaaari.firebaseapp.com",
  projectId: "bazaaari",
  storageBucket: "bazaaari.appspot.com", // ✅ ต้องเป็น .appspot.com
  messagingSenderId: "1032130290482",
  appId: "1:1032130290482:web:8f64a929fb1123d6516d2b",
  measurementId: "G-LN1YFZL0KX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
// export const analytics = getAnalytics(app); // เปิดเมื่อใช้จริง
