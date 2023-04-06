const vacansyModal = document.querySelector(".vacancy_modal");
const vacancyModalBg = document.querySelector(".vacansy_modal_bg");
const vacancyBtn = document.querySelectorAll(".about_driver");
const vacancyOverlay = document.querySelector(".vacancy_overlay");
const vacamcyClose = document.querySelector(".fa-solid");
const checkbox = document.querySelector(".checkbox");
const overlay = document.querySelector(".burger_overlay");
overlay.addEventListener("click", () => {
  checkbox.checked = false;
});
vacancyBtn.forEach((a) => {
  a.addEventListener("click", () => {
    vacancyModalBg.style.visibility = "visible";
    vacancyModalBg.style.opacity = "1";
    vacansyModal.style.transform = "scale(1)";
  });
});
vacancyOverlay.addEventListener("click", () => {
  vacancyModalBg.style.visibility = "hidden";
  vacancyModalBg.style.opacity = "0";
  vacansyModal.style.transform = "scale(0.8)";
});
vacamcyClose.addEventListener("click", () => {
  vacancyModalBg.style.visibility = "hidden";
  vacancyModalBg.style.opacity = "0";
  vacansyModal.style.transform = "scale(0.8)";
});
