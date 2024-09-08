let currentSlide = 1;
const projectItems = document.querySelectorAll(".projects .item");
const carousel = document.querySelector(".carousel");
const goLeftButton = document.querySelector(".goLeftButton");
const goRightButton = document.querySelector(".goRightButton");

const updateButtonDisplays = (currentSlide) => {
  if (currentSlide === 1) {
    goLeftButton.classList.add("disabled");
  } else {
    goLeftButton.classList.remove("disabled");
  }
  if (currentSlide === projectItems.length) {
    goRightButton.classList.add("disabled");
  } else {
    goRightButton.classList.remove("disabled");
  }
};

goLeftButton.addEventListener("click", () => {
  if (currentSlide > 1) {
    currentSlide--;

    carousel.style.right = `${(currentSlide - 1) * 100}%`;

    updateButtonDisplays(currentSlide);
  }
});

goRightButton.addEventListener("click", () => {
  if (currentSlide < projectItems.length) {
    currentSlide++;

    carousel.style.right = `${(currentSlide - 1) * 100}%`;

    updateButtonDisplays(currentSlide);
  }
});
