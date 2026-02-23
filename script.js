document.addEventListener("DOMContentLoaded", function () 
{
  const items = document.querySelectorAll(".reveal-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("headerSlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; 

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0) {
      dots[slideIndex - 1].classList.add("active");
    }

    setTimeout(showSlides, 3000);
  }

});