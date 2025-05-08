// Анимация дождя
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

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

// Логика переключения вкладок
document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.querySelector(".btn-about");
  const projectsBtn = document.querySelector(".btn-projects");
  const pricingBtn = document.querySelector(".btn-pricing");

  const aboutContent = document.querySelector(".about-content");
  const projectsContent = document.querySelector(".projects-content");
  const pricingContent = document.querySelector(".pricing-content");

  function hideAll() {
    aboutContent.classList.remove("active");
    projectsContent.classList.remove("active");
    pricingContent.classList.remove("active");
  }

  aboutBtn.addEventListener("click", () => {
    hideAll();
    aboutContent.classList.add("active");
  });

  projectsBtn.addEventListener("click", () => {
    hideAll();
    projectsContent.classList.add("active");
  });

  pricingBtn.addEventListener("click", () => {
    hideAll();
    pricingContent.classList.add("active");
  });

  // По умолчанию показываем About
  hideAll();
  aboutContent.classList.add("active");
});