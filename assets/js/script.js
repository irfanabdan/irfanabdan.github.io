console.clear();

console.log("⚔ Abdan Portfolio Loaded");

//=========================
// Loader
//=========================

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

//=========================
// Cursor
//=========================

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

});

//=========================
// Scroll Progress
//=========================

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight - window.innerHeight;

    const current = window.scrollY;

    progress.style.height = (current / total) * 100 + "%";

});

//=========================
// Navbar
//=========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

//=========================
// Cursor Hover
//=========================

document.querySelectorAll("a,button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "40px";
        cursor.style.height = "40px";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

});

//=========================
// Skill Animation
//=========================

const skillBars = document.querySelectorAll(".skill-fill");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.dataset.width;

            entry.target.style.width = width;

        }

    });

}, {

    threshold: .5

});

skillBars.forEach(bar => {

    observer.observe(bar);

});

//=========================
// HERO IMAGE TILT
//=========================

const heroImage = document.getElementById("heroImage");

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.clientX)/40;

const y = (window.innerHeight/2 - e.clientY)/40;

heroImage.style.transform =

`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

//=========================
// SCROLL REVEAL
//=========================

const reveals = document.querySelectorAll(
".about,.skills,.projects,.contact"
);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.2
});

reveals.forEach(section=>{

section.classList.add("reveal");

revealObserver.observe(section);

});