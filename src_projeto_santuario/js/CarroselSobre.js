let slideIndex = 0;

function moverSlide(direcao) {
  const slide = document.querySelector(".carousel-slide");
  const imagens = slide.querySelectorAll("img");
  const totalSlides = imagens.length;

  slideIndex += direcao;

  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}