import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { collection,getDocs,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
getDocs(collectionRef)
.then((response)=>{
  console.log(response);
  console.log(response.docs);
  const movies = response.docs.map(doc=>({data: doc.data()}));
  console.log(movies);
  console.log(movies.length);
  const container=document.querySelector(".watchlist-section");
  for(let i=0; i<movies.length;i++){
    var title=document.createElement("h3");
    var div=document.createElement("div");
    var img=document.createElement("img");
    var para=document.createElement("p");
    var box=document.createElement("div");
    var btn=document.createElement("button");
    container.append(div);
    div.append(img);
    img.src=movies[i].data.poster_url;
    div.append(box);
    box.append(title);
    title.innerText=movies[i].data.name;
    box.append(para);
    para.innerText=movies[i].data.description;
    box.append(btn);
    btn.innerText="Remove";
    btn.classList.add("btn");
    btn.setAttribute("id",response.docs[i]._key.path.segments[6])
  }
  const buttons=document.querySelectorAll(".btn");
  buttons.forEach((e)=>{
    e.addEventListener("click",()=>{
      removeItem(e.getAttribute("id"));
    })
  })
})
.catch(error=>console.log(error.message));

function removeItem(id){
  var docRef=doc(db,'watchlist',id);
  deleteDoc(docRef)
  .then(()=>{
    location.reload();
  })
}
//adding functionalities of navbar
const logo = document.querySelector(".logo");
logo.addEventListener("click",()=>location.href="homepage.html");


  //Dark Mode of the Website
  const moon =document.querySelector("#moon");
  const sun =document.querySelector("#sun");
  const navbar = document.querySelector(".navbar");
  const trendsection=document.querySelector(".trending_screen");
  // const trendUpper = document.querySelector("");
  const body =document.querySelector("body");
  moon.addEventListener("click",()=>{
    navbar.style.backgroundColor="black";
    navbar.style.color="white";
    moon.style.display="none";
    sun.style.display="block";
    document.body.style.backgroundColor="black";
    body.style.color="white";
  });
  sun.addEventListener("click",()=>{
    navbar.style.backgroundColor="white";
    navbar.style.color="black";
    moon.style.display="block";
    sun.style.display="none";
    document.body.style.backgroundColor="white";
    body.style.color="black";
  });


