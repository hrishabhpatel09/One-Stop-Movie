import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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
const auth = getAuth(app);
function check(){
    if(password.value===confirmPassword.value){
        return true;
    }
    else{
        return false;
    }
}
 const registerbtn=document.querySelector("#register_btn");
 const email=document.querySelector("#email");
 const password=document.querySelector("#pass");
 const confirmPassword=document.querySelector("#conpass");
registerbtn.addEventListener("click",()=>{
    if(check()){
        createUserWithEmailAndPassword(auth,email.value,password.value)
        .then(()=>{
            console.log(auth.currentUser.email);
            location.href="login.html";
        })
        .catch((error)=>{
            console.log(error);
        })
    }
 });

