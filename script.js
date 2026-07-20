const btn = document.getElementById("theme-btn");

btn.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

btn.innerHTML="☀️";

}else{

btn.innerHTML="🌙";

}

}

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.onclick=()=>{

alert("Article bientôt disponible !");

}

});
