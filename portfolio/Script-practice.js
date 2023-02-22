const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector('.navigation-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navigation-link').forEach(function(n) {
n.addEventListener("click", () =>  {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
})})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-110px";
  }
}