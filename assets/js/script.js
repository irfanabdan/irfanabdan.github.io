console.clear();

console.log("⚔ Abdan Portfolio Loaded");

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";
blur.style.top=e.clientY+"px";

});
const progress=document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-window.innerHeight;

const current=

window.pageYOffset;

const percent=

(current/total)*100;

progress.style.height=percent+"%";

});
const links=document.querySelectorAll("a,.btn,.btn-outline");

links.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.width="40px";

cursor.style.height="40px";

});

item.addEventListener("mouseleave",()=>{

cursor.style.width="18px";

cursor.style.height="18px";

});

});