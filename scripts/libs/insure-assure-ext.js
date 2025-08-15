/* eslint-disable comma-dangle */
/* eslint-disable no-console */
function callFunction() {
  let currentSlide = 0;

  // Function to update the carousel and dots
  function updateCarousel() {
    console.log('Updating carousel to slide:', currentSlide);

    // Update the active class for carousel slides
    document.querySelectorAll('.ia-card').forEach((card, index) => {
      card.classList.toggle('active', index === currentSlide);
    });
    document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    // Update the active class for dots
    const dots = document.querySelectorAll('.pagination-dots .dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Function to show a specific slide
  function showSlide(index) {
    console.log('Navigating to slide:', index);
    currentSlide = index;
    updateCarousel();
  }

  // Function to move to the next slide
  function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Function to move to the previous slide
  function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Function to initialize pagination dots
  function initializePagination() {
    const carouselControls = document.querySelector('p.carousel-controls');
    if (!carouselControls) {
      console.warn('Carousel controls not found!');
      return;
    }

    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides.length) {
      console.warn('No slides found for pagination!');
      return;
    }

    // Create pagination container
    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('pagination-dots');

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        console.log('Dot clicked for slide:', index);
        showSlide(index);
      });
      paginationDiv.appendChild(dot);
    });

    // Insert pagination div
    const pictureTags = carouselControls.querySelectorAll('picture');
    if (pictureTags.length >= 2) {
      pictureTags[0].after(paginationDiv);
    } else {
      console.warn(
        'Expected at least two picture tags inside carousel-controls!'
      );
    }

    // Update the dots initially
    updateCarousel();
  }

  // Initialize carousel and pagination
  initializePagination();

  // Expose global functions
  window.updateCarousel = updateCarousel;
  window.showSlide = showSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
}

callFunction();
