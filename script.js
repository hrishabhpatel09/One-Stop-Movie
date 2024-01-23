const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzc1YzQwMzA4OGQ1MTY4MDhjNDc1YzIyMWQ2Njc5NCIsInN1YiI6IjY1Nzc0MzNlNTY0ZWM3MDBlMTBjODdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kb0N1-7PYRKHTDLZY3C54uvn6KJUCVJTo9Z9LKV1rhA'
  }
};
const time1 =document.querySelector("#time1");
const time2 =document.querySelector("#time2");
let para1=document.querySelector(".today");
let para2=document.querySelector(".thisweek");
const screen_day=document.querySelector("#trending_day");
const screen_week=document.querySelector("#trending_week");
time1.addEventListener("click",()=>{
  time1.classList.add("active");
  time2.classList.remove("active");
  para1.classList.add("color");
  para2.classList.remove("color");
  screen_day.style.display="flex";
  screen_week.style.display="none";
});
time2.addEventListener("click",()=>{
  time1.classList.remove("active");
  time2.classList.add("active");
  para1.classList.remove("color");
  para2.classList.add("color");
  screen_day.style.display="none";
  screen_week.style.display="flex";
});

function setTitles(div,response,id){
  let title=document.createElement("h4");
  div.append(title);
  let name =response.results[id].original_title;
  if(name==undefined){
    name=response.results[id].name;
    title.innerText=name;
  }
  title.innerText=name;
  div.setAttribute("title",`${name}`);
};
//Function For settiing Posters
function setTrendingPoster(response,time){
  let divs=document.querySelectorAll(`#trending_${time} div`);
  divs.forEach((div)=>{
    let id = div.getAttribute("id");
    div.classList.add(`${response.results[id].id}`);
    div.setAttribute("overview",response.results[id].overview);
    let img = document.createElement("img");
    div.prepend(img);
    let path ="https://image.tmdb.org/t/p/w185"+response.results[id].poster_path;
    img.src =path;
    div.setAttribute("backdrop_path",response.results[id].backdrop_path);
    setTitles(div,response,id);
    
  });
}
//fetching Mvi
//Fetching Weekly Trending Movies and Shows

let type =localStorage.type;
fetch(`https://api.themoviedb.org/3/trending/${type}/week?language=en-US`, options)
.then(response => response.json())
.then((response) =>{
  console.log(response);
  setTrendingPoster(response,"week");
})
.catch(err => console.error(err));
//Fetching Daily Trending Shows and Movies
fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options)
  .then(response => response.json())
  .then((response) =>{
    console.log(response);
    setTrendingPoster(response,"day");
  })
  .catch(err => console.error(err));
//Redircting to the Info section when Someone clicks on the corresponding div.
const trenddivs=document.querySelectorAll(".trending_screen div");
  trenddivs.forEach((div)=>{
    div.addEventListener("click",()=>{
      let movieId =div.getAttribute("class");
      console.log(movieId);
      localStorage.setItem("movieId",movieId);
      localStorage.setItem("poster_path",div.children[0].src);
      localStorage.setItem("backdrop_path",div.getAttribute("backdrop_path"));
      localStorage.setItem("title",div.getAttribute("title"));
      localStorage.setItem("overview",div.getAttribute("overview"));
      location.href=`info.html`;
    });
  });


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
  trendsection.style.backgroundColor="black";
  trendsection.style.color="white";
  document.body.style.backgroundColor="black";
  body.style.color="white";
});
sun.addEventListener("click",()=>{
  navbar.style.backgroundColor="white";
  navbar.style.color="black";
  moon.style.display="block";
  sun.style.display="none";
  trendsection.style.backgroundColor="white";
  trendsection.style.color="black";
  document.body.style.backgroundColor="white";
  body.style.color="black";
});

//search section
const searchbtn=document.querySelector("#search-btn");
searchbtn.addEventListener("click",()=>{
  let title =document.querySelector("#search-box").value;
  console.log(title);
  fetch(`https://api.themoviedb.org/3/search/${type}?query=${title}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then((response) =>{
    console.log(response.results[0]);
    localStorage.setItem("movieId",response.results[0].id);
    let posterurl=`https://image.tmdb.org/t/p/w185/${response.results[0].poster_path}`;
    localStorage.setItem("poster_path",posterurl);
    localStorage.setItem("backdrop_path",response.results[0].backdrop_path);
    localStorage.setItem("title",response.results[0].title);
    localStorage.setItem("overview",response.results[0].overview);
    location.href=`info.html`;
    
  } )
  .catch(err => console.error(err));
})
//making the search button click when someone press enter
var input = document.getElementById("search-box");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

let movie = document.querySelector("#kone");
let tv =document.querySelector("#ktwo");
movie.addEventListener("click",()=>{
  localStorage.type="movie";
  window.location.reload();
})
tv.addEventListener("click",()=>{
  localStorage.type="tv";
  window.location.reload();
})
function addToWatchlist(){
  console.log(localStorage);
}
