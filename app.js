const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const content = document.querySelector(".content");
const navList = document.getElementsByTagName("span");

function z() {
  hamburger.addEventListener("click", function() {
    nav.classList.toggle("open");
    content.classList.toggle("shift");
    b();
  });
}
z();

function b() {
  for (let item of navList) {
    item.classList.toggle("change");
  }
}
