import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { collection,addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCm9QpKqFryWOMVbDDiKYuO2R3vZxQ9IV0",
  authDomain: "one-stop-movie-24194.firebaseapp.com",
  databaseURL: "https://one-stop-movie-24194-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "one-stop-movie-24194",
  storageBucket: "one-stop-movie-24194.appspot.com",
  messagingSenderId: "591076730586",
  appId: "1:591076730586:web:6489d94887c246dca0a7e3",
  measurementId: "G-8WP2ZV2EZ4"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const collectionRef = collection(db,'watchlist');
const btn=document.querySelector("#add");
btn.addEventListener("click",()=>{
    addDoc(collectionRef,{name:localStorage.title,poster_url:localStorage.poster_path,description:localStorage.overview})
    .then((response)=>{console.log(response);alert("Added to Watchlist")})
    .catch((error)=>{console.log(error);})
})

const submit=document.querySelector("#submit-btn");
const collectionRef2 = collection(db,'rating');
submit.addEventListener("click",()=>{
  addDoc(collectionRef2,{Movie:localStorage.title,Rating:localStorage.rating})
    .then((response)=>{console.log(response);alert("Rating Submitted Succesfully")})
    .catch((error)=>{console.log(error);})
})