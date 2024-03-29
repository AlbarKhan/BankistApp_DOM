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
// console.log(header);
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

// console.log(message.style.backgroundColor);
// console.log(message.style.color);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

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

// nav_link.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = e.target;
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// using delegation
// Add Event listener to a common parent element
// Determine  what  element originated event
nav_links.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  // console.log(id);
  if (e.target.classList.contains("nav__link")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  } else {
    return;
  }
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

const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));

const div = document.querySelector("div");
// console.log(div);
// console.log(div.querySelectorAll(".highlight"));
// console.log(div.childNodes);
// console.log((div.firstElementChild.style.color = "green"));
// console.log((div.lastElementChild.style.backgroundColor = "red"));
// console.log(
//   (div.parentElement.style.backgroundColor = "var(--gradient-secondary)")
// );
// console.log(div.closest());
// div.closest(".header").style.backgroundColor = "var(--color-primary)";

// console.log((div.previousElementSibling.style.color = "purple"));
// console.log(div.nextElementSibling);

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;
  // Active tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Active content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// MENU FADE ANMATION
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// sticky naigationBar
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords.y);
window.addEventListener("scroll", function (e) {
  // console.log(e);
  if (this.window.pageYOffset >= initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Revelaing sections

const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loding Images

const imgtargets = document.querySelectorAll("img[data-src]");
// console.log(imgtargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", (e) => {
    entry.target.classList.remove("lazy-img");
    observer.unobserve(entry.target);
  });
};
const ImageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgtargets.forEach((img) => {
  ImageObserver.observe(img);
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
