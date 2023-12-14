const aboutBtn = document.querySelector("#about-btn");
const projectsBtn = document.querySelector("#projects-btn");
const contactBtn = document.querySelector("#contact-btn");
const leftSection = document.querySelector(".left");

const arr = [aboutBtn, projectsBtn, contactBtn];
i = 0;

aboutBtn.addEventListener("click", () => {
  i = arr.indexOf(aboutBtn) + 1;
  leftSection.style.transform = `translateY(-${i * 100}%)`;
  addActive(aboutBtn, arr);
});
projectsBtn.addEventListener("click", () => {
  i = arr.indexOf(projectsBtn) + 1;
  leftSection.style.transform = `translateY(-${i * 100}%)`;
  addActive(projectsBtn, arr);
});
contactBtn.addEventListener("click", () => {
  i = arr.indexOf(contactBtn) + 1;
  leftSection.style.transform = `translateY(-${i * 100}%)`;
  addActive(contactBtn, arr);
});

document.body.addEventListener("wheel", (event) => {
  if (0 <= i) {
    if (event.deltaY === 100 && i < arr.length) {
      i++;
      addActive(arr[i - 1], arr);
      leftSection.style.transform = `translateY(-${i * 100}%)`;
    }
    if (event.deltaY === -100 && 0 < i) {
      i--;
      addActive(arr[i - 1], arr);
      leftSection.style.transform = `translateY(-${i * 100}%)`;
    }
    if (i === 0) {
      arr[i].classList.remove("active");
    }
  }
});

const addActive = (element, array) => {
  if (element) {
    element.classList.add("active");
    array.forEach((item) => {
      if (item !== element) {
        item.classList.remove("active");
      }
    });
  } else {
    array.forEach((item) => {
      item.classList.remove("active");
    });
  }
};

//Apply iframe when hovered
const links = document.querySelectorAll(".project-link");
links.forEach((link) => {
  const iframe = document.createElement("iframe");
  iframe.src = link.href;
  iframe.style.height = "400px";
  iframe.style.width = "600px";
  iframe.style.backgroundColor = "white";

  const parent = document.createElement("div");
  parent.style.width = "600px";
  parent.style.height = "400px";
  parent.classList.add("visible-when-hovered");
  parent.appendChild(iframe);

  link.appendChild(parent);
});
