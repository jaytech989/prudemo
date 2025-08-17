export default function decorate(block) {
  // Wrap slides inside a .cards-wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('cards-wrapper');

  // Move the block (which holds .ipru-hero-slide children) inside wrapper
  block.parentNode.insertBefore(wrapper, block);
  wrapper.appendChild(block);

  // Add class to block for slide container styling
  block.classList.add('cards');

  // Process slides and content
  const slides = [...block.children];
  slides.forEach((row, r) => {
    row.classList.add('ipru-hero-slide', `hero-slide-${r + 1}`);
    if (r === 0) row.classList.add('active');

    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('slide-body');
        const img = div.querySelector('img');
        if (img) {
          // Optional: set background
          // div.style.backgroundImage = `url(${img.src})`;
          // img.remove();
        }
        const pTag = div.querySelector(':scope > p:first-child');
        if (pTag) pTag.remove();
        
      }
      const phead = div.querySelector('p');
      if (phead) phead.classList.add('hero-cta');

    });
  });

  // ➕ Create navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'prev';
  prevBtn.textContent = '❮';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next';
  nextBtn.textContent = '❯';

  wrapper.appendChild(prevBtn);
  wrapper.appendChild(nextBtn);

  // 🔁 Slide logic
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
    block.style.width = `${100 * totalSlides}%`;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  // Initial draw
  showSlide(currentSlide);
}

// export default function decorate(block) {
//   // Create wrapper
//   const wrapper = document.createElement('div');
//   wrapper.classList.add('cards-wrapper');

//   // Add slide container class
//   block.classList.add('cards');

//   // Move block inside wrapper
//   block.parentNode.insertBefore(wrapper, block);
//   wrapper.appendChild(block);

//   const slides = [...block.children];
//   slides.forEach((row, r) => {
//     row.classList.add('ipru-hero-slide', `hero-slide-${r + 1}`);
//     if (r === 0) row.classList.add('active');

//     [...row.children].forEach((div, d) => {
//       if (d === 0) {
//         div.classList.add('slide-body');
//         const pTag = div.querySelector(':scope > p:first-child');
//         if (pTag) pTag.remove();

//         const cta = div.querySelector('p');
//         if (cta) {
//           cta.classList.add('hero-cta');
//         }
//       }
//     });
//   });

//   // Create prev/next buttons
//   const prevBtn = document.createElement('button');
//   prevBtn.className = 'prev';
//   prevBtn.textContent = '❮';

//   const nextBtn = document.createElement('button');
//   nextBtn.className = 'next';
//   nextBtn.textContent = '❯';

//   wrapper.appendChild(prevBtn);
//   wrapper.appendChild(nextBtn);

//   // Carousel logic
//   let currentSlide = 0;
//   const totalSlides = slides.length;

//   function showSlide(index) {
//     if (index < 0) index = totalSlides - 1;
//     if (index >= totalSlides) index = 0;
//     currentSlide = index;
//     block.style.transform = `translateX(-${index * 100}%)`;
//   }

//   prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
//   nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

//   // Initialize
//   showSlide(currentSlide);
// }
