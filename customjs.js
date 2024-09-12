const projectItems = document.querySelectorAll(".projects .item");
const carousel = document.querySelector(".carousel");
const projectsList = document.querySelectorAll(".projects-list .list-item");

projectsList.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    projectsList.forEach((item) => item.classList.remove("active"));

    const index = Array.prototype.indexOf.call(projectsList, listItem);

    carousel.style.right = `${index * 100}%`;

    listItem.classList.add("active");
  });
});
