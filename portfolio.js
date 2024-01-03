window.addEventListener("load", () => {
  document.body.classList.remove("hidden");
});

const amazonBtn = document.querySelector(".amazon-view");
const amazonCard = document.querySelector(".amazon-card");
const vortexBtn = document.querySelector(".vortex-view");
const vortexCard = document.querySelector(".vortex-card");

const toggleExpansion = (element, to, duration = 350) => {
  return new Promise((res) => {
    element.animate(
      [
        {
          top: to.top,
          left: to.left,
          width: to.width,
          height: to.height,
        },
      ],
      { duration, fill: "forwards", ease: "ease-in" }
    );
    setTimeout(res, duration);
  });
};

const fadeContent = (element, opacity, duration = 300) => {
  return new Promise((res) => {
    [...element.children].forEach((child) => {
      requestAnimationFrame(() => {
        child.style.transition = `opacity ${duration}ms linear`;
        child.style.opacity = opacity;
      });
    });
    setTimeout(res, duration);
  });
};

const onCardClick = async (param) => {
  const card = param === "amazon" ? amazonCard : vortexCard;
  const cardClone = card.cloneNode(true);

  // get the location of the card in the view
  const { top, left, width, height } = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = "fixed";
  cardClone.style.top = top + "px";
  cardClone.style.left = left + "px";
  cardClone.style.width = width + "px";
  cardClone.style.height = height + "px";
  // hide the original card with opacity
  card.style.opacity = "0";
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // fade the content away
  fadeContent(cardClone, "0").then(() => {
    [...cardClone.children].forEach((child) => (child.style.display = "none"));
  });
  // expand the clone card
  await toggleExpansion(cardClone, {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  });
  window.location.href =
    param === "amazon"
      ? "Projects/javascript-amazon-project/amazon.html"
      : "https://mrsevim.github.io/Vortex/homepage";
};

amazonBtn.addEventListener("click", () => {
  onCardClick("amazon");
});
amazonCard.addEventListener("click", () => {
  onCardClick("amazon");
});
vortexBtn.addEventListener("click", () => {
  onCardClick("vortex");
});
vortexCard.addEventListener("click", () => {
  onCardClick("vortex");
});
