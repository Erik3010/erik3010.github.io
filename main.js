import "./style.css";

const portfolioCards = document.querySelectorAll(".portfolio-card");
portfolioCards.forEach((card) => {
  card.addEventListener("mousemove", ({ clientY, clientX }) => {
    const { top, left } = card.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px))`;
  });

  card.addEventListener(
    "mouseout",
    () => (card.style.backgroundImage = "none")
  );
});
