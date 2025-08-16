export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'section ipru-insure-assure-container');
  divEl.setAttribute('data-section-status', 'loaded');
  divEl.setAttribute('style', '');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'ipru-insure-assure-wrapper');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'ipru-insure-assure block');
      divEl3.setAttribute('data-block-name', 'ipru-insure-assure');
      divEl3.setAttribute('data-block-status', 'loaded');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'insure-assure-heading');

          const divEl5 = document.createElement('div');

            const pEl = document.createElement('p');
            pEl.setAttribute('class', 'para-1');
            pEl.textContent = 'INSURANCE WITH ASSURANCE';
          divEl5.append(pEl);

            const h2El = document.createElement('h2');
            h2El.setAttribute('id', 'breaking-down-insurance-complexities');
            h2El.textContent = 'Breaking down insurance complexities';
          divEl5.append(h2El);

            const pEl2 = document.createElement('p');
            pEl2.setAttribute('class', 'para-2');
            pEl2.textContent = 'Life insurance is a contract between an insurance policyholder and an insurance company, where the insurer promises to pay a sum of money in exchange for a premium after a set period or upon the death of an insured person. Life insurance offers you and…';
          divEl5.append(pEl2);

            const pEl3 = document.createElement('p');
            pEl3.setAttribute('class', 'button-container para-3');

              const aEl = document.createElement('a');
              aEl.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
              aEl.setAttribute('title', 'Read more');
              aEl.setAttribute('class', 'button');
              aEl.textContent = 'Read more';
            pEl3.append(aEl);
          divEl5.append(pEl3);
        divEl4.append(divEl5);
      divEl3.append(divEl4);

        const divEl6 = document.createElement('div');
        divEl6.setAttribute('class', 'insure-assure-body');

          const divEl7 = document.createElement('div');
          divEl7.setAttribute('class', 'left-card');

            const pEl4 = document.createElement('p');
            pEl4.textContent = 'What are the benefits of buying a life insurance plan?';
          divEl7.append(pEl4);

            const tableEl = document.createElement('table');
            tableEl.setAttribute('class', 'grid-table');

              const tbodyEl = document.createElement('tbody');

                const trEl = document.createElement('tr');

                  const tdEl = document.createElement('td');
                  tdEl.setAttribute('class', 'active ia-card');
                  tdEl.setAttribute('onclick', 'showSlide(0)');

                    const pEl5 = document.createElement('p');

                      const pictureEl = document.createElement('picture');

                        const sourceEl = document.createElement('source');
                        sourceEl.setAttribute('type', 'image/webp');
                        sourceEl.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=2000&format=webply&optimize=medium');
                        sourceEl.setAttribute('media', '(min-width: 600px)');
                      pictureEl.append(sourceEl);

                        const sourceEl2 = document.createElement('source');
                        sourceEl2.setAttribute('type', 'image/webp');
                        sourceEl2.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=750&format=webply&optimize=medium');
                      pictureEl.append(sourceEl2);

                        const sourceEl3 = document.createElement('source');
                        sourceEl3.setAttribute('type', 'image/png');
                        sourceEl3.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=2000&format=png&optimize=medium');
                        sourceEl3.setAttribute('media', '(min-width: 600px)');
                      pictureEl.append(sourceEl3);

                        const imgEl = document.createElement('img');
                        imgEl.setAttribute('loading', 'lazy');
                        imgEl.setAttribute('alt', '');
                        imgEl.setAttribute('src', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=750&format=png&optimize=medium');
                        imgEl.setAttribute('width', '22');
                        imgEl.setAttribute('height', '21');
                      pictureEl.append(imgEl);
                    pEl5.append(pictureEl);
                  tdEl.append(pEl5);

                    const pEl6 = document.createElement('p');
                    pEl6.textContent = 'Financial Security';
                  tdEl.append(pEl6);
                trEl.append(tdEl);

                  const tdEl2 = document.createElement('td');
                  tdEl2.setAttribute('class', 'ia-card');
                  tdEl2.setAttribute('onclick', 'showSlide(1)');

                    const pEl7 = document.createElement('p');

                      const pictureEl2 = document.createElement('picture');

                        const sourceEl4 = document.createElement('source');
                        sourceEl4.setAttribute('type', 'image/webp');
                        sourceEl4.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=2000&format=webply&optimize=medium');
                        sourceEl4.setAttribute('media', '(min-width: 600px)');
                      pictureEl2.append(sourceEl4);

                        const sourceEl5 = document.createElement('source');
                        sourceEl5.setAttribute('type', 'image/webp');
                        sourceEl5.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=750&format=webply&optimize=medium');
                      pictureEl2.append(sourceEl5);

                        const sourceEl6 = document.createElement('source');
                        sourceEl6.setAttribute('type', 'image/png');
                        sourceEl6.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=2000&format=png&optimize=medium');
                        sourceEl6.setAttribute('media', '(min-width: 600px)');
                      pictureEl2.append(sourceEl6);

                        const imgEl2 = document.createElement('img');
                        imgEl2.setAttribute('loading', 'lazy');
                        imgEl2.setAttribute('alt', '');
                        imgEl2.setAttribute('src', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=750&format=png&optimize=medium');
                        imgEl2.setAttribute('width', '22');
                        imgEl2.setAttribute('height', '22');
                      pictureEl2.append(imgEl2);
                    pEl7.append(pictureEl2);
                  tdEl2.append(pEl7);

                    const pEl8 = document.createElement('p');
                    pEl8.textContent = 'Wealth Creation';
                  tdEl2.append(pEl8);
                trEl.append(tdEl2);

                  const tdEl3 = document.createElement('td');
                  tdEl3.setAttribute('class', 'ia-card');
                  tdEl3.setAttribute('onclick', 'showSlide(2)');

                    const pEl9 = document.createElement('p');

                      const pictureEl3 = document.createElement('picture');

                        const sourceEl7 = document.createElement('source');
                        sourceEl7.setAttribute('type', 'image/webp');
                        sourceEl7.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=2000&format=webply&optimize=medium');
                        sourceEl7.setAttribute('media', '(min-width: 600px)');
                      pictureEl3.append(sourceEl7);

                        const sourceEl8 = document.createElement('source');
                        sourceEl8.setAttribute('type', 'image/webp');
                        sourceEl8.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=750&format=webply&optimize=medium');
                      pictureEl3.append(sourceEl8);

                        const sourceEl9 = document.createElement('source');
                        sourceEl9.setAttribute('type', 'image/png');
                        sourceEl9.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=2000&format=png&optimize=medium');
                        sourceEl9.setAttribute('media', '(min-width: 600px)');
                      pictureEl3.append(sourceEl9);

                        const imgEl3 = document.createElement('img');
                        imgEl3.setAttribute('loading', 'lazy');
                        imgEl3.setAttribute('alt', '');
                        imgEl3.setAttribute('src', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=750&format=png&optimize=medium');
                        imgEl3.setAttribute('width', '22');
                        imgEl3.setAttribute('height', '21');
                      pictureEl3.append(imgEl3);
                    pEl9.append(pictureEl3);
                  tdEl3.append(pEl9);

                    const pEl10 = document.createElement('p');
                    pEl10.textContent = 'Tax* Savings';
                  tdEl3.append(pEl10);
                trEl.append(tdEl3);
              tbodyEl.append(trEl);

                const trEl2 = document.createElement('tr');

                  const tdEl4 = document.createElement('td');
                  tdEl4.setAttribute('class', 'ia-card');
                  tdEl4.setAttribute('onclick', 'showSlide(3)');

                    const pEl11 = document.createElement('p');

                      const pictureEl4 = document.createElement('picture');

                        const sourceEl10 = document.createElement('source');
                        sourceEl10.setAttribute('type', 'image/webp');
                        sourceEl10.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=2000&format=webply&optimize=medium');
                        sourceEl10.setAttribute('media', '(min-width: 600px)');
                      pictureEl4.append(sourceEl10);

                        const sourceEl11 = document.createElement('source');
                        sourceEl11.setAttribute('type', 'image/webp');
                        sourceEl11.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=750&format=webply&optimize=medium');
                      pictureEl4.append(sourceEl11);

                        const sourceEl12 = document.createElement('source');
                        sourceEl12.setAttribute('type', 'image/png');
                        sourceEl12.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=2000&format=png&optimize=medium');
                        sourceEl12.setAttribute('media', '(min-width: 600px)');
                      pictureEl4.append(sourceEl12);

                        const imgEl4 = document.createElement('img');
                        imgEl4.setAttribute('loading', 'lazy');
                        imgEl4.setAttribute('alt', '');
                        imgEl4.setAttribute('src', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=750&format=png&optimize=medium');
                        imgEl4.setAttribute('width', '22');
                        imgEl4.setAttribute('height', '22');
                      pictureEl4.append(imgEl4);
                    pEl11.append(pictureEl4);
                  tdEl4.append(pEl11);

                    const pEl12 = document.createElement('p');
                    pEl12.textContent = 'Retirement Planning';
                  tdEl4.append(pEl12);
                trEl2.append(tdEl4);

                  const tdEl5 = document.createElement('td');
                  tdEl5.setAttribute('class', 'ia-card');
                  tdEl5.setAttribute('onclick', 'showSlide(4)');

                    const pEl13 = document.createElement('p');

                      const pictureEl5 = document.createElement('picture');

                        const sourceEl13 = document.createElement('source');
                        sourceEl13.setAttribute('type', 'image/webp');
                        sourceEl13.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=2000&format=webply&optimize=medium');
                        sourceEl13.setAttribute('media', '(min-width: 600px)');
                      pictureEl5.append(sourceEl13);

                        const sourceEl14 = document.createElement('source');
                        sourceEl14.setAttribute('type', 'image/webp');
                        sourceEl14.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=750&format=webply&optimize=medium');
                      pictureEl5.append(sourceEl14);

                        const sourceEl15 = document.createElement('source');
                        sourceEl15.setAttribute('type', 'image/png');
                        sourceEl15.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=2000&format=png&optimize=medium');
                        sourceEl15.setAttribute('media', '(min-width: 600px)');
                      pictureEl5.append(sourceEl15);

                        const imgEl5 = document.createElement('img');
                        imgEl5.setAttribute('loading', 'lazy');
                        imgEl5.setAttribute('alt', '');
                        imgEl5.setAttribute('src', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=750&format=png&optimize=medium');
                        imgEl5.setAttribute('width', '22');
                        imgEl5.setAttribute('height', '22');
                      pictureEl5.append(imgEl5);
                    pEl13.append(pictureEl5);
                  tdEl5.append(pEl13);

                    const pEl14 = document.createElement('p');
                    pEl14.textContent = 'Death benefit';
                  tdEl5.append(pEl14);
                trEl2.append(tdEl5);

                  const tdEl6 = document.createElement('td');
                  tdEl6.setAttribute('class', 'ia-card');
                  tdEl6.setAttribute('onclick', 'showSlide(5)');

                    const pEl15 = document.createElement('p');

                      const pictureEl6 = document.createElement('picture');

                        const sourceEl16 = document.createElement('source');
                        sourceEl16.setAttribute('type', 'image/webp');
                        sourceEl16.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=2000&format=webply&optimize=medium');
                        sourceEl16.setAttribute('media', '(min-width: 600px)');
                      pictureEl6.append(sourceEl16);

                        const sourceEl17 = document.createElement('source');
                        sourceEl17.setAttribute('type', 'image/webp');
                        sourceEl17.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=750&format=webply&optimize=medium');
                      pictureEl6.append(sourceEl17);

                        const sourceEl18 = document.createElement('source');
                        sourceEl18.setAttribute('type', 'image/png');
                        sourceEl18.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=2000&format=png&optimize=medium');
                        sourceEl18.setAttribute('media', '(min-width: 600px)');
                      pictureEl6.append(sourceEl18);

                        const imgEl6 = document.createElement('img');
                        imgEl6.setAttribute('loading', 'lazy');
                        imgEl6.setAttribute('alt', '');
                        imgEl6.setAttribute('src', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=750&format=png&optimize=medium');
                        imgEl6.setAttribute('width', '22');
                        imgEl6.setAttribute('height', '22');
                      pictureEl6.append(imgEl6);
                    pEl15.append(pictureEl6);
                  tdEl6.append(pEl15);

                    const pEl16 = document.createElement('p');
                    pEl16.textContent = 'Children’s Future Planning';
                  tdEl6.append(pEl16);
                trEl2.append(tdEl6);
              tbodyEl.append(trEl2);

                const trEl3 = document.createElement('tr');

                  const tdEl7 = document.createElement('td');
                  tdEl7.setAttribute('class', 'ia-card');
                  tdEl7.setAttribute('onclick', 'showSlide(6)');

                    const pEl17 = document.createElement('p');

                      const pictureEl7 = document.createElement('picture');

                        const sourceEl19 = document.createElement('source');
                        sourceEl19.setAttribute('type', 'image/webp');
                        sourceEl19.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=2000&format=webply&optimize=medium');
                        sourceEl19.setAttribute('media', '(min-width: 600px)');
                      pictureEl7.append(sourceEl19);

                        const sourceEl20 = document.createElement('source');
                        sourceEl20.setAttribute('type', 'image/webp');
                        sourceEl20.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=750&format=webply&optimize=medium');
                      pictureEl7.append(sourceEl20);

                        const sourceEl21 = document.createElement('source');
                        sourceEl21.setAttribute('type', 'image/png');
                        sourceEl21.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=2000&format=png&optimize=medium');
                        sourceEl21.setAttribute('media', '(min-width: 600px)');
                      pictureEl7.append(sourceEl21);

                        const imgEl7 = document.createElement('img');
                        imgEl7.setAttribute('loading', 'lazy');
                        imgEl7.setAttribute('alt', '');
                        imgEl7.setAttribute('src', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=750&format=png&optimize=medium');
                        imgEl7.setAttribute('width', '22');
                        imgEl7.setAttribute('height', '21');
                      pictureEl7.append(imgEl7);
                    pEl17.append(pictureEl7);
                  tdEl7.append(pEl17);

                    const pEl18 = document.createElement('p');
                    pEl18.textContent = 'Long-term Benefits';
                  tdEl7.append(pEl18);
                trEl3.append(tdEl7);

                  const tdEl8 = document.createElement('td');
                trEl3.append(tdEl8);

                  const tdEl9 = document.createElement('td');
                trEl3.append(tdEl9);
              tbodyEl.append(trEl3);
            tableEl.append(tbodyEl);
          divEl7.append(tableEl);
        divEl6.append(divEl7);

          const divEl8 = document.createElement('div');
          divEl8.setAttribute('class', 'right-card');

            const tableEl2 = document.createElement('table');
            tableEl2.setAttribute('class', 'right-card-table');

              const tbodyEl2 = document.createElement('tbody');

                const trEl4 = document.createElement('tr');

                  const tdEl10 = document.createElement('td');
                  tdEl10.setAttribute('class', 'carousel-slide active');

                    const pEl19 = document.createElement('p');

                      const pictureEl8 = document.createElement('picture');

                        const sourceEl22 = document.createElement('source');
                        sourceEl22.setAttribute('type', 'image/webp');
                        sourceEl22.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=2000&format=webply&optimize=medium');
                        sourceEl22.setAttribute('media', '(min-width: 600px)');
                      pictureEl8.append(sourceEl22);

                        const sourceEl23 = document.createElement('source');
                        sourceEl23.setAttribute('type', 'image/webp');
                        sourceEl23.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=750&format=webply&optimize=medium');
                      pictureEl8.append(sourceEl23);

                        const sourceEl24 = document.createElement('source');
                        sourceEl24.setAttribute('type', 'image/png');
                        sourceEl24.setAttribute('srcset', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=2000&format=png&optimize=medium');
                        sourceEl24.setAttribute('media', '(min-width: 600px)');
                      pictureEl8.append(sourceEl24);

                        const imgEl8 = document.createElement('img');
                        imgEl8.setAttribute('loading', 'lazy');
                        imgEl8.setAttribute('alt', '');
                        imgEl8.setAttribute('src', './media_14ace70ef7cf90e2d185aa31e392fbb2854e92d83.png?width=750&format=png&optimize=medium');
                        imgEl8.setAttribute('width', '22');
                        imgEl8.setAttribute('height', '21');
                      pictureEl8.append(imgEl8);
                    pEl19.append(pictureEl8);
                  tdEl10.append(pEl19);

                    const h2El2 = document.createElement('h2');
                    h2El2.setAttribute('id', 'financial-security');
                    h2El2.textContent = 'Financial Security';
                  tdEl10.append(h2El2);

                    const pEl20 = document.createElement('p');
                    pEl20.textContent = 'Life insurance provides financial security to your family in case of an unfortunate event. This ensures that your family can continue to maintain their lifestyle and achieve their financial goals without any compromises. The death benefit can cover various expenses such as loan repayments, children\'s education, and routine living expenses, ensuring your family\'s financial security in your absence.';
                  tdEl10.append(pEl20);
                trEl4.append(tdEl10);
              tbodyEl2.append(trEl4);

                const trEl5 = document.createElement('tr');

                  const tdEl11 = document.createElement('td');
                  tdEl11.setAttribute('class', 'carousel-slide');

                    const pEl21 = document.createElement('p');

                      const pictureEl9 = document.createElement('picture');

                        const sourceEl25 = document.createElement('source');
                        sourceEl25.setAttribute('type', 'image/webp');
                        sourceEl25.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=2000&format=webply&optimize=medium');
                        sourceEl25.setAttribute('media', '(min-width: 600px)');
                      pictureEl9.append(sourceEl25);

                        const sourceEl26 = document.createElement('source');
                        sourceEl26.setAttribute('type', 'image/webp');
                        sourceEl26.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=750&format=webply&optimize=medium');
                      pictureEl9.append(sourceEl26);

                        const sourceEl27 = document.createElement('source');
                        sourceEl27.setAttribute('type', 'image/png');
                        sourceEl27.setAttribute('srcset', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=2000&format=png&optimize=medium');
                        sourceEl27.setAttribute('media', '(min-width: 600px)');
                      pictureEl9.append(sourceEl27);

                        const imgEl9 = document.createElement('img');
                        imgEl9.setAttribute('loading', 'lazy');
                        imgEl9.setAttribute('alt', '');
                        imgEl9.setAttribute('src', './media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=750&format=png&optimize=medium');
                        imgEl9.setAttribute('width', '22');
                        imgEl9.setAttribute('height', '22');
                      pictureEl9.append(imgEl9);
                    pEl21.append(pictureEl9);
                  tdEl11.append(pEl21);

                    const h2El3 = document.createElement('h2');
                    h2El3.setAttribute('id', 'wealth-creation');
                    h2El3.textContent = 'Wealth Creation';
                  tdEl11.append(h2El3);

                    const pEl22 = document.createElement('p');

                      const brEl = document.createElement('br');
                    pEl22.append(brEl);

                      const brEl2 = document.createElement('br');
                    pEl22.append(brEl2);
                  tdEl11.append(pEl22);
                trEl5.append(tdEl11);
              tbodyEl2.append(trEl5);

                const trEl6 = document.createElement('tr');

                  const tdEl12 = document.createElement('td');
                  tdEl12.setAttribute('class', 'carousel-slide');

                    const pEl23 = document.createElement('p');

                      const pictureEl10 = document.createElement('picture');

                        const sourceEl28 = document.createElement('source');
                        sourceEl28.setAttribute('type', 'image/webp');
                        sourceEl28.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=2000&format=webply&optimize=medium');
                        sourceEl28.setAttribute('media', '(min-width: 600px)');
                      pictureEl10.append(sourceEl28);

                        const sourceEl29 = document.createElement('source');
                        sourceEl29.setAttribute('type', 'image/webp');
                        sourceEl29.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=750&format=webply&optimize=medium');
                      pictureEl10.append(sourceEl29);

                        const sourceEl30 = document.createElement('source');
                        sourceEl30.setAttribute('type', 'image/png');
                        sourceEl30.setAttribute('srcset', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=2000&format=png&optimize=medium');
                        sourceEl30.setAttribute('media', '(min-width: 600px)');
                      pictureEl10.append(sourceEl30);

                        const imgEl10 = document.createElement('img');
                        imgEl10.setAttribute('loading', 'lazy');
                        imgEl10.setAttribute('alt', '');
                        imgEl10.setAttribute('src', './media_143ffc9073b5f0e23ef4147f07e67cb94b71ea258.png?width=750&format=png&optimize=medium');
                        imgEl10.setAttribute('width', '22');
                        imgEl10.setAttribute('height', '21');
                      pictureEl10.append(imgEl10);
                    pEl23.append(pictureEl10);
                  tdEl12.append(pEl23);

                    const h2El4 = document.createElement('h2');
                    h2El4.setAttribute('id', 'tax-savings');
                    h2El4.textContent = 'Tax* Savings';
                  tdEl12.append(h2El4);

                    const pEl24 = document.createElement('p');

                      const brEl3 = document.createElement('br');
                    pEl24.append(brEl3);

                      const brEl4 = document.createElement('br');
                    pEl24.append(brEl4);
                  tdEl12.append(pEl24);
                trEl6.append(tdEl12);
              tbodyEl2.append(trEl6);

                const trEl7 = document.createElement('tr');

                  const tdEl13 = document.createElement('td');
                  tdEl13.setAttribute('class', 'carousel-slide');

                    const pEl25 = document.createElement('p');

                      const pictureEl11 = document.createElement('picture');

                        const sourceEl31 = document.createElement('source');
                        sourceEl31.setAttribute('type', 'image/webp');
                        sourceEl31.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=2000&format=webply&optimize=medium');
                        sourceEl31.setAttribute('media', '(min-width: 600px)');
                      pictureEl11.append(sourceEl31);

                        const sourceEl32 = document.createElement('source');
                        sourceEl32.setAttribute('type', 'image/webp');
                        sourceEl32.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=750&format=webply&optimize=medium');
                      pictureEl11.append(sourceEl32);

                        const sourceEl33 = document.createElement('source');
                        sourceEl33.setAttribute('type', 'image/png');
                        sourceEl33.setAttribute('srcset', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=2000&format=png&optimize=medium');
                        sourceEl33.setAttribute('media', '(min-width: 600px)');
                      pictureEl11.append(sourceEl33);

                        const imgEl11 = document.createElement('img');
                        imgEl11.setAttribute('loading', 'lazy');
                        imgEl11.setAttribute('alt', '');
                        imgEl11.setAttribute('src', './media_183cb46aed7e4ef7d1e8337ec8be91adb30bb4940.png?width=750&format=png&optimize=medium');
                        imgEl11.setAttribute('width', '22');
                        imgEl11.setAttribute('height', '22');
                      pictureEl11.append(imgEl11);
                    pEl25.append(pictureEl11);
                  tdEl13.append(pEl25);

                    const h2El5 = document.createElement('h2');
                    h2El5.setAttribute('id', 'retirement-planning');
                    h2El5.textContent = 'Retirement Planning';
                  tdEl13.append(h2El5);

                    const pEl26 = document.createElement('p');
                    pEl26.textContent = 'Some life insurance plans, like guaranteed income plans, and others offer fixed monthly income or lump sum payouts for retirement. These plans provide a source of regular income during your non-working years and can help you live a comfortable life without any financial constraints. In order to choose the best plan to match your retirement needs, you can take advantage of life insurance calculators which are an effective tool to know how much you should invest and for how long to achieve the retirement of your dreams.';
                  tdEl13.append(pEl26);
                trEl7.append(tdEl13);
              tbodyEl2.append(trEl7);

                const trEl8 = document.createElement('tr');

                  const tdEl14 = document.createElement('td');
                  tdEl14.setAttribute('class', 'carousel-slide');

                    const pEl27 = document.createElement('p');

                      const pictureEl12 = document.createElement('picture');

                        const sourceEl34 = document.createElement('source');
                        sourceEl34.setAttribute('type', 'image/webp');
                        sourceEl34.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=2000&format=webply&optimize=medium');
                        sourceEl34.setAttribute('media', '(min-width: 600px)');
                      pictureEl12.append(sourceEl34);

                        const sourceEl35 = document.createElement('source');
                        sourceEl35.setAttribute('type', 'image/webp');
                        sourceEl35.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=750&format=webply&optimize=medium');
                      pictureEl12.append(sourceEl35);

                        const sourceEl36 = document.createElement('source');
                        sourceEl36.setAttribute('type', 'image/png');
                        sourceEl36.setAttribute('srcset', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=2000&format=png&optimize=medium');
                        sourceEl36.setAttribute('media', '(min-width: 600px)');
                      pictureEl12.append(sourceEl36);

                        const imgEl12 = document.createElement('img');
                        imgEl12.setAttribute('loading', 'lazy');
                        imgEl12.setAttribute('alt', '');
                        imgEl12.setAttribute('src', './media_190ab6c4f3ae3f780bd17ab0531b8dceb5816a390.png?width=750&format=png&optimize=medium');
                        imgEl12.setAttribute('width', '22');
                        imgEl12.setAttribute('height', '22');
                      pictureEl12.append(imgEl12);
                    pEl27.append(pictureEl12);
                  tdEl14.append(pEl27);

                    const h2El6 = document.createElement('h2');
                    h2El6.setAttribute('id', 'death-benefit');
                    h2El6.textContent = 'Death benefit';
                  tdEl14.append(h2El6);

                    const pEl28 = document.createElement('p');
                    pEl28.textContent = 'If the policyholder passes away during the policy term and the premium is paid in full, the nominee receives a sum assured. This amount can be received as a lump sum or as regular income. The death benefit ensures the family is financially secure and can be used for various expenses, including utility bills, loans and credit card debt, children\'s education, and more.';
                  tdEl14.append(pEl28);
                trEl8.append(tdEl14);
              tbodyEl2.append(trEl8);

                const trEl9 = document.createElement('tr');

                  const tdEl15 = document.createElement('td');
                  tdEl15.setAttribute('class', 'carousel-slide');

                    const pEl29 = document.createElement('p');

                      const pictureEl13 = document.createElement('picture');

                        const sourceEl37 = document.createElement('source');
                        sourceEl37.setAttribute('type', 'image/webp');
                        sourceEl37.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=2000&format=webply&optimize=medium');
                        sourceEl37.setAttribute('media', '(min-width: 600px)');
                      pictureEl13.append(sourceEl37);

                        const sourceEl38 = document.createElement('source');
                        sourceEl38.setAttribute('type', 'image/webp');
                        sourceEl38.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=750&format=webply&optimize=medium');
                      pictureEl13.append(sourceEl38);

                        const sourceEl39 = document.createElement('source');
                        sourceEl39.setAttribute('type', 'image/png');
                        sourceEl39.setAttribute('srcset', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=2000&format=png&optimize=medium');
                        sourceEl39.setAttribute('media', '(min-width: 600px)');
                      pictureEl13.append(sourceEl39);

                        const imgEl13 = document.createElement('img');
                        imgEl13.setAttribute('loading', 'lazy');
                        imgEl13.setAttribute('alt', '');
                        imgEl13.setAttribute('src', './media_133f94bb6bd36a64caff901e1761224096e663c12.png?width=750&format=png&optimize=medium');
                        imgEl13.setAttribute('width', '22');
                        imgEl13.setAttribute('height', '22');
                      pictureEl13.append(imgEl13);
                    pEl29.append(pictureEl13);
                  tdEl15.append(pEl29);

                    const h2El7 = document.createElement('h2');
                    h2El7.setAttribute('id', 'childrens-future-planning');
                    h2El7.textContent = 'Children’s Future Planning';
                  tdEl15.append(h2El7);

                    const pEl30 = document.createElement('p');
                    pEl30.textContent = 'Life insurance plans can be a viable tool to fulfil your child\'s dreams. These plans provide lump sum payouts or a regular income to fund your child\'s education and help them achieve their goals without compromises. Moreover, the insurance benefits protect your child financially in the case of an unfortunate event. Life insurance calculators can offer accurate quotes to help you plan for your child\'s future, including their higher education and wedding expenses.';
                  tdEl15.append(pEl30);
                trEl9.append(tdEl15);
              tbodyEl2.append(trEl9);

                const trEl10 = document.createElement('tr');

                  const tdEl16 = document.createElement('td');
                  tdEl16.setAttribute('class', 'carousel-slide');

                    const pEl31 = document.createElement('p');

                      const pictureEl14 = document.createElement('picture');

                        const sourceEl40 = document.createElement('source');
                        sourceEl40.setAttribute('type', 'image/webp');
                        sourceEl40.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=2000&format=webply&optimize=medium');
                        sourceEl40.setAttribute('media', '(min-width: 600px)');
                      pictureEl14.append(sourceEl40);

                        const sourceEl41 = document.createElement('source');
                        sourceEl41.setAttribute('type', 'image/webp');
                        sourceEl41.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=750&format=webply&optimize=medium');
                      pictureEl14.append(sourceEl41);

                        const sourceEl42 = document.createElement('source');
                        sourceEl42.setAttribute('type', 'image/png');
                        sourceEl42.setAttribute('srcset', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=2000&format=png&optimize=medium');
                        sourceEl42.setAttribute('media', '(min-width: 600px)');
                      pictureEl14.append(sourceEl42);

                        const imgEl14 = document.createElement('img');
                        imgEl14.setAttribute('loading', 'lazy');
                        imgEl14.setAttribute('alt', '');
                        imgEl14.setAttribute('src', './media_10b175256e2de45cbd83656dc206f5b0f5a821358.png?width=750&format=png&optimize=medium');
                        imgEl14.setAttribute('width', '22');
                        imgEl14.setAttribute('height', '21');
                      pictureEl14.append(imgEl14);
                    pEl31.append(pictureEl14);
                  tdEl16.append(pEl31);

                    const h2El8 = document.createElement('h2');
                    h2El8.setAttribute('id', 'long-term-benefits');
                    h2El8.textContent = 'Long-term Benefits';
                  tdEl16.append(h2El8);

                    const pEl32 = document.createElement('p');
                    pEl32.textContent = 'Life insurance plans offer you and your loved ones long-term benefits and financial security. The sum assured provides a lump sum payout to your family in the case of any unfortunate event during the policy term. Life insurance provides financial independence by ensuring that your family remains financially secure. Additionally, some life insurance plans like ULIPs, endowment plans, and others also offer the opportunity for wealth creation, tax savings, and long-term savings.';
                  tdEl16.append(pEl32);
                trEl10.append(tdEl16);
              tbodyEl2.append(trEl10);
            tableEl2.append(tbodyEl2);
          divEl8.append(tableEl2);

            const pEl33 = document.createElement('p');
            pEl33.setAttribute('class', 'carousel-controls');

              const pictureEl15 = document.createElement('picture');
              pictureEl15.setAttribute('onclick', 'prevSlide()');

                const sourceEl43 = document.createElement('source');
                sourceEl43.setAttribute('type', 'image/webp');
                sourceEl43.setAttribute('srcset', './media_1f4014d8d144ec029f71af7a725b7a7b35e038ad2.png?width=2000&format=webply&optimize=medium');
                sourceEl43.setAttribute('media', '(min-width: 600px)');
              pictureEl15.append(sourceEl43);

                const sourceEl44 = document.createElement('source');
                sourceEl44.setAttribute('type', 'image/webp');
                sourceEl44.setAttribute('srcset', './media_1f4014d8d144ec029f71af7a725b7a7b35e038ad2.png?width=750&format=webply&optimize=medium');
              pictureEl15.append(sourceEl44);

                const sourceEl45 = document.createElement('source');
                sourceEl45.setAttribute('type', 'image/png');
                sourceEl45.setAttribute('srcset', './media_1f4014d8d144ec029f71af7a725b7a7b35e038ad2.png?width=2000&format=png&optimize=medium');
                sourceEl45.setAttribute('media', '(min-width: 600px)');
              pictureEl15.append(sourceEl45);

                const imgEl15 = document.createElement('img');
                imgEl15.setAttribute('loading', 'lazy');
                imgEl15.setAttribute('alt', '');
                imgEl15.setAttribute('src', './media_1f4014d8d144ec029f71af7a725b7a7b35e038ad2.png?width=750&format=png&optimize=medium');
                imgEl15.setAttribute('width', '512');
                imgEl15.setAttribute('height', '512');
              pictureEl15.append(imgEl15);
            pEl33.append(pictureEl15);
          divEl8.append(pEl33);

            const divEl9 = document.createElement('div');
            divEl9.setAttribute('class', 'pagination-dots');

              const spanEl = document.createElement('span');
              spanEl.setAttribute('class', 'dot active');
            divEl9.append(spanEl);

              const spanEl2 = document.createElement('span');
              spanEl2.setAttribute('class', 'dot');
            divEl9.append(spanEl2);

              const spanEl3 = document.createElement('span');
              spanEl3.setAttribute('class', 'dot');
            divEl9.append(spanEl3);

              const spanEl4 = document.createElement('span');
              spanEl4.setAttribute('class', 'dot');
            divEl9.append(spanEl4);

              const spanEl5 = document.createElement('span');
              spanEl5.setAttribute('class', 'dot');
            divEl9.append(spanEl5);

              const spanEl6 = document.createElement('span');
              spanEl6.setAttribute('class', 'dot');
            divEl9.append(spanEl6);

              const spanEl7 = document.createElement('span');
              spanEl7.setAttribute('class', 'dot');
            divEl9.append(spanEl7);
          divEl8.append(divEl9);

            const pictureEl16 = document.createElement('picture');
            pictureEl16.setAttribute('onclick', 'nextSlide()');

              const sourceEl46 = document.createElement('source');
              sourceEl46.setAttribute('type', 'image/webp');
              sourceEl46.setAttribute('srcset', './media_1a622dbf36b1d7c57547bc057c1b90910a1b294c9.png?width=2000&format=webply&optimize=medium');
              sourceEl46.setAttribute('media', '(min-width: 600px)');
            pictureEl16.append(sourceEl46);

              const sourceEl47 = document.createElement('source');
              sourceEl47.setAttribute('type', 'image/webp');
              sourceEl47.setAttribute('srcset', './media_1a622dbf36b1d7c57547bc057c1b90910a1b294c9.png?width=750&format=webply&optimize=medium');
            pictureEl16.append(sourceEl47);

              const sourceEl48 = document.createElement('source');
              sourceEl48.setAttribute('type', 'image/png');
              sourceEl48.setAttribute('srcset', './media_1a622dbf36b1d7c57547bc057c1b90910a1b294c9.png?width=2000&format=png&optimize=medium');
              sourceEl48.setAttribute('media', '(min-width: 600px)');
            pictureEl16.append(sourceEl48);

              const imgEl16 = document.createElement('img');
              imgEl16.setAttribute('loading', 'lazy');
              imgEl16.setAttribute('alt', '');
              imgEl16.setAttribute('src', './media_1a622dbf36b1d7c57547bc057c1b90910a1b294c9.png?width=750&format=png&optimize=medium');
              imgEl16.setAttribute('width', '512');
              imgEl16.setAttribute('height', '512');
            pictureEl16.append(imgEl16);
          divEl8.append(pictureEl16);

            const pEl34 = document.createElement('p');
          divEl8.append(pEl34);
        divEl6.append(divEl8);
      divEl3.append(divEl6);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}