let body = document.querySelector("body");
const responsive = document.querySelector('div#responsive');

/* NAVIGATION SCRIPT CODE */
let logo = document.getElementsByClassName("logo")[0];
let menu = document.getElementsByClassName("menu")[0];
let hambuger = document.getElementById("hambuger");

menu.addEventListener('click', ()=>{

    if (responsive.style.display == "none")
    {
        hambuger.src = "./images/icon-close.svg";
        responsive.style.display = "block";
    }
    else
    {
        hambuger.src = "./images/icon-hamburger.svg";
        responsive.style.display = "none";
    }
});

/* slideshow code */
let slides = document.getElementsByClassName("testimonials-card");

let default_side = 0;

for (let slide_item = 0; slide_item < slides.length; slide_item++)
{
    slides[slide_item].style.display = "none";
}

slides[default_side].style.display = "block";

function slide(position)
{
    
    if (slides.length != 0)
    {
        for (let slide_item = 0; slide_item < slides.length; slide_item++)
        {
            slides[slide_item].style.display = "none";
        }
    }
    changeslide(position);
}

function changeslide(position)
{
    slides[position].style.display = "block";
}
