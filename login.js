let inputs=document.querySelectorAll(".container input");
let inputLabel=document.querySelector("#emailLabel");
let passwordLabel=document.querySelector("#passwordLabel");
const password = document.querySelector("#password")

inputs.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.id=="email"){
            inputLabel.style.fontSize="12px";
            inputLabel.style.top="189px";
        }
        else{
            passwordLabel.style.fontSize="12px";
            passwordLabel.style.top="256px";
        }
    })
});
const seeBtn = document.querySelector("#seeButton");
const hideBtn = document.querySelector("#hideButton");
const icon = document.querySelector(".container i");
console.log(icon);
seeBtn.addEventListener("click",()=>{
        password.type="text";
        hideBtn.style.visibility="visible";
        seeBtn.style.visibility="hidden";
});
hideBtn.addEventListener("click",()=>{
    password.type="password";
    hideBtn.style.visibility="hidden";
    seeBtn.style.visibility="visible";
});




var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("loginbtn").click();
  }
});

localStorage.setItem("type","all");