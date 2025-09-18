document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // CARRUSEL DE FOTOS
  // =========================
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let counter = 0;

  function updateSlide() {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${counter * slideWidth}px)`;
    slides.style.transition = 'transform 0.6s ease-in-out';

    images.forEach((img, index) => {
      if (index === counter) {
        img.style.transform = 'scale(1.05)';
        img.style.boxShadow = '0 8px 20px rgba(255,110,196,0.5)';
      } else {
        img.style.transform = 'scale(0.95)';
        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      }
    });
  }

  nextButton.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateSlide();
  });

  prevButton.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
  });

  // Swipe táctil
  let startX = 0;
  slides.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  slides.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) nextButton.click();
    if (startX < endX - 50) prevButton.click();
  });

  window.addEventListener('resize', updateSlide);
  updateSlide();

  // =========================
  // REPRODUCCIÓN DE MÚSICA
  // =========================
  const allAudioPlayers = document.querySelectorAll('.song-audio');
  allAudioPlayers.forEach(audioPlayer => {
    audioPlayer.addEventListener('play', () => {
      allAudioPlayers.forEach(otherPlayer => {
        if (otherPlayer !== audioPlayer) {
          otherPlayer.pause();
        }
      });
    });
  });

  // =========================
  // CONTADOR CUMPLEMES
  // =========================
  const timerElement = document.getElementById("timer");

  function updateCountdown() {
    const now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), 16);

    if (now.getDate() >= 16) {
      target = new Date(now.getFullYear(), now.getMonth() + 1, 16);
    }
    
    const diff = target - now;

    if (diff < 0) {
      timerElement.textContent = "¡Feliz Cumplemes! ❤️";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =========================
  // QUIZ MULTIPLE CHOICE
  // =========================
  document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let score = 0;

    const correctAnswers = {
      q1: "d",
      q2: "b",
      q3: "c",
      q4: "b",
      q6: "c",
      q7: "d",
      q8: "a",
      q9: "e",
      q10: "f",
    };

    // Reinicia el estilo de todas las preguntas
    document.querySelectorAll('.pregunta').forEach(pregunta => {
      pregunta.classList.remove('incorrecta');
    });

    const formData = new FormData(this);
    const questions = Object.keys(correctAnswers);

    questions.forEach(questionName => {
      const userAnswer = formData.get(questionName);
      const correctAnswer = correctAnswers[questionName];

      if (userAnswer === correctAnswer) {
        score++;
      } else {
        const preguntaElement = document.querySelector(`[name="${questionName}"]`).closest('.pregunta');
        if (preguntaElement) {
          preguntaElement.classList.add('incorrecta');
        }
      }
    });

    let mensaje = "";
    const totalQuestions = questions.length;
    const porcentaje = (score / totalQuestions) * 100;

    if (porcentaje >= 100) {
      mensaje = "¡NAAA! 💕 Sabés TODO. ¡Nuestro amor es perfecto! 😍";
    } else if (porcentaje >= 75) {
      mensaje = "¡Casi perfecto! ✨ que linda que sos amorcito🥰";
    } else if (porcentaje >= 50) {
      mensaje = "mmmm maso maso pero algo te acordas❤️";
    } else {
      mensaje = "Pero Chanchita! no le pegaste a nada, sho zabia no me amaz 💑";
    }

    document.getElementById("resultadoQuiz").innerHTML = `
      <h3>Resultado: ${score} de ${totalQuestions} respuestas correctas</h3>
      <p>${mensaje}</p>
    `;
  });
});