window.addEventListener("load", () => {
  document.body.classList.remove("hidden");
});

const flickBtn = document.querySelector(".flick-view");
const flickCard = document.querySelector(".flick-card");

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
  const card = param === "flick" ? flickCard : null;
  const cardClone = card.cloneNode(true);

  // get the location of the card in the view
  const { top, left, width, height } = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = "fixed";
  cardClone.style.top = top + "px";
  cardClone.style.left = left + "px";
  cardClone.style.width = width + "px";
  cardClone.style.height = height + "px";
  cardClone.style.zIndex = "101";

  // add card to the same container
  card.parentNode.appendChild(cardClone);

  // fade the content away
  fadeContent(cardClone, "0").then(() => {
    [...cardClone.children].forEach((child) => (child.style.display = "none"));
  });
  // expand the clone card
  await toggleExpansion(cardClone, {
    top: "30px",
    left: 0,
    width: "100vw",
    height: "calc(100vh - 30px)",
  });

  let child =
    param === "flick"
      ? `<iframe src="https://www.flickarticles.com/"
      ></iframe>`
      : ``;

  const navigation =
    '<nav class=navigation><div class="container"><a class="homepage" href="javascript:;">Back to Portfolio</a></div></nav>';

  const project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = navigation + child;

  document.body.appendChild(project);
  document.body.style.overflow = "hidden";

  const homepageLink = document.querySelectorAll(".homepage");

  homepageLink.forEach((link) => {
    link.addEventListener("click", () => {
      project.remove();
      document.body.style.overflow = "auto";
    });
  });

  return cardClone;
};

flickBtn.addEventListener("click", () => {
  onCardClick("flick").then((cardClone) => {
    setTimeout(() => {
      cardClone.remove();
    }, 500);
  });
});
flickCard.addEventListener("click", () => {
  onCardClick("flick").then((cardClone) => {
    setTimeout(() => {
      cardClone.remove();
    }, 500);
  });
});
