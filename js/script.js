// Toggle Menu
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Links Active
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((ele) => ele.classList.remove("active"));
    link.classList.add("active");
  });
});

// GreenSock
gsap.registerPlugin(TextPlugin);
gsap.to(".ket", { duration: 3, text: "I'm studying at Pasundan University" });
gsap.to(".hello", { duration: 1, text: "Hello, There!" });

// slides
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
