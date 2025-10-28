document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");
  subjects.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
  });
});
