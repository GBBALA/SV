document.addEventListener("DOMContentLoaded", () => {
  const animationArea = document.querySelector('.animation-area');

  // Emojis para estrellas (más variedad)
  const starEmojis = ["⭐", "🌟", "💫", "✨"];

  // Generar estrellas por todo el fondo con emojis aleatorios
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 4}s`;
    animationArea.appendChild(star);
  }

  // Animar emojis dinámicamente (variedad añadida)
  const createElement = (emoji, duration, left) => {
    const element = document.createElement('span');
    element.textContent = emoji;
    element.style.left = `${left}%`;
    element.style.animationDuration = `${duration}s`;
    animationArea.appendChild(element);

    setTimeout(() => animationArea.removeChild(element), duration * 1000);
  };

  setInterval(() => {
    const emojis = ["❤️", "🌸", "🌹", "💜", "⭐", "💞", "💖",];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const duration = Math.random() * 3 + 5;
    const left = Math.random() * 100;
    createElement(emoji, duration, left);
  }, 800);

  // Botón sorpresa
  document.getElementById("surpriseButton").addEventListener("click", () => {
    const messages = [
      "Te quiero mucho mi niña. 💖",
      "Me encantas. 🌟",
      "Sos mi persona favorita en todo el mundo. 🌹",
      "Ya quiero hacer mil cosas con vos. 💕",
      "PESADAAAA",
      "ME HICISTE UN AMARRE VERDAD????",
      "Que ricas piernas mi amooor 💋",
      "rasguñame toda la espalda🔥",
      "tonotaaaa",
      "Me gustas mucho 💕💕",
      "Amo tu risa🖤💚❤",
      "Me encanta abrazarte <3",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);

    // Cambiar color de fondo
    const colors = ["#ff9a9e", "#fad0c4", "#ffdde1", "#fccbcb", "#fff1eb"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  });

  // Botón de música
  document.getElementById("music-button").addEventListener("click", () => {
    const music = document.getElementById("background-music");
    music.play();
    document.getElementById("music-button").style.display = "none";
  });
});
