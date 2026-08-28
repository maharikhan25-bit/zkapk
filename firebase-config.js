// دلته خپل Firebase تنظیمات کیږدئ (له Firebase Console څخه)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// دا پاسورډ به یوازې تاسو ته اجازه درکړي چې نوی اپلیکیشن اپلوډ کړئ
// (دا یوه ساده ساتنه ده، نه بشپړه امنیتي طریقه — که غواړئ Firebase Auth کارول غوره دي)
const UPLOAD_PASSWORD = "خپل-پټ-کلمه-دلته-ولیکئ";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
