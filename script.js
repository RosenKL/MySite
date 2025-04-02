import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase конфигурация
const firebaseConfig = {
    apiKey: "AIzaSyBC5kfGeqpV8JhlsV9tr04voomrZiIFcRQ",
    authDomain: "firestore-483fd.firebaseapp.com",
    projectId: "firestore-483fd",
    storageBucket: "firestore-483fd.firebasestorage.app",
    messagingSenderId: "735338258783",
    appId: "1:735338258783:web:838441011f0dac055796ea",
    measurementId: "G-B2Q2EVLM3C"
};

// Инициализиране на Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Извличане на CV данни от Firestore
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const docRef = doc(db, "USER.DATA", "ID3"); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById("first-name").textContent = data.fName;
            document.getElementById("last-name").textContent = data.lName;
            document.getElementById("phone").textContent = data.tel_um;
            document.getElementById("address").textContent = data.address;
            document.getElementById("school").textContent = data.school;
        } else {
            console.log("Документът не съществува!");
        }
    } catch (error) {
        console.error("Грешка при зареждане на данните:", error);
    }
});
