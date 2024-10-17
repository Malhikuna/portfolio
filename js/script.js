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
let slide1Index = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("slides1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slide1Index++;
  if (slide1Index > slides1.length) {
    slide1Index = 1;
  }
  slides1[slide1Index - 1].style.display = "block";
  setTimeout(showSlides1, 2500);
}

let slide2Index = 0;
showSlides2();

function showSlides2() {
  let y;
  let slides2 = document.getElementsByClassName("slides2");
  for (y = 0; y < slides2.length; y++) {
    slides2[y].style.display = "none";
  }
  slide2Index++;
  if (slide2Index > slides2.length) {
    slide2Index = 1;
  }
  slides2[slide2Index - 1].style.display = "block";
  setTimeout(showSlides2, 2500);
}
