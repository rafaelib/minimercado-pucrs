document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselProdutos");

  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement);

    setInterval(() => {
      carousel.next();
    }, 4000);
  }
});
