import "./style.css";

const portfolioCards = document.querySelectorAll(".portfolio-card");

const hoverHandler = (card, e) => {
  const isTouch = ["touchstart", "touchmove"].includes(e.type);
  const { clientY, clientX } = isTouch ? e.touches[0] : e;

  const { top, left } = card.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;

  card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px))`;
};

const endHandler = (card, e) => (card.style.backgroundImage = "none");

portfolioCards.forEach((card) => {
  card.addEventListener("mousemove", hoverHandler.bind(this, card));
  card.addEventListener("touchmove", hoverHandler.bind(this, card));

  card.addEventListener("mouseout", endHandler.bind(this, card));
  card.addEventListener("touchend", endHandler.bind(this, card));
});
