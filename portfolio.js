const aboutBtn = document.querySelector("#about-btn");
const projectsBtn = document.querySelector("#projects-btn");
const contactBtn = document.querySelector("#contact-btn");
const leftSection = document.querySelector(".left");

document.documentElement.classList.remove("hidden");

aboutBtn.addEventListener("click", () => {
  leftSection.style.transform = `translateY(-100%)`;
  addActive(aboutBtn);
});
projectsBtn.addEventListener("click", () => {
  leftSection.style.transform = `translateY(-200%)`;
  addActive(projectsBtn);
});
contactBtn.addEventListener("click", () => {
  leftSection.style.transform = `translateY(-300%)`;
  addActive(contactBtn);
});
const addActive = (element) => {
  switch (element) {
    case aboutBtn:
      aboutBtn.classList.add("active");
      projectsBtn.classList.remove("active");
      contactBtn.classList.remove("active");
      break;
    case projectsBtn:
      aboutBtn.classList.remove("active");
      projectsBtn.classList.add("active");
      contactBtn.classList.remove("active");
      break;
    case contactBtn:
      aboutBtn.classList.remove("active");
      projectsBtn.classList.remove("active");
      contactBtn.classList.add("active");
      break;
  }
};
