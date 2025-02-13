document.addEventListener("DOMContentLoaded", () => {
  const animationArea = document.querySelector('.animation-area');

  // Generar estrellas por todo el fondo
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.textContent = "⭐";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 4}s`;
    animationArea.appendChild(star);
  }

  // Animar emojis dinámicamente
  const createElement = (emoji, duration, left) => {
    const element = document.createElement('span');
    element.textContent = emoji;
    element.style.left = `${left}%`;
    element.style.animationDuration = `${duration}s`;
    animationArea.appendChild(element);

    setTimeout(() => animationArea.removeChild(element), duration * 1000);
  };

  setInterval(() => {
    const emojis = ["❤️", "🌸", "✨", "🌹", "💜", "⭐"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const duration = Math.random() * 3 + 5;
    const left = Math.random() * 100;
    createElement(emoji, duration, left);
  }, 800);

  // Mensajes sorpresa al presionar el botón
  document.getElementById("surpriseButton").addEventListener("click", () => {
    const messages = [
      "Te quiero mucho mi niña. 💖",
      "Me encantas. 🌟",
      "Sos mi persona favorita en todo el mundo. 🌹",
      "Ya quiero hacer mil cosas con vos. 💕"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);

    // Cambiar color de fondo
    const colors = ["#ff9a9e", "#fad0c4", "#ffdde1", "#fccbcb"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  });
  
  // Botón de música
  document.getElementById("music-button").addEventListener("click", () => {
    const music = document.getElementById("background-music");
    music.play();  // Reproducir la música cuando se hace clic en el botón
    document.getElementById("music-button").style.display = "none";  // Ocultar el botón después de hacer clic
  });
});
