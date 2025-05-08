const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const drops = [];
for (let i = 0; i < 500; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    velocity: Math.random() * 4 + 4
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(200, 200, 255, 0.5)";
  ctx.lineWidth = 1;

  for (let drop of drops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.velocity;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

drawRain();

document.addEventListener("DOMContentLoaded", () => {
  const aboutButton = document.querySelector("button:nth-child(1)");
  const projectsButton = document.querySelector("button:nth-child(2)");
  const priceButton = document.querySelector("button:nth-child(3)");

  const aboutSection = document.querySelector(".About");
  const projectsSection = document.querySelector(".projects");
  const priceSection = document.querySelector(".price");

  function hideAllSections() {
    aboutSection.style.display = "none";
    projectsSection.style.display = "none";
    priceSection.style.display = "none";

    aboutSection.classList.remove("animated");
    projectsSection.classList.remove("animated");
    priceSection.classList.remove("animated");
  }

  function toggleSection(section) {
    if (section.style.display === "block" || section.style.display === "grid") {
      section.style.display = "none";
      section.classList.remove("animated");
    } else {
      hideAllSections();
      section.style.display = section === projectsSection ? "grid" : "block";
      section.classList.add("animated");
    }
  }

  hideAllSections();

  aboutButton.addEventListener("click", () => {
    toggleSection(aboutSection);
  });

  projectsButton.addEventListener("click", () => {
    toggleSection(projectsSection);
  });

  priceButton.addEventListener("click", () => {
    toggleSection(priceSection);
  });
});