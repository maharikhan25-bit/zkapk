// Firebase تنظیمات — د zkapk پروژې لپاره
const firebaseConfig = {
  apiKey: "AIzaSyACPnR4s769MxaQXWJ26aq2V5O2KmMAKKg",
  authDomain: "zkapk-958b4.firebaseapp.com",
  projectId: "zkapk-958b4",
  storageBucket: "zkapk-958b4.firebasestorage.app",
  messagingSenderId: "492527142600",
  appId: "1:492527142600:web:18443ab0dce0396721c7fd"
};

const UPLOAD_PASSWORD = "edris_zirak";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
