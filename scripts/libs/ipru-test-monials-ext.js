const track = document.querySelector('.ipru-test-monials'); // Carousel track
const cards = Array.from(track.children); // All cards
const nextButton = document.querySelector('.right-arrow'); // Next arrow
const prevButton = document.querySelector('.left-arrow'); // Prev arrow
const dotsNav = document.querySelector('.carousel-dots'); // Dot navigation
const dots = Array.from(dotsNav.children); // All dots

const cardWidth = cards[0].getBoundingClientRect().width; // Card width

// Cloning for seamless looping
const firstClone = cards[0].cloneNode(true);
const secondClone = cards[1].cloneNode(true);
const thirdClone = cards[2].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.appendChild(secondClone);
track.appendChild(thirdClone);
track.prepend(lastClone);

// Adjusting initial position
const totalSlides = cards.length + 4; // Original + clones
let currentIndex = 1;
track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

// Update carousel position
// prettier-ignore
function updateCarousel(index, transition = true) {
  if (!transition) track.classList.add('no-transition');
  else track.classList.remove('no-transition');

  track.style.transform = `translateX(-${index * cardWidth}px)`;

  // Update active dot
  dots.forEach((dot, idx) => {
    dot.classList.toggle(
      'active',
      idx === (index - 1 + dots.length) % dots.length,
    );
  });
}

// Next slide
function moveToNext() {
  // eslint-disable-next-line no-plusplus
  currentIndex++;
  updateCarousel(currentIndex);

  if (currentIndex === totalSlides - 3) {
    setTimeout(() => {
      currentIndex = 1;
      updateCarousel(currentIndex, false);
    }, 500);
  }
}

// Previous slide
function moveToPrev() {
  // eslint-disable-next-line no-plusplus
  currentIndex--;
  updateCarousel(currentIndex);

  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = totalSlides - 4;
      updateCarousel(currentIndex, false);
    }, 500);
  }
}

// Event Listeners
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Dot navigation
dotsNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    const targetIndex = dots.findIndex((dot) => dot === e.target);
    currentIndex = targetIndex + 1;
    updateCarousel(currentIndex);
  }
});

// Auto-play functionality
setInterval(moveToNext, 3000);
