const projectItems = document.querySelectorAll(".projects .item");

function checkItemsInView() {
  projectItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the item is in the viewport (with a margin of 100px before it enters the viewport)
    if (rect.top < windowHeight - 100) {
      item.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(checkItemsInView);
});
