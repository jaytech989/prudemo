export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'section ipru-promise-container');
  divEl.setAttribute('data-section-status', 'loaded');
  divEl.setAttribute('style', '');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'ipru-promise-wrapper');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'ipru-promise block');
      divEl3.setAttribute('data-block-name', 'ipru-promise');
      divEl3.setAttribute('data-block-status', 'loaded');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'ipru-prom-cards');

          const divEl5 = document.createElement('div');
          divEl5.setAttribute('class', 'prom-card-title');

            const pEl = document.createElement('p');
            pEl.textContent = 'ICICI PRU PROMISE';
          divEl5.append(pEl);

            const h2El = document.createElement('h2');
            h2El.setAttribute('id', 'our-proven-track-record');
            h2El.textContent = 'Our Proven Track Record';
          divEl5.append(h2El);
        divEl4.append(divEl5);

          const divEl6 = document.createElement('div');
          divEl6.setAttribute('class', 'prom-card-data prom-data-1');

            const pEl2 = document.createElement('p');

              const pictureEl = document.createElement('picture');

                const sourceEl = document.createElement('source');
                sourceEl.setAttribute('type', 'image/webp');
                sourceEl.setAttribute('srcset', './media_1717b5258342b47478ce91c3b33cb3b4ca299347e.png?width=2000&format=webply&optimize=medium');
                sourceEl.setAttribute('media', '(min-width: 600px)');
              pictureEl.append(sourceEl);

                const sourceEl2 = document.createElement('source');
                sourceEl2.setAttribute('type', 'image/webp');
                sourceEl2.setAttribute('srcset', './media_1717b5258342b47478ce91c3b33cb3b4ca299347e.png?width=750&format=webply&optimize=medium');
              pictureEl.append(sourceEl2);

                const sourceEl3 = document.createElement('source');
                sourceEl3.setAttribute('type', 'image/png');
                sourceEl3.setAttribute('srcset', './media_1717b5258342b47478ce91c3b33cb3b4ca299347e.png?width=2000&format=png&optimize=medium');
                sourceEl3.setAttribute('media', '(min-width: 600px)');
              pictureEl.append(sourceEl3);

                const imgEl = document.createElement('img');
                imgEl.setAttribute('loading', 'lazy');
                imgEl.setAttribute('alt', '');
                imgEl.setAttribute('src', './media_1717b5258342b47478ce91c3b33cb3b4ca299347e.png?width=750&format=png&optimize=medium');
                imgEl.setAttribute('width', '48');
                imgEl.setAttribute('height', '48');
              pictureEl.append(imgEl);
            pEl2.append(pictureEl);
          divEl6.append(pEl2);

            const h2El2 = document.createElement('h2');
            h2El2.setAttribute('id', '9917');
            h2El2.textContent = '99.17%';
          divEl6.append(h2El2);

            const pEl3 = document.createElement('p');
            pEl3.textContent = 'Claim Settlement Ratio for FY2024';
          divEl6.append(pEl3);
        divEl4.append(divEl6);

          const divEl7 = document.createElement('div');
          divEl7.setAttribute('class', 'prom-card-data prom-data-2');

            const pEl4 = document.createElement('p');

              const pictureEl2 = document.createElement('picture');

                const sourceEl4 = document.createElement('source');
                sourceEl4.setAttribute('type', 'image/webp');
                sourceEl4.setAttribute('srcset', './media_15b4b6ebfc3046d968573b6765764ee96f6028555.png?width=2000&format=webply&optimize=medium');
                sourceEl4.setAttribute('media', '(min-width: 600px)');
              pictureEl2.append(sourceEl4);

                const sourceEl5 = document.createElement('source');
                sourceEl5.setAttribute('type', 'image/webp');
                sourceEl5.setAttribute('srcset', './media_15b4b6ebfc3046d968573b6765764ee96f6028555.png?width=750&format=webply&optimize=medium');
              pictureEl2.append(sourceEl5);

                const sourceEl6 = document.createElement('source');
                sourceEl6.setAttribute('type', 'image/png');
                sourceEl6.setAttribute('srcset', './media_15b4b6ebfc3046d968573b6765764ee96f6028555.png?width=2000&format=png&optimize=medium');
                sourceEl6.setAttribute('media', '(min-width: 600px)');
              pictureEl2.append(sourceEl6);

                const imgEl2 = document.createElement('img');
                imgEl2.setAttribute('loading', 'lazy');
                imgEl2.setAttribute('alt', '');
                imgEl2.setAttribute('src', './media_15b4b6ebfc3046d968573b6765764ee96f6028555.png?width=750&format=png&optimize=medium');
                imgEl2.setAttribute('width', '48');
                imgEl2.setAttribute('height', '48');
              pictureEl2.append(imgEl2);
            pEl4.append(pictureEl2);
          divEl7.append(pEl4);

            const h2El3 = document.createElement('h2');
            h2El3.setAttribute('id', 'crores');
            h2El3.textContent = '40,006 crores';
          divEl7.append(h2El3);

            const pEl5 = document.createElement('p');
            pEl5.textContent = 'Benefits paid till March 31, 2024';
          divEl7.append(pEl5);
        divEl4.append(divEl7);

          const divEl8 = document.createElement('div');
          divEl8.setAttribute('class', 'prom-card-data prom-data-3');

            const pEl6 = document.createElement('p');

              const pictureEl3 = document.createElement('picture');

                const sourceEl7 = document.createElement('source');
                sourceEl7.setAttribute('type', 'image/webp');
                sourceEl7.setAttribute('srcset', './media_10c18437e46a2d14b2c730ce0f206dfc20978441a.png?width=2000&format=webply&optimize=medium');
                sourceEl7.setAttribute('media', '(min-width: 600px)');
              pictureEl3.append(sourceEl7);

                const sourceEl8 = document.createElement('source');
                sourceEl8.setAttribute('type', 'image/webp');
                sourceEl8.setAttribute('srcset', './media_10c18437e46a2d14b2c730ce0f206dfc20978441a.png?width=750&format=webply&optimize=medium');
              pictureEl3.append(sourceEl8);

                const sourceEl9 = document.createElement('source');
                sourceEl9.setAttribute('type', 'image/png');
                sourceEl9.setAttribute('srcset', './media_10c18437e46a2d14b2c730ce0f206dfc20978441a.png?width=2000&format=png&optimize=medium');
                sourceEl9.setAttribute('media', '(min-width: 600px)');
              pictureEl3.append(sourceEl9);

                const imgEl3 = document.createElement('img');
                imgEl3.setAttribute('loading', 'lazy');
                imgEl3.setAttribute('alt', '');
                imgEl3.setAttribute('src', './media_10c18437e46a2d14b2c730ce0f206dfc20978441a.png?width=750&format=png&optimize=medium');
                imgEl3.setAttribute('width', '42');
                imgEl3.setAttribute('height', '42');
              pictureEl3.append(imgEl3);
            pEl6.append(pictureEl3);
          divEl8.append(pEl6);

            const h2El4 = document.createElement('h2');
            h2El4.setAttribute('id', '-29-lakh-crore');
            h2El4.textContent = '₹ 2.9 lakh crore';
          divEl8.append(h2El4);

            const pEl7 = document.createElement('p');
            pEl7.textContent = 'Assets Under Management as on March 31, 2024';
          divEl8.append(pEl7);
        divEl4.append(divEl8);

          const divEl9 = document.createElement('div');
          divEl9.setAttribute('class', 'prom-card-data prom-data-4');

            const pEl8 = document.createElement('p');

              const pictureEl4 = document.createElement('picture');

                const sourceEl10 = document.createElement('source');
                sourceEl10.setAttribute('type', 'image/webp');
                sourceEl10.setAttribute('srcset', './media_126a6d63d8f9788e7e8d6746144f38465a8db7299.png?width=2000&format=webply&optimize=medium');
                sourceEl10.setAttribute('media', '(min-width: 600px)');
              pictureEl4.append(sourceEl10);

                const sourceEl11 = document.createElement('source');
                sourceEl11.setAttribute('type', 'image/webp');
                sourceEl11.setAttribute('srcset', './media_126a6d63d8f9788e7e8d6746144f38465a8db7299.png?width=750&format=webply&optimize=medium');
              pictureEl4.append(sourceEl11);

                const sourceEl12 = document.createElement('source');
                sourceEl12.setAttribute('type', 'image/png');
                sourceEl12.setAttribute('srcset', './media_126a6d63d8f9788e7e8d6746144f38465a8db7299.png?width=2000&format=png&optimize=medium');
                sourceEl12.setAttribute('media', '(min-width: 600px)');
              pictureEl4.append(sourceEl12);

                const imgEl4 = document.createElement('img');
                imgEl4.setAttribute('loading', 'lazy');
                imgEl4.setAttribute('alt', '');
                imgEl4.setAttribute('src', './media_126a6d63d8f9788e7e8d6746144f38465a8db7299.png?width=750&format=png&optimize=medium');
                imgEl4.setAttribute('width', '42');
                imgEl4.setAttribute('height', '42');
              pictureEl4.append(imgEl4);
            pEl8.append(pictureEl4);
          divEl9.append(pEl8);

            const h2El5 = document.createElement('h2');
            h2El5.setAttribute('id', 'crores-1');
            h2El5.textContent = '9.69 crores';
          divEl9.append(h2El5);

            const pEl9 = document.createElement('p');
            pEl9.textContent = 'Lives Covered as on March 31, 2024';
          divEl9.append(pEl9);
        divEl4.append(divEl9);
      divEl3.append(divEl4);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}