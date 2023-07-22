// JavaScript code for the slideshow
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change the slide every 2 seconds (2000 milliseconds)
}

// Start the slideshow when the page loads
window.onload = function () {
  showSlides(); // Corrected the function call
};
