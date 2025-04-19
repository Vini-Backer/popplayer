document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const clickSound = document.getElementById("click-sound");
  const bgMusic = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    clickSound.currentTime = 0;
    clickSound.play();
  });

  muteBtn.addEventListener("click", () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.textContent = bgMusic.muted ? "🔊" : "🔇";
  });
});