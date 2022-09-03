"use strict";

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const headerTopBtn = document.querySelector(".header__top-btn");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    headerTopBtn.classList.toggle("_active");
  });
}
