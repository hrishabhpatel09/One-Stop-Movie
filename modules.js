
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase,set,ref,child} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCm9QpKqFryWOMVbDDiKYuO2R3vZxQ9IV0",
  authDomain: "one-stop-movie-24194.firebaseapp.com",
  projectId: "one-stop-movie-24194",
  storageBucket: "one-stop-movie-24194.appspot.com",
  messagingSenderId: "591076730586",
  appId: "1:591076730586:web:6489d94887c246dca0a7e3",
  measurementId: "G-8WP2ZV2EZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getDatabase();
const auth = getAuth(app);
const dbref = ref(db);
const btn=document.querySelector("#loginbtn");

btn.addEventListener("click",()=>{
    signInWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>{
        console.log("success");
        location.href="homepage.html";
    })
    .catch((error)=>{
        alert("Bad Credentials");
        console.log(error);
    })
});