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
