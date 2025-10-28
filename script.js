// Glowing background particle animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}
createParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// Typing effect for home
const typingText = document.getElementById("typing-text");
if (typingText) {
  const text = "Hi, I'm Praveen Reddy 👋";
  let index = 0;
  function type() {
    typingText.textContent = text.slice(0, index++);
    if (index <= text.length) {
      setTimeout(type, 100);
    } else {
      setTimeout(() => { index = 0; type(); }, 2000);
    }
  }
  type();
}
// 🌟 Animate subject cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".subject-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`; // slight delay for each
    observer.observe(card);
  });
});
