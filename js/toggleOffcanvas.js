const headerMenuButton = document.querySelector(".header__menu-button");
const headerOffcanvas = document.querySelector(".header__offcanvas");
const headerOffcanvasBackdrop = document.querySelector(
  ".header__offcanvas-backdrop"
);

headerMenuButton.addEventListener("click", toggleOffcanvas);

headerOffcanvasBackdrop.addEventListener("click", toggleOffcanvas);

function toggleOffcanvas() {
  if (!headerOffcanvas.classList.contains("header__offcanvas_opened")) {
    headerOffcanvas.classList.add("header__offcanvas_opened");
    headerOffcanvasBackdrop.style.visibility = "visible";
    headerOffcanvasBackdrop.style.animation = "reveal .3s ease-in-out forwards";
  } else {
    headerOffcanvas.classList.remove("header__offcanvas_opened");
    headerOffcanvasBackdrop.style.animation = "hide .3s ease-in-out forwards";
    setTimeout(() => {
      headerOffcanvasBackdrop.style.visibility = "hidden";
    }, 2900);
  }
}
