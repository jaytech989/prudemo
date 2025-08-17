export default function decorate(block) {
  const ipruHero = block.closest('.ipru-hero'); // ✅ Find the ipru-hero div

  // Wrap slides inside a .cards-wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('cards-wrapper');

  block.parentNode.insertBefore(wrapper, block);
  wrapper.appendChild(block);

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

  // ✅ Append inside .ipru-hero (after .cards-wrapper)
  ipruHero.appendChild(prevBtn);
  ipruHero.appendChild(nextBtn);

  // 🔁 Slide logic
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  showSlide(currentSlide);
}
