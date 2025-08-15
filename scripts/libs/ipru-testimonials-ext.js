// prettier-ignore
function loadExternalResources(resources) {
  return Promise.all(
    resources.map(
      (resource) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve, reject) => {
          let element;

          if (resource.type === 'script') {
            element = document.createElement('script');
            element.src = resource.src;
            // element.async = true;
            element.onload = resolve;
            element.onerror = reject;
          } else if (resource.type === 'link') {
            element = document.createElement('link');
            element.href = resource.href;
            element.rel = 'stylesheet';
            element.onload = resolve;
            element.onerror = reject;
          }

          document.head.appendChild(element);
        }),
    ),
  );
}

// prettier-ignore
loadExternalResources([
  {
    type: 'script',
    src: 'https://www.research360.in/dist/js/jquery-3.7.1.min.js',
  },
]).then(() => {
  loadExternalResources([
    {
      type: 'script',
      src: 'https://www.research360.in/dist/js/owl.carousel-min.js',
    },
    {
      type: 'link',
      href: 'https://www.research360.in/dist/style/carousel.min.css',
    },
  ]).then(() => {
    setTimeout(() => {
      try {
        // eslint-disable-next-line no-undef
        $(
          '.ipru-testimonials-wrapper .table-main .table-main-tbody',
        ).owlCarousel({
          loop: true,
          margin: 15,
          autoHeight: true,
          // dots: false,
          nav: true,
          responsiveClass: true,
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        });
      } catch (error) {
        // console.log(error.message);
      }
    }, 0);
  });
});

loadExternalResources();
