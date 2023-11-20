const allHeaderNavItems = document.querySelectorAll(".header__nav-item");
const allSectionToScroll = document.querySelectorAll(".section-to-scroll");
const headerOffcanvas1 = document.querySelector(".header__offcanvas");
const headerOffcanvasBackdrop1 = document.querySelector(".header__offcanvas-backdrop");

allHeaderNavItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (headerOffcanvas1.classList.contains("header__offcanvas_opened")) {
      headerOffcanvas1.classList.remove("header__offcanvas_opened");
      headerOffcanvasBackdrop1.style.visibility = "hidden"
    }
    allSectionToScroll[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
