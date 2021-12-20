import "./style.css";

const portfolioCards = document.querySelectorAll(".portfolio-card");

const tolerance = 12;
portfolioCards.forEach((card) => {
  card.addEventListener("mousemove", ({ clientY, clientX }) => {
    const { top, left, width, height } = card.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    if (
      y - tolerance > 0 &&
      y < height - tolerance &&
      x - tolerance > 0 &&
      x < width - tolerance
    ) {
      card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px))`;
    } else {
      card.style.backgroundImage = "none";
    }
  });
});
