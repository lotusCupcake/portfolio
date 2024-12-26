//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Bagian dianggap terlihat ketika setengah dari elemen masuk viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active"); // Tambahkan kelas untuk memicu animasi/transisi
    } else {
      entry.target.classList.remove("active");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
