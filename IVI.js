document.addEventListener("DOMContentLoaded", () => {
  const animationArea = document.querySelector('.animation-area');
  const starEmojis = ["⭐", "🌟", "💫", "✨"];
  const heartEmojis = ["❤️", "💖", "💞"];
  const flowerEmojis = ["🌸", "🌹", "🌼"];
  const allEmojis = [...starEmojis, ...heartEmojis, ...flowerEmojis];

  for (let i = 0; i < 70; i++) {
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    emojiSpan.style.left = `${Math.random() * 100}%`;
    emojiSpan.style.top = `${Math.random() * 100}%`;
    emojiSpan.style.animationDuration = `${Math.random() * 4 + 5}s`;
    emojiSpan.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
    animationArea.appendChild(emojiSpan);
  }

  setInterval(() => {
    const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    const duration = Math.random() * 3 + 4;
    const left = Math.random() * 100;
    const size = Math.random() * 1 + 1;

    const element = document.createElement('span');
    element.textContent = randomEmoji;
    element.style.left = `${left}%`;
    element.style.fontSize = `${size}rem`;
    element.style.animationDuration = `${duration}s`;
    animationArea.appendChild(element);
    setTimeout(() => animationArea.removeChild(element), duration * 1000);
  }, 600);

  document.getElementById("surpriseButton").addEventListener("click", () => {
    const messages = [
      "te amo ✨",
      "sos mi persona favorita",
      "Mi amor por vos crece cada día ❤️",
      "Gracias por existir en mi mundo 🌍",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
  });

  document.getElementById("music-button").addEventListener("click", () => {
    const music = document.getElementById("background-music");
    music.play();
    document.getElementById("music-button").style.display = "none";
  });

  // **CARRUSEL CON DESLIZAMIENTO TÁCTIL**
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const images = document.querySelectorAll('.slides img');
  let counter = 0;
  let slideWidth;
  let touchStartX = 0;
  let touchEndX = 0;

  function updateSlideWidth() {
    slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${counter * slideWidth}px)`;
  }

  window.addEventListener('resize', updateSlideWidth);
  updateSlideWidth();

  function goToSlide(slideIndex) {
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    counter = slideIndex;
  }

  nextButton.addEventListener('click', () => {
    counter++;
    if (counter >= images.length) {
      counter = 0;
    }
    goToSlide(counter);
  });

  prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
      counter = images.length - 1;
    }
    goToSlide(counter);
  });

  // Eventos táctiles
  slides.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  slides.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // Umbral para considerar un deslizamiento

    if (touchStartX - touchEndX > swipeThreshold) {
      // Deslizamiento hacia la izquierda (ir a la siguiente imagen)
      nextButton.click();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Deslizamiento hacia la derecha (ir a la imagen anterior)
      prevButton.click();
    }
    touchStartX = 0;
    touchEndX = 0;
  }

  goToSlide(0);

  // CONTADOR DE CUMPLEMES
  const timerElement = document.getElementById("timer");

  function updateCountdown() {
    const now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), 25);

    if (now.getDate() > 25) {
      target.setMonth(now.getMonth() + 1);
    }

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#ff6ec4", "#ff4f81", "#ff7851", "#ffd24d", "#ae7eb2"]
      },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" }
      },
      "opacity": {
        "value": 0.7,
        "random": true,
      },
      "size": {
        "value": 6,
        "random": true,
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "bubble" },
        "onclick": { "enable": true, "mode": "repulse" }
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "size": 8,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });
});