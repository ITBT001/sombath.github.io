const menuBtn = document.getElementById("icon-bar");
const navLinks = document.getElementById("menu-header");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".telegram", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".image-product",{
  ...scrollRevealOption,
  interval:500,
});