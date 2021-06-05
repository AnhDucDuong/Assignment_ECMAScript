import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    // Đoạn này copy trên firebase của từng người nha
    // trên video có 2 đoạn để copy phần này đấy, chú ý đoạn này nhé
    apiKey: "AIzaSyDqAI5PpXpOza7Yn9SBk39hOnQrzS5CQN4",
    authDomain: "ecmascript-7a6e3.firebaseapp.com",
    projectId: "ecmascript-7a6e3",
    storageBucket: "ecmascript-7a6e3.appspot.com",
    messagingSenderId: "1065040054289",
    appId: "1:1065040054289:web:8581901a3937c6ee87c9b0",
    measurementId: "G-YX9WVD483L"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;