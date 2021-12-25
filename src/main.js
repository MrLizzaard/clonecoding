"use strict";

const subMenu = document.querySelector(".menu-collapse-container");
const subMenuBox = document.querySelector(".navbarSubShadow");
const subMenuContainer = document.querySelector(".subMenuContainer");
const navbar = document.querySelector("nav");

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("subMenu__mouseenter");
    subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
  });
  item.addEventListener("mouseleave", () => {
    subMenu.classList.toggle("subMenu__mouseenter");
    subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
  });
});

subMenuContainer.addEventListener("mouseenter", () => {
  subMenu.classList.toggle("subMenu__mouseenter");
  subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
});

subMenuContainer.addEventListener("mouseleave", () => {
  subMenu.classList.toggle("subMenu__mouseenter");
  subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
});

document.querySelector(".navbar__hamburgur").addEventListener("click", () => {
  navbar.classList.toggle("hamburgur__click");
});
