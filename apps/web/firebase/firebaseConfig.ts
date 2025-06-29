import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";           // ← เพิ่มบรรทัดนี้
import { getFirestore } from "firebase/firestore"; // ← เพิ่มบรรทัดนี้

// Export firebaseConfig เพื่อให้ไฟล์อื่นใช้ได้
export const firebaseConfig = {
  apiKey: "AIzaSyBkvsOMllft9otohdwis4QqZQoV5vIDfwc",
  authDomain: "bazaaari.firebaseapp.com",
  projectId: "bazaaari",
  storageBucket: "bazaaari.firebasestorage.app",
  messagingSenderId: "1032130290482",
  appId: "1:1032130290482:web:8f64a929fb1123d6516d2b",
  measurementId: "G-LN1YFZL0KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it ← เพิ่มบรรทัดนี้
export const auth = getAuth(app);

// Initialize Firestore and export it ← เพิ่มบรรทัดนี้
export const db = getFirestore(app);

// Analytics จะใช้ได้เฉพาะใน browser environment
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Export app เพื่อให้ไฟล์อื่นใช้ได้
export { app };