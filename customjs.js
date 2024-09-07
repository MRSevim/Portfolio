let currentSlide = 1;
const projectItems = document.querySelectorAll(".projects .item");
const goUpButton = document.querySelector(".goUpButton");
const goDownButton = document.querySelector(".goDownButton");

const updateButtonDisplays = (currentSlide) => {
  if (currentSlide === 1) {
    goUpButton.classList.add("disabled");
  } else {
    goUpButton.classList.remove("disabled");
  }
  if (currentSlide === projectItems.length) {
    goDownButton.classList.add("disabled");
  } else {
    goDownButton.classList.remove("disabled");
  }
};

goUpButton.addEventListener("click", () => {
  if (currentSlide > 1) {
    currentSlide--;

    projectItems[currentSlide - 1].classList.remove("hidden");
    projectItems[currentSlide].classList.add("hidden");

    updateButtonDisplays(currentSlide);
  }
});

goDownButton.addEventListener("click", () => {
  if (currentSlide < projectItems.length) {
    currentSlide++;
    console.log(currentSlide);
    projectItems[currentSlide - 1].classList.remove("hidden");
    projectItems[currentSlide - 2].classList.add("hidden");

    updateButtonDisplays(currentSlide);
  }
});
