"use strict";

const subMenu = document.querySelector(".menu-collapse-container");
const subMenuBox = document.querySelector(".navbarSubShadow");

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

subMenuBox.addEventListener("mouseenter", () => {
  subMenu.classList.toggle("subMenu__mouseenter");
  subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
});

subMenuBox.addEventListener("mouseleave", () => {
  subMenu.classList.toggle("subMenu__mouseenter");
  subMenuBox.classList.toggle("navbarSubShadow__mouseenter");
});
