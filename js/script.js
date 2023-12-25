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

// Green Sock
gsap.registerPlugin(TextPlugin);
gsap.to(".ket", { duration: 3, text: "Mahasiswa Universitas Pasundan Angkatan 2023" });
gsap.to(".hello", { duration: 1, text: "Hello, There!" });
