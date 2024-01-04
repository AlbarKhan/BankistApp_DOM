"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--open-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);

// selecting element
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const allSection = document.querySelectorAll(".section");
// console.log(allSection);

const allButton = document.getElementsByTagName("button");
const header = document.querySelector(".header");
console.log(header);
const message = document.createElement("div");
message.className = "cookie-message";
message.innerHTML = `we use cookies  for improved functionality and analytics <button class="btn btn--close-cookie">Got it !</button>`;

header.prepend(message);
// header.append(message);
header.after(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function (e) {
    message.remove();
    // message.parentElement.removeChild(message)  old way
  });

message.style.backgroundColor = "#37383d";

console.log(message.style.backgroundColor);
console.log(message.style.color);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

const updatesheight = (message.style.height = `${
  40 + Number.parseInt(getComputedStyle(message).height)
}px`);

// document.documentElement.style.setProperty("--color-primary", "orangered");
// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.getAttribute("src")); // if the image is stored on the device it will show it's path
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("company"));

// console.log(logo.dataset.versionNumber);

const btnScollto = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

btnScollto.addEventListener("click", function (e) {
  const s1Cords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log(window.pageXOffset, window.pageYOffset);
  // old way
  // window.scrollTo({
  //   left: s1Cords.left,
  //   top: s1Cords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // NEW WAY
  // modern way  the function works in only  modern browser
  section1.scrollIntoView({ behavior: "smooth" });
});

// TWO ways to to implement eventHandler
const highlight = document.querySelector(".highlight");
highlight.addEventListener("keypress", function (e) {
  // if (e.key == 13) {
  //   lert("checking");
  // }
});

const onclick = function () {
  console.log("second way");
};
// event bubling
const nav = document.querySelector(".nav");
const nav_links = document.querySelector(".nav__links");
const nav_link = document.querySelectorAll(".nav__link");

nav_link.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target;
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const randint = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// nav.addEventListener("click", function (e) {
//   nav.style.backgroundColor = `rgba(${randint(0, 255)},${randint(
//     0,
//     255
//   )},${randint(0, 255)})`;
//   console.log(e.target);
// });

// nav_links.addEventListener("click", function (e) {
//   nav_links.style.backgroundColor = `rgba(${randint(0, 255)},${randint(
//     0,
//     255
//   )},${randint(0, 255)})`;
//   console.log(e.target);
//   // console.log("nav_link");
// });
// nav_link.addEventListener("click", function (e) {
//   nav_link.style.backgroundColor = `rgba(${randint(0, 255)},${randint(
//     0,
//     255
//   )},${randint(0, 255)})`;
//   console.log(e.target);
//   // console.log("nav_link");
// });
