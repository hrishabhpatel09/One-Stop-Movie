const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzc1YzQwMzA4OGQ1MTY4MDhjNDc1YzIyMWQ2Njc5NCIsInN1YiI6IjY1Nzc0MzNlNTY0ZWM3MDBlMTBjODdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kb0N1-7PYRKHTDLZY3C54uvn6KJUCVJTo9Z9LKV1rhA'
    }
  };
  //Making Iframe 
  const cross =document.querySelector("#cross_icon");
  let iframe=document.querySelector("iframe");
  //Function TO Launch Trailer when Button is Clicked
  function launchTrailer(){
    fetchTrailer(movieid);
    let trailerUrl=`https://www.youtube.com/watch?v=`;
    let body=document.querySelector("body");
    body.prepend(iframe);
    iframe.style.display="block";
    console.log(localStorage.trailerKey);
    iframe.src=`https://www.youtube.com/embed/${localStorage.trailerKey}?si=F7MGlENihHw9BHy-`;
    // iframe.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/UGc5Tzz19UY?si=F7MGlENihHw9BHy-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    cross.style.display="block";
    console.log(trailerUrl);
  }
  cross.addEventListener("click",()=>{
    console.log("hello");
    cross.style.display="none";
    // iframe.style.display="none";
    iframe.remove();
  }
  )
  
  //Function to fetch Movie URL
  //function to fetch Trailer URL
 function fetchTrailer(movieid){
  fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, options)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    response.results.forEach((vid)=>{
      if(vid.type=="Trailer"){
        localStorage.setItem("trailerKey",vid.key);
      }
      else{
        localStorage.setItem("trailerKey","no");
      }
    });
  
  })
  .catch(err => console.error(err));
  };

  
  let movieid=localStorage.movieId;
  let div = document.querySelector("#trailer");
  let frame=document.createElement("iframe");
   div.append(frame);


 var str="";
  fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, options)
    .then(response => response.json())
    .then((response) =>{
      console.log(response);
      // var overview=response.overview;
      // localStorage.setItem("overview",overview);
      response.genres.forEach((item)=>{
        str=str+item.name+" ";
        console.log(str);
      })
    })
    .catch(err => console.error(err));
   
let poster = document.querySelector("#poster");
let poster_url=localStorage.getItem("poster_path");
console.log(poster_url);
poster.src=`https://www.themoviedb.org/t/p/original/${poster_url}`;
let backdrop_url=`https://www.themoviedb.org/t/p/original/${localStorage.backdrop_path}`;
// console.log(backdrop_url);
let background=document.querySelector(".backdrop");
background.style.backgroundImage=`url(${backdrop_url})`;
background.style.backgroundSize="cover";
background.style.backgroundPosition="top left center";

let title=document.querySelector("#title");
title.innerText=localStorage.title;
const pover=document.querySelector("#p-overview");
pover.innerText=`${localStorage.overview}`;



 const personList = document.querySelectorAll(".personlist div");
// Fetching cast Of the show
fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`, options)
  .then(response => response.json())
  .then((response)=>{
    // console.log(response);
    personList.forEach((div)=>{
      let divId = div.getAttribute("id");
      // console.log(response.cast[divId].profile_path);
      // console.dir(div);
      let Img = div.children[0];
      Img.src=`https://www.themoviedb.org/t/p/w138_and_h175_face${response.cast[divId].profile_path}`;
      let Para =div.children[1];
      Para.innerText=`${response.cast[divId].name}`;
      let RolePara=div.children[2];
      RolePara.innerText=`${response.cast[divId].character}`;
    })
  })
  .catch(()=>{
    fetch(`https://api.themoviedb.org/3/tv/${movieid}/credits?language=en-US`, options)
    .then(response => response.json())
    .then((response) =>{
      // console.log(response);
      personList.forEach((div)=>{
        let divId = div.getAttribute("id");
        // console.log(response.cast[divId].profile_path);
        // console.dir(div);
        let Img = div.children[0];
        Img.src=`https://www.themoviedb.org/t/p/w138_and_h175_face${response.cast[divId].profile_path}`;
        let Para =div.children[1];
        Para.innerText=`${response.cast[divId].name}`;
        let RolePara=div.children[2];
        RolePara.innerText=`${response.cast[divId].character}`;
      })
    })
    .catch(err => console.error(err));
  });

  //

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
 
const logo = document.querySelector(".logo");
logo.addEventListener("click",()=>location.href="homepage.html");


function addToWatchlist(){
  console.log(localStorage.title);
  alert(localStorage.title);
}

var val=0;
const values=document.querySelectorAll(".value");
console.log(values);
values.forEach((e)=>{
 e.addEventListener("click",()=>{
  values.forEach((e)=>{
    e.style.opacity="0.4";
  })
  val=e.getAttribute("name");
  e.style.opacity="1";
  localStorage.setItem("rating",val)
 })
})

export var value=val;




