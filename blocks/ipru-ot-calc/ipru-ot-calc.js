export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'section ipru-ot-calc-container');
  divEl.setAttribute('data-section-status', 'loaded');
  divEl.setAttribute('style', '');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'ipru-ot-calc-wrapper');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'ipru-ot-calc block');
      divEl3.setAttribute('data-block-name', 'ipru-ot-calc');
      divEl3.setAttribute('data-block-status', 'loaded');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'ot-cal-heading');

          const divEl5 = document.createElement('div');

            const pEl = document.createElement('p');
            pEl.textContent = 'ONLINE TOOLS AND CALCULATOR Pankaj';
          divEl5.append(pEl);

            const h2El = document.createElement('h2');
            h2El.setAttribute('id', 'explore-our-interactive-planning-tools');
            h2El.textContent = 'Explore our Interactive Planning Tools';
          divEl5.append(h2El);
        divEl4.append(divEl5);
      divEl3.append(divEl4);

        const divEl6 = document.createElement('div');
        divEl6.setAttribute('class', 'ot-cal-body');

          const divEl7 = document.createElement('div');
          divEl7.setAttribute('class', 'tool-table');

            const tableEl = document.createElement('table');

              const tbodyEl = document.createElement('tbody');

                const trEl = document.createElement('tr');

                  const tdEl = document.createElement('td');

                    const pEl2 = document.createElement('p');
                    pEl2.setAttribute('class', 'insure-click');

                      const pictureEl = document.createElement('picture');

                        const sourceEl = document.createElement('source');
                        sourceEl.setAttribute('type', 'image/webp');
                        sourceEl.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1f6c3b02b04c809129cb0b1efdfe79a002a515dda.png?width=2000&format=webply&optimize=medium');
                        sourceEl.setAttribute('media', '(min-width: 600px)');
                      pictureEl.append(sourceEl);

                        const sourceEl2 = document.createElement('source');
                        sourceEl2.setAttribute('type', 'image/webp');
                        sourceEl2.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1f6c3b02b04c809129cb0b1efdfe79a002a515dda.png?width=750&format=webply&optimize=medium');
                      pictureEl.append(sourceEl2);

                        const sourceEl3 = document.createElement('source');
                        sourceEl3.setAttribute('type', 'image/png');
                        sourceEl3.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1f6c3b02b04c809129cb0b1efdfe79a002a515dda.png?width=2000&format=png&optimize=medium');
                        sourceEl3.setAttribute('media', '(min-width: 600px)');
                      pictureEl.append(sourceEl3);

                        const imgEl = document.createElement('img');
                        imgEl.setAttribute('loading', 'lazy');
                        imgEl.setAttribute('alt', '');
                        imgEl.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1f6c3b02b04c809129cb0b1efdfe79a002a515dda.png?width=750&format=png&optimize=medium');
                        imgEl.setAttribute('width', '42');
                        imgEl.setAttribute('height', '42');
                      pictureEl.append(imgEl);
                    pEl2.append(pictureEl);
                  tdEl.append(pEl2);

                    const pEl3 = document.createElement('p');
                    pEl3.textContent = 'Term Insurance';
                  tdEl.append(pEl3);
                trEl.append(tdEl);

                  const tdEl2 = document.createElement('td');

                    const pEl4 = document.createElement('p');
                    pEl4.setAttribute('class', 'insure-click');

                      const pictureEl2 = document.createElement('picture');

                        const sourceEl4 = document.createElement('source');
                        sourceEl4.setAttribute('type', 'image/webp');
                        sourceEl4.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1d2f9adf48fb46930d77c1c7b7dd4e36f99e6061a.png?width=2000&format=webply&optimize=medium');
                        sourceEl4.setAttribute('media', '(min-width: 600px)');
                      pictureEl2.append(sourceEl4);

                        const sourceEl5 = document.createElement('source');
                        sourceEl5.setAttribute('type', 'image/webp');
                        sourceEl5.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1d2f9adf48fb46930d77c1c7b7dd4e36f99e6061a.png?width=750&format=webply&optimize=medium');
                      pictureEl2.append(sourceEl5);

                        const sourceEl6 = document.createElement('source');
                        sourceEl6.setAttribute('type', 'image/png');
                        sourceEl6.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1d2f9adf48fb46930d77c1c7b7dd4e36f99e6061a.png?width=2000&format=png&optimize=medium');
                        sourceEl6.setAttribute('media', '(min-width: 600px)');
                      pictureEl2.append(sourceEl6);

                        const imgEl2 = document.createElement('img');
                        imgEl2.setAttribute('loading', 'lazy');
                        imgEl2.setAttribute('alt', '');
                        imgEl2.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1d2f9adf48fb46930d77c1c7b7dd4e36f99e6061a.png?width=750&format=png&optimize=medium');
                        imgEl2.setAttribute('width', '42');
                        imgEl2.setAttribute('height', '42');
                      pictureEl2.append(imgEl2);
                    pEl4.append(pictureEl2);
                  tdEl2.append(pEl4);

                    const pEl5 = document.createElement('p');
                    pEl5.textContent = 'Human Life Value';
                  tdEl2.append(pEl5);
                trEl.append(tdEl2);

                  const tdEl3 = document.createElement('td');

                    const pEl6 = document.createElement('p');
                    pEl6.setAttribute('class', 'insure-click');

                      const pictureEl3 = document.createElement('picture');

                        const sourceEl7 = document.createElement('source');
                        sourceEl7.setAttribute('type', 'image/webp');
                        sourceEl7.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_17da663613570829f92bcb5460c1f66aac94798a4.png?width=2000&format=webply&optimize=medium');
                        sourceEl7.setAttribute('media', '(min-width: 600px)');
                      pictureEl3.append(sourceEl7);

                        const sourceEl8 = document.createElement('source');
                        sourceEl8.setAttribute('type', 'image/webp');
                        sourceEl8.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_17da663613570829f92bcb5460c1f66aac94798a4.png?width=750&format=webply&optimize=medium');
                      pictureEl3.append(sourceEl8);

                        const sourceEl9 = document.createElement('source');
                        sourceEl9.setAttribute('type', 'image/png');
                        sourceEl9.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_17da663613570829f92bcb5460c1f66aac94798a4.png?width=2000&format=png&optimize=medium');
                        sourceEl9.setAttribute('media', '(min-width: 600px)');
                      pictureEl3.append(sourceEl9);

                        const imgEl3 = document.createElement('img');
                        imgEl3.setAttribute('loading', 'lazy');
                        imgEl3.setAttribute('alt', '');
                        imgEl3.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_17c02386fa86bbeae1ff302ae15333a2ceaf4a70f.png?width=2000&format=webply&optimize=medium;');
                        imgEl3.setAttribute('width', '46');
                        imgEl3.setAttribute('height', '46');
                      pictureEl3.append(imgEl3);
                    pEl6.append(pictureEl3);
                  tdEl3.append(pEl6);

                    const pEl7 = document.createElement('p');
                    pEl7.textContent = 'House Rent Allowance';
                  tdEl3.append(pEl7);
                trEl.append(tdEl3);
              tbodyEl.append(trEl);

                const trEl2 = document.createElement('tr');

                  const tdEl4 = document.createElement('td');

                    const pEl8 = document.createElement('p');
                    pEl8.setAttribute('class', 'insure-click');

                      const pictureEl4 = document.createElement('picture');

                        const sourceEl10 = document.createElement('source');
                        sourceEl10.setAttribute('type', 'image/webp');
                        sourceEl10.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1aa1b0d20ac84c2ef3c88bac638b3cfaf46e0f08e.png?width=2000&format=webply&optimize=medium');
                        sourceEl10.setAttribute('media', '(min-width: 600px)');
                      pictureEl4.append(sourceEl10);

                        const sourceEl11 = document.createElement('source');
                        sourceEl11.setAttribute('type', 'image/webp');
                        sourceEl11.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1aa1b0d20ac84c2ef3c88bac638b3cfaf46e0f08e.png?width=750&format=webply&optimize=medium');
                      pictureEl4.append(sourceEl11);

                        const sourceEl12 = document.createElement('source');
                        sourceEl12.setAttribute('type', 'image/png');
                        sourceEl12.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1aa1b0d20ac84c2ef3c88bac638b3cfaf46e0f08e.png?width=2000&format=png&optimize=medium');
                        sourceEl12.setAttribute('media', '(min-width: 600px)');
                      pictureEl4.append(sourceEl12);

                        const imgEl4 = document.createElement('img');
                        imgEl4.setAttribute('loading', 'lazy');
                        imgEl4.setAttribute('alt', '');
                        imgEl4.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1aa1b0d20ac84c2ef3c88bac638b3cfaf46e0f08e.png?width=750&format=png&optimize=medium');
                        imgEl4.setAttribute('width', '48');
                        imgEl4.setAttribute('height', '48');
                      pictureEl4.append(imgEl4);
                    pEl8.append(pictureEl4);
                  tdEl4.append(pEl8);

                    const pEl9 = document.createElement('p');
                    pEl9.textContent = 'Retirement Planner';
                  tdEl4.append(pEl9);
                trEl2.append(tdEl4);

                  const tdEl5 = document.createElement('td');

                    const pEl10 = document.createElement('p');
                    pEl10.setAttribute('class', 'insure-click');

                      const pictureEl5 = document.createElement('picture');

                        const sourceEl13 = document.createElement('source');
                        sourceEl13.setAttribute('type', 'image/webp');
                        sourceEl13.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b47ad6b6f2dd6cf8829d9d4b1025166c49af8755.png?width=2000&format=webply&optimize=medium');
                        sourceEl13.setAttribute('media', '(min-width: 600px)');
                      pictureEl5.append(sourceEl13);

                        const sourceEl14 = document.createElement('source');
                        sourceEl14.setAttribute('type', 'image/webp');
                        sourceEl14.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b47ad6b6f2dd6cf8829d9d4b1025166c49af8755.png?width=750&format=webply&optimize=medium');
                      pictureEl5.append(sourceEl14);

                        const sourceEl15 = document.createElement('source');
                        sourceEl15.setAttribute('type', 'image/png');
                        sourceEl15.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b47ad6b6f2dd6cf8829d9d4b1025166c49af8755.png?width=2000&format=png&optimize=medium');
                        sourceEl15.setAttribute('media', '(min-width: 600px)');
                      pictureEl5.append(sourceEl15);

                        const imgEl5 = document.createElement('img');
                        imgEl5.setAttribute('loading', 'lazy');
                        imgEl5.setAttribute('alt', '');
                        imgEl5.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b47ad6b6f2dd6cf8829d9d4b1025166c49af8755.png?width=750&format=png&optimize=medium');
                        imgEl5.setAttribute('width', '40');
                        imgEl5.setAttribute('height', '40');
                      pictureEl5.append(imgEl5);
                    pEl10.append(pictureEl5);
                  tdEl5.append(pEl10);

                    const pEl11 = document.createElement('p');
                    pEl11.textContent = 'Income Tax Calculator';
                  tdEl5.append(pEl11);
                trEl2.append(tdEl5);

                  const tdEl6 = document.createElement('td');

                    const pEl12 = document.createElement('p');
                    pEl12.setAttribute('class', 'insure-click');

                      const pictureEl6 = document.createElement('picture');

                        const sourceEl16 = document.createElement('source');
                        sourceEl16.setAttribute('type', 'image/webp');
                        sourceEl16.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ce411a1e27dd344a0ab4e87332594e17ee06a6c1.png?width=2000&format=webply&optimize=medium');
                        sourceEl16.setAttribute('media', '(min-width: 600px)');
                      pictureEl6.append(sourceEl16);

                        const sourceEl17 = document.createElement('source');
                        sourceEl17.setAttribute('type', 'image/webp');
                        sourceEl17.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ce411a1e27dd344a0ab4e87332594e17ee06a6c1.png?width=750&format=webply&optimize=medium');
                      pictureEl6.append(sourceEl17);

                        const sourceEl18 = document.createElement('source');
                        sourceEl18.setAttribute('type', 'image/png');
                        sourceEl18.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ce411a1e27dd344a0ab4e87332594e17ee06a6c1.png?width=2000&format=png&optimize=medium');
                        sourceEl18.setAttribute('media', '(min-width: 600px)');
                      pictureEl6.append(sourceEl18);

                        const imgEl6 = document.createElement('img');
                        imgEl6.setAttribute('loading', 'lazy');
                        imgEl6.setAttribute('alt', '');
                        imgEl6.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ce411a1e27dd344a0ab4e87332594e17ee06a6c1.png?width=750&format=png&optimize=medium');
                        imgEl6.setAttribute('width', '48');
                        imgEl6.setAttribute('height', '48');
                      pictureEl6.append(imgEl6);
                    pEl12.append(pictureEl6);
                  tdEl6.append(pEl12);

                    const pEl13 = document.createElement('p');
                    pEl13.textContent = 'Power of Compounding';
                  tdEl6.append(pEl13);
                trEl2.append(tdEl6);
              tbodyEl.append(trEl2);

                const trEl3 = document.createElement('tr');

                  const tdEl7 = document.createElement('td');

                    const pEl14 = document.createElement('p');
                    pEl14.setAttribute('class', 'insure-click');

                      const pictureEl7 = document.createElement('picture');

                        const sourceEl19 = document.createElement('source');
                        sourceEl19.setAttribute('type', 'image/webp');
                        sourceEl19.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fbe710066d25ab996b841e7ad68b1df88a1c96e3.png?width=2000&format=webply&optimize=medium');
                        sourceEl19.setAttribute('media', '(min-width: 600px)');
                      pictureEl7.append(sourceEl19);

                        const sourceEl20 = document.createElement('source');
                        sourceEl20.setAttribute('type', 'image/webp');
                        sourceEl20.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fbe710066d25ab996b841e7ad68b1df88a1c96e3.png?width=750&format=webply&optimize=medium');
                      pictureEl7.append(sourceEl20);

                        const sourceEl21 = document.createElement('source');
                        sourceEl21.setAttribute('type', 'image/png');
                        sourceEl21.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fbe710066d25ab996b841e7ad68b1df88a1c96e3.png?width=2000&format=png&optimize=medium');
                        sourceEl21.setAttribute('media', '(min-width: 600px)');
                      pictureEl7.append(sourceEl21);

                        const imgEl7 = document.createElement('img');
                        imgEl7.setAttribute('loading', 'lazy');
                        imgEl7.setAttribute('alt', '');
                        imgEl7.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fbe710066d25ab996b841e7ad68b1df88a1c96e3.png?width=750&format=png&optimize=medium');
                        imgEl7.setAttribute('width', '38');
                        imgEl7.setAttribute('height', '38');
                      pictureEl7.append(imgEl7);
                    pEl14.append(pictureEl7);
                  tdEl7.append(pEl14);

                    const pEl15 = document.createElement('p');
                    pEl15.textContent = 'Home Loan Insurance';
                  tdEl7.append(pEl15);
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
          divEl8.setAttribute('class', 'tool-cta');

            const pEl16 = document.createElement('p');

              const pictureEl8 = document.createElement('picture');
              pictureEl8.setAttribute('style', 'display: block;');

                const sourceEl22 = document.createElement('source');
                sourceEl22.setAttribute('type', 'image/webp');
                sourceEl22.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1dac7d5058ffb3f2cbd15be3f85c4c9d56cb323af.png?width=2000&format=webply&optimize=medium');
                sourceEl22.setAttribute('media', '(min-width: 600px)');
              pictureEl8.append(sourceEl22);

                const sourceEl23 = document.createElement('source');
                sourceEl23.setAttribute('type', 'image/webp');
                sourceEl23.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1dac7d5058ffb3f2cbd15be3f85c4c9d56cb323af.png?width=750&format=webply&optimize=medium');
              pictureEl8.append(sourceEl23);

                const sourceEl24 = document.createElement('source');
                sourceEl24.setAttribute('type', 'image/png');
                sourceEl24.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1dac7d5058ffb3f2cbd15be3f85c4c9d56cb323af.png?width=2000&format=png&optimize=medium');
                sourceEl24.setAttribute('media', '(min-width: 600px)');
              pictureEl8.append(sourceEl24);

                const imgEl8 = document.createElement('img');
                imgEl8.setAttribute('loading', 'lazy');
                imgEl8.setAttribute('alt', '');
                imgEl8.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1dac7d5058ffb3f2cbd15be3f85c4c9d56cb323af.png?width=750&format=png&optimize=medium');
                imgEl8.setAttribute('width', '495');
                imgEl8.setAttribute('height', '359');
              pictureEl8.append(imgEl8);
            pEl16.append(pictureEl8);

              const imgEl9 = document.createElement('img');
              imgEl9.setAttribute('src', '../../images/ipru-wbo/term-insurense.gif');
              imgEl9.setAttribute('alt', 'Sample Image');
              imgEl9.setAttribute('width', '495');
              imgEl9.setAttribute('height', '359');
              imgEl9.setAttribute('style', 'display: none;');
            pEl16.append(imgEl9);
          divEl8.append(pEl16);

            const pEl17 = document.createElement('p');
            pEl17.setAttribute('class', 'button-container');

              const aEl = document.createElement('a');
              aEl.setAttribute('href', 'https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=40759');
              aEl.setAttribute('title', 'Calculate Term Insurance Premium');
              aEl.setAttribute('class', 'button');
              aEl.textContent = 'Calculate Term Insurance Premium';
            pEl17.append(aEl);
          divEl8.append(pEl17);
        divEl6.append(divEl8);
      divEl3.append(divEl6);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}