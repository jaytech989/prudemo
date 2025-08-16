export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'ipru-insurance-plans block');
  divEl.setAttribute('data-block-name', 'ipru-insurance-plans');
  divEl.setAttribute('data-block-status', 'loaded');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'cards-set');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'set-a');

        const pEl = document.createElement('p');
        pEl.textContent = 'Insurance Plans For All Your Goals';
      divEl3.append(pEl);

        const tableEl = document.createElement('table');
        tableEl.setAttribute('class', 'insure-table-1');

          const tbodyEl = document.createElement('tbody');

            const trEl = document.createElement('tr');
            trEl.setAttribute('class', 'insure-card-row');

              const tdEl = document.createElement('td');
              tdEl.setAttribute('class', 'insure-card-cell');

                const aEl = document.createElement('a');
                aEl.setAttribute('class', 'insure-card-link');
                aEl.setAttribute('href', 'https://www.iciciprulife.com/ulip-plans/unit-linked-insurance-plans/icici-pru-signature-ulip-calculator.html?UID=35058');

                  const pEl2 = document.createElement('p');
                  pEl2.textContent = 'Wealth Maximiser';
                aEl.append(pEl2);

                  const h3El = document.createElement('h3');
                  h3El.setAttribute('id', 'ulip-with-22-funds');
                  h3El.textContent = 'ULIP with 22 funds';
                aEl.append(h3El);
              tdEl.append(aEl);
            trEl.append(tdEl);

              const tdEl2 = document.createElement('td');
              tdEl2.setAttribute('class', 'insure-card-cell');

                const aEl2 = document.createElement('a');
                aEl2.setAttribute('class', 'insure-card-link');
                aEl2.setAttribute('href', 'https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=1447');

                  const pEl3 = document.createElement('p');

                    const pictureEl = document.createElement('picture');

                      const sourceEl = document.createElement('source');
                      sourceEl.setAttribute('type', 'image/webp');
                      sourceEl.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_125350b263abdf74e982e62bc9095be7a56a1869f.png?width=2000&format=webply&optimize=medium');
                      sourceEl.setAttribute('media', '(min-width: 600px)');
                    pictureEl.append(sourceEl);

                      const sourceEl2 = document.createElement('source');
                      sourceEl2.setAttribute('type', 'image/webp');
                      sourceEl2.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_125350b263abdf74e982e62bc9095be7a56a1869f.png?width=750&format=webply&optimize=medium');
                    pictureEl.append(sourceEl2);

                      const sourceEl3 = document.createElement('source');
                      sourceEl3.setAttribute('type', 'image/png');
                      sourceEl3.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_125350b263abdf74e982e62bc9095be7a56a1869f.png?width=2000&format=png&optimize=medium');
                      sourceEl3.setAttribute('media', '(min-width: 600px)');
                    pictureEl.append(sourceEl3);

                      const imgEl = document.createElement('img');
                      imgEl.setAttribute('loading', 'lazy');
                      imgEl.setAttribute('alt', '');
                      imgEl.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_125350b263abdf74e982e62bc9095be7a56a1869f.png?width=750&format=png&optimize=medium');
                      imgEl.setAttribute('width', '32');
                      imgEl.setAttribute('height', '32');
                    pictureEl.append(imgEl);
                  pEl3.append(pictureEl);
                aEl2.append(pEl3);

                  const pEl4 = document.createElement('p');
                  pEl4.textContent = 'Term Life Insurance';
                aEl2.append(pEl4);

                  const h3El2 = document.createElement('h3');
                  h3El2.setAttribute('id', 'claim-settlement');
                  h3El2.textContent = '99.17% Claim Settlement';
                aEl2.append(h3El2);

                  const pEl5 = document.createElement('p');
                  pEl5.setAttribute('class', 'insure-pop');

                    const strongEl = document.createElement('strong');
                    strongEl.textContent = 'Top Selling Plan';
                  pEl5.append(strongEl);
                aEl2.append(pEl5);
              tdEl2.append(aEl2);
            trEl.append(tdEl2);

              const tdEl3 = document.createElement('td');
              tdEl3.setAttribute('class', 'insure-card-cell');

                const pEl6 = document.createElement('p');

                  const pictureEl2 = document.createElement('picture');

                    const sourceEl4 = document.createElement('source');
                    sourceEl4.setAttribute('type', 'image/webp');
                    sourceEl4.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_105620332015c1e6920373f779d0caef6f36ade06.png?width=2000&format=webply&optimize=medium');
                    sourceEl4.setAttribute('media', '(min-width: 600px)');
                  pictureEl2.append(sourceEl4);

                    const sourceEl5 = document.createElement('source');
                    sourceEl5.setAttribute('type', 'image/webp');
                    sourceEl5.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_105620332015c1e6920373f779d0caef6f36ade06.png?width=750&format=webply&optimize=medium');
                  pictureEl2.append(sourceEl5);

                    const sourceEl6 = document.createElement('source');
                    sourceEl6.setAttribute('type', 'image/png');
                    sourceEl6.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_105620332015c1e6920373f779d0caef6f36ade06.png?width=2000&format=png&optimize=medium');
                    sourceEl6.setAttribute('media', '(min-width: 600px)');
                  pictureEl2.append(sourceEl6);

                    const imgEl2 = document.createElement('img');
                    imgEl2.setAttribute('loading', 'lazy');
                    imgEl2.setAttribute('alt', '');
                    imgEl2.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_105620332015c1e6920373f779d0caef6f36ade06.png?width=750&format=png&optimize=medium');
                    imgEl2.setAttribute('width', '26');
                    imgEl2.setAttribute('height', '26');
                  pictureEl2.append(imgEl2);
                pEl6.append(pictureEl2);
              tdEl3.append(pEl6);

                const pEl7 = document.createElement('p');
                pEl7.textContent = 'Term Plans with Return';
              tdEl3.append(pEl7);

                const h3El3 = document.createElement('h3');
                h3El3.setAttribute('id', 'multiple-options');
                h3El3.textContent = 'Multiple Options';
              tdEl3.append(h3El3);
            trEl.append(tdEl3);

              const tdEl4 = document.createElement('td');
              tdEl4.setAttribute('class', 'insure-card-cell');

                const aEl3 = document.createElement('a');
                aEl3.setAttribute('class', 'insure-card-link');
                aEl3.setAttribute('href', 'https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=39663');

                  const pEl8 = document.createElement('p');

                    const pictureEl3 = document.createElement('picture');

                      const sourceEl7 = document.createElement('source');
                      sourceEl7.setAttribute('type', 'image/webp');
                      sourceEl7.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1a7563486f92ac8686e1f9fee55575b9a2b5038d2.png?width=2000&format=webply&optimize=medium');
                      sourceEl7.setAttribute('media', '(min-width: 600px)');
                    pictureEl3.append(sourceEl7);

                      const sourceEl8 = document.createElement('source');
                      sourceEl8.setAttribute('type', 'image/webp');
                      sourceEl8.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1a7563486f92ac8686e1f9fee55575b9a2b5038d2.png?width=750&format=webply&optimize=medium');
                    pictureEl3.append(sourceEl8);

                      const sourceEl9 = document.createElement('source');
                      sourceEl9.setAttribute('type', 'image/png');
                      sourceEl9.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1a7563486f92ac8686e1f9fee55575b9a2b5038d2.png?width=2000&format=png&optimize=medium');
                      sourceEl9.setAttribute('media', '(min-width: 600px)');
                    pictureEl3.append(sourceEl9);

                      const imgEl3 = document.createElement('img');
                      imgEl3.setAttribute('loading', 'lazy');
                      imgEl3.setAttribute('alt', '');
                      imgEl3.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1a7563486f92ac8686e1f9fee55575b9a2b5038d2.png?width=750&format=png&optimize=medium');
                      imgEl3.setAttribute('width', '20');
                      imgEl3.setAttribute('height', '21');
                    pictureEl3.append(imgEl3);
                  pEl8.append(pictureEl3);
                aEl3.append(pEl8);

                  const pEl9 = document.createElement('p');
                  pEl9.textContent = 'Term Plan for Salaried';
                aEl3.append(pEl9);

                  const h3El4 = document.createElement('h3');
                  h3El4.setAttribute('id', 'on-1--year-premiums');
                  h3El4.textContent = 'on 1 year premiums';
                aEl3.append(h3El4);

                  const pEl10 = document.createElement('p');
                  pEl10.setAttribute('class', 'insure-pop');

                    const strongEl2 = document.createElement('strong');
                    strongEl2.textContent = 'Upto 15% off';
                  pEl10.append(strongEl2);
                aEl3.append(pEl10);
              tdEl4.append(aEl3);
            trEl.append(tdEl4);

              const tdEl5 = document.createElement('td');
              tdEl5.setAttribute('class', 'insure-card-cell');

                const aEl4 = document.createElement('a');
                aEl4.setAttribute('class', 'insure-card-link');
                aEl4.setAttribute('href', 'https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=41118&persona=Working_Women');

                  const pEl11 = document.createElement('p');

                    const pictureEl4 = document.createElement('picture');

                      const sourceEl10 = document.createElement('source');
                      sourceEl10.setAttribute('type', 'image/webp');
                      sourceEl10.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15f81f55e5e1403a28b14f38f66716a3febba7dd6.png?width=2000&format=webply&optimize=medium');
                      sourceEl10.setAttribute('media', '(min-width: 600px)');
                    pictureEl4.append(sourceEl10);

                      const sourceEl11 = document.createElement('source');
                      sourceEl11.setAttribute('type', 'image/webp');
                      sourceEl11.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15f81f55e5e1403a28b14f38f66716a3febba7dd6.png?width=750&format=webply&optimize=medium');
                    pictureEl4.append(sourceEl11);

                      const sourceEl12 = document.createElement('source');
                      sourceEl12.setAttribute('type', 'image/png');
                      sourceEl12.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15f81f55e5e1403a28b14f38f66716a3febba7dd6.png?width=2000&format=png&optimize=medium');
                      sourceEl12.setAttribute('media', '(min-width: 600px)');
                    pictureEl4.append(sourceEl12);

                      const imgEl4 = document.createElement('img');
                      imgEl4.setAttribute('loading', 'lazy');
                      imgEl4.setAttribute('alt', '');
                      imgEl4.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_15f81f55e5e1403a28b14f38f66716a3febba7dd6.png?width=750&format=png&optimize=medium');
                      imgEl4.setAttribute('width', '20');
                      imgEl4.setAttribute('height', '20');
                    pictureEl4.append(imgEl4);
                  pEl11.append(pictureEl4);
                aEl4.append(pEl11);

                  const pEl12 = document.createElement('p');
                  pEl12.textContent = 'Term Insurance for Women';
                aEl4.append(pEl12);

                  const h3El5 = document.createElement('h3');
                  h3El5.setAttribute('id', 'flat-15-discount');
                  h3El5.textContent = 'Flat 15% Discount';
                aEl4.append(h3El5);

                  const pEl13 = document.createElement('p');
                  pEl13.setAttribute('class', 'insure-pop');

                    const strongEl3 = document.createElement('strong');
                    strongEl3.textContent = 'New';
                  pEl13.append(strongEl3);
                aEl4.append(pEl13);
              tdEl5.append(aEl4);
            trEl.append(tdEl5);
          tbodyEl.append(trEl);

            const trEl2 = document.createElement('tr');
            trEl2.setAttribute('class', 'insure-card-row');

              const tdEl6 = document.createElement('td');
              tdEl6.setAttribute('class', 'insure-card-cell');

                const aEl5 = document.createElement('a');
                aEl5.setAttribute('class', 'insure-card-link');
                aEl5.setAttribute('href', 'https://www.iciciprulife.com/child-insurance/smart-kid-growth-plan-calculator.html?UID=37854');

                  const pEl14 = document.createElement('p');

                    const pictureEl5 = document.createElement('picture');

                      const sourceEl13 = document.createElement('source');
                      sourceEl13.setAttribute('type', 'image/webp');
                      sourceEl13.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15065b5ae42601ef0cfef46eeddcdcd9818dd8e56.png?width=2000&format=webply&optimize=medium');
                      sourceEl13.setAttribute('media', '(min-width: 600px)');
                    pictureEl5.append(sourceEl13);

                      const sourceEl14 = document.createElement('source');
                      sourceEl14.setAttribute('type', 'image/webp');
                      sourceEl14.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15065b5ae42601ef0cfef46eeddcdcd9818dd8e56.png?width=750&format=webply&optimize=medium');
                    pictureEl5.append(sourceEl14);

                      const sourceEl15 = document.createElement('source');
                      sourceEl15.setAttribute('type', 'image/png');
                      sourceEl15.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_15065b5ae42601ef0cfef46eeddcdcd9818dd8e56.png?width=2000&format=png&optimize=medium');
                      sourceEl15.setAttribute('media', '(min-width: 600px)');
                    pictureEl5.append(sourceEl15);

                      const imgEl5 = document.createElement('img');
                      imgEl5.setAttribute('loading', 'lazy');
                      imgEl5.setAttribute('alt', '');
                      imgEl5.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_15065b5ae42601ef0cfef46eeddcdcd9818dd8e56.png?width=750&format=png&optimize=medium');
                      imgEl5.setAttribute('width', '28');
                      imgEl5.setAttribute('height', '28');
                    pictureEl5.append(imgEl5);
                  pEl14.append(pictureEl5);
                aEl5.append(pEl14);

                  const pEl15 = document.createElement('p');
                  pEl15.textContent = 'Child Plan';
                aEl5.append(pEl15);

                  const h3El6 = document.createElement('h3');
                  h3El6.setAttribute('id', 'premium-waiver-benefit');
                  h3El6.textContent = 'Premium Waiver Benefit';
                aEl5.append(h3El6);

                  const pEl16 = document.createElement('p');
                  pEl16.setAttribute('class', 'insure-pop');

                    const strongEl4 = document.createElement('strong');
                    strongEl4.textContent = 'Trending';
                  pEl16.append(strongEl4);
                aEl5.append(pEl16);
              tdEl6.append(aEl5);
            trEl2.append(tdEl6);

              const tdEl7 = document.createElement('td');
              tdEl7.setAttribute('class', 'insure-card-cell');

                const pEl17 = document.createElement('p');

                  const pictureEl6 = document.createElement('picture');

                    const sourceEl16 = document.createElement('source');
                    sourceEl16.setAttribute('type', 'image/webp');
                    sourceEl16.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_167651a3ba87b89a78d42f56150c4c753fc2e13ee.png?width=2000&format=webply&optimize=medium');
                    sourceEl16.setAttribute('media', '(min-width: 600px)');
                  pictureEl6.append(sourceEl16);

                    const sourceEl17 = document.createElement('source');
                    sourceEl17.setAttribute('type', 'image/webp');
                    sourceEl17.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_167651a3ba87b89a78d42f56150c4c753fc2e13ee.png?width=750&format=webply&optimize=medium');
                  pictureEl6.append(sourceEl17);

                    const sourceEl18 = document.createElement('source');
                    sourceEl18.setAttribute('type', 'image/png');
                    sourceEl18.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_167651a3ba87b89a78d42f56150c4c753fc2e13ee.png?width=2000&format=png&optimize=medium');
                    sourceEl18.setAttribute('media', '(min-width: 600px)');
                  pictureEl6.append(sourceEl18);

                    const imgEl6 = document.createElement('img');
                    imgEl6.setAttribute('loading', 'lazy');
                    imgEl6.setAttribute('alt', '');
                    imgEl6.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_167651a3ba87b89a78d42f56150c4c753fc2e13ee.png?width=750&format=png&optimize=medium');
                    imgEl6.setAttribute('width', '20');
                    imgEl6.setAttribute('height', '20');
                  pictureEl6.append(imgEl6);
                pEl17.append(pictureEl6);
              tdEl7.append(pEl17);

                const pEl18 = document.createElement('p');
                pEl18.textContent = 'Retirement / Pension Plans';
              tdEl7.append(pEl18);

                const h3El7 = document.createElement('h3');
                h3El7.setAttribute('id', 'lifelong-income');
                h3El7.textContent = 'Lifelong Income';
              tdEl7.append(h3El7);
            trEl2.append(tdEl7);

              const tdEl8 = document.createElement('td');
              tdEl8.setAttribute('class', 'insure-card-cell');

                const pEl19 = document.createElement('p');

                  const pictureEl7 = document.createElement('picture');

                    const sourceEl19 = document.createElement('source');
                    sourceEl19.setAttribute('type', 'image/webp');
                    sourceEl19.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1bcb9aa19fa58f6ddd410b8831aef1d53a62aeb79.png?width=2000&format=webply&optimize=medium');
                    sourceEl19.setAttribute('media', '(min-width: 600px)');
                  pictureEl7.append(sourceEl19);

                    const sourceEl20 = document.createElement('source');
                    sourceEl20.setAttribute('type', 'image/webp');
                    sourceEl20.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1bcb9aa19fa58f6ddd410b8831aef1d53a62aeb79.png?width=750&format=webply&optimize=medium');
                  pictureEl7.append(sourceEl20);

                    const sourceEl21 = document.createElement('source');
                    sourceEl21.setAttribute('type', 'image/png');
                    sourceEl21.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1bcb9aa19fa58f6ddd410b8831aef1d53a62aeb79.png?width=2000&format=png&optimize=medium');
                    sourceEl21.setAttribute('media', '(min-width: 600px)');
                  pictureEl7.append(sourceEl21);

                    const imgEl7 = document.createElement('img');
                    imgEl7.setAttribute('loading', 'lazy');
                    imgEl7.setAttribute('alt', '');
                    imgEl7.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1bcb9aa19fa58f6ddd410b8831aef1d53a62aeb79.png?width=750&format=png&optimize=medium');
                    imgEl7.setAttribute('width', '22');
                    imgEl7.setAttribute('height', '22');
                  pictureEl7.append(imgEl7);
                pEl19.append(pictureEl7);
              tdEl8.append(pEl19);

                const pEl20 = document.createElement('p');
                pEl20.textContent = 'Guaranteed Return Plan';
              tdEl8.append(pEl20);

                const h3El8 = document.createElement('h3');
                h3El8.setAttribute('id', '6x--tax-free-returns');
                h3El8.textContent = '6X Tax-Free* returns';
              tdEl8.append(h3El8);
            trEl2.append(tdEl8);

              const tdEl9 = document.createElement('td');
              tdEl9.setAttribute('class', 'insure-card-cell');

                const aEl6 = document.createElement('a');
                aEl6.setAttribute('class', 'insure-card-link');
                aEl6.setAttribute('href', 'https://www.iciciprulife.com/protection-saving-plans/buy-icici-pru-signature-capital-guarantee-two.html?UID=39552');

                  const pEl21 = document.createElement('p');

                    const pictureEl8 = document.createElement('picture');

                      const sourceEl22 = document.createElement('source');
                      sourceEl22.setAttribute('type', 'image/webp');
                      sourceEl22.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174daeab17e949d73b76802b9911dbf21a1194f47.png?width=2000&format=webply&optimize=medium');
                      sourceEl22.setAttribute('media', '(min-width: 600px)');
                    pictureEl8.append(sourceEl22);

                      const sourceEl23 = document.createElement('source');
                      sourceEl23.setAttribute('type', 'image/webp');
                      sourceEl23.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174daeab17e949d73b76802b9911dbf21a1194f47.png?width=750&format=webply&optimize=medium');
                    pictureEl8.append(sourceEl23);

                      const sourceEl24 = document.createElement('source');
                      sourceEl24.setAttribute('type', 'image/png');
                      sourceEl24.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174daeab17e949d73b76802b9911dbf21a1194f47.png?width=2000&format=png&optimize=medium');
                      sourceEl24.setAttribute('media', '(min-width: 600px)');
                    pictureEl8.append(sourceEl24);

                      const imgEl8 = document.createElement('img');
                      imgEl8.setAttribute('loading', 'lazy');
                      imgEl8.setAttribute('alt', '');
                      imgEl8.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_174daeab17e949d73b76802b9911dbf21a1194f47.png?width=750&format=png&optimize=medium');
                      imgEl8.setAttribute('width', '28');
                      imgEl8.setAttribute('height', '28');
                    pictureEl8.append(imgEl8);
                  pEl21.append(pictureEl8);
                aEl6.append(pEl21);

                  const pEl22 = document.createElement('p');
                  pEl22.textContent = 'ULIP with Capital Guarantee';
                aEl6.append(pEl22);

                  const h3El9 = document.createElement('h3');
                  h3El9.setAttribute('id', 'safety--growth');
                  h3El9.textContent = 'Safety + Growth';
                aEl6.append(h3El9);
              tdEl9.append(aEl6);
            trEl2.append(tdEl9);

              const tdEl10 = document.createElement('td');
              tdEl10.setAttribute('class', 'insure-card-cell');

                const aEl7 = document.createElement('a');
                aEl7.setAttribute('class', 'insure-card-link');
                aEl7.setAttribute('href', 'https://www.iciciprulife.com/insurance-plans/buy-life-insurance-online.html?UID=1403');

                  const pEl23 = document.createElement('p');

                    const pictureEl9 = document.createElement('picture');

                      const sourceEl25 = document.createElement('source');
                      sourceEl25.setAttribute('type', 'image/webp');
                      sourceEl25.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_18e552e9d5f6e9f8b769fc810800c45ccf33553bb.png?width=2000&format=webply&optimize=medium');
                      sourceEl25.setAttribute('media', '(min-width: 600px)');
                    pictureEl9.append(sourceEl25);

                      const sourceEl26 = document.createElement('source');
                      sourceEl26.setAttribute('type', 'image/webp');
                      sourceEl26.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_18e552e9d5f6e9f8b769fc810800c45ccf33553bb.png?width=750&format=webply&optimize=medium');
                    pictureEl9.append(sourceEl26);

                      const sourceEl27 = document.createElement('source');
                      sourceEl27.setAttribute('type', 'image/png');
                      sourceEl27.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_18e552e9d5f6e9f8b769fc810800c45ccf33553bb.png?width=2000&format=png&optimize=medium');
                      sourceEl27.setAttribute('media', '(min-width: 600px)');
                    pictureEl9.append(sourceEl27);

                      const imgEl9 = document.createElement('img');
                      imgEl9.setAttribute('loading', 'lazy');
                      imgEl9.setAttribute('alt', '');
                      imgEl9.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_18e552e9d5f6e9f8b769fc810800c45ccf33553bb.png?width=750&format=png&optimize=medium');
                      imgEl9.setAttribute('width', '28');
                      imgEl9.setAttribute('height', '28');
                    pictureEl9.append(imgEl9);
                  pEl23.append(pictureEl9);
                aEl7.append(pEl23);

                  const pEl24 = document.createElement('p');
                  pEl24.textContent = 'More Plans';
                aEl7.append(pEl24);

                  const pEl25 = document.createElement('p');

                    const pictureEl10 = document.createElement('picture');

                      const sourceEl28 = document.createElement('source');
                      sourceEl28.setAttribute('type', 'image/webp');
                      sourceEl28.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1384a16d631a323a59b5d86fab23bae1ddaa362bb.png?width=2000&format=webply&optimize=medium');
                      sourceEl28.setAttribute('media', '(min-width: 600px)');
                    pictureEl10.append(sourceEl28);

                      const sourceEl29 = document.createElement('source');
                      sourceEl29.setAttribute('type', 'image/webp');
                      sourceEl29.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1384a16d631a323a59b5d86fab23bae1ddaa362bb.png?width=750&format=webply&optimize=medium');
                    pictureEl10.append(sourceEl29);

                      const sourceEl30 = document.createElement('source');
                      sourceEl30.setAttribute('type', 'image/png');
                      sourceEl30.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1384a16d631a323a59b5d86fab23bae1ddaa362bb.png?width=2000&format=png&optimize=medium');
                      sourceEl30.setAttribute('media', '(min-width: 600px)');
                    pictureEl10.append(sourceEl30);

                      const imgEl10 = document.createElement('img');
                      imgEl10.setAttribute('loading', 'lazy');
                      imgEl10.setAttribute('alt', '');
                      imgEl10.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1384a16d631a323a59b5d86fab23bae1ddaa362bb.png?width=750&format=png&optimize=medium');
                      imgEl10.setAttribute('width', '24');
                      imgEl10.setAttribute('height', '24');
                    pictureEl10.append(imgEl10);
                  pEl25.append(pictureEl10);
                aEl7.append(pEl25);
              tdEl10.append(aEl7);
            trEl2.append(tdEl10);
          tbodyEl.append(trEl2);
        tableEl.append(tbodyEl);
      divEl3.append(tableEl);
    divEl2.append(divEl3);

      const divEl4 = document.createElement('div');
      divEl4.setAttribute('class', 'set-b');

        const pEl26 = document.createElement('p');
        pEl26.textContent = 'Existing Customer Corner';
      divEl4.append(pEl26);

        const tableEl2 = document.createElement('table');
        tableEl2.setAttribute('class', 'insure-table-2');

          const tbodyEl2 = document.createElement('tbody');

            const trEl3 = document.createElement('tr');
            trEl3.setAttribute('class', 'insure-row');

              const tdEl11 = document.createElement('td');
              tdEl11.setAttribute('class', 'insure-cell');

                const aEl8 = document.createElement('a');
                aEl8.setAttribute('class', 'insure-link');
                aEl8.setAttribute('href', 'https://www.iciciprulife.com/services/pay-life-insurance-premium-online.html');

                  const pEl27 = document.createElement('p');

                    const pictureEl11 = document.createElement('picture');

                      const sourceEl31 = document.createElement('source');
                      sourceEl31.setAttribute('type', 'image/webp');
                      sourceEl31.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174355d3a86923c95977510dd6c9727878d66b722.png?width=2000&format=webply&optimize=medium');
                      sourceEl31.setAttribute('media', '(min-width: 600px)');
                    pictureEl11.append(sourceEl31);

                      const sourceEl32 = document.createElement('source');
                      sourceEl32.setAttribute('type', 'image/webp');
                      sourceEl32.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174355d3a86923c95977510dd6c9727878d66b722.png?width=750&format=webply&optimize=medium');
                    pictureEl11.append(sourceEl32);

                      const sourceEl33 = document.createElement('source');
                      sourceEl33.setAttribute('type', 'image/png');
                      sourceEl33.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_174355d3a86923c95977510dd6c9727878d66b722.png?width=2000&format=png&optimize=medium');
                      sourceEl33.setAttribute('media', '(min-width: 600px)');
                    pictureEl11.append(sourceEl33);

                      const imgEl11 = document.createElement('img');
                      imgEl11.setAttribute('loading', 'lazy');
                      imgEl11.setAttribute('alt', '');
                      imgEl11.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_174355d3a86923c95977510dd6c9727878d66b722.png?width=750&format=png&optimize=medium');
                      imgEl11.setAttribute('width', '12');
                      imgEl11.setAttribute('height', '15');
                    pictureEl11.append(imgEl11);
                  pEl27.append(pictureEl11);
                aEl8.append(pEl27);

                  const pEl28 = document.createElement('p');
                  pEl28.textContent = 'Pay Premium';
                aEl8.append(pEl28);
              tdEl11.append(aEl8);
            trEl3.append(tdEl11);

              const tdEl12 = document.createElement('td');
              tdEl12.setAttribute('class', 'insure-cell');

                const aEl9 = document.createElement('a');
                aEl9.setAttribute('class', 'insure-link');
                aEl9.setAttribute('href', 'https://www.iciciprulife.com/services/top-up-insurance-policy.html');

                  const pEl29 = document.createElement('p');

                    const pictureEl12 = document.createElement('picture');

                      const sourceEl34 = document.createElement('source');
                      sourceEl34.setAttribute('type', 'image/webp');
                      sourceEl34.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_16e311049314fceeab4c66dea76bbdf4652d1795f.png?width=2000&format=webply&optimize=medium');
                      sourceEl34.setAttribute('media', '(min-width: 600px)');
                    pictureEl12.append(sourceEl34);

                      const sourceEl35 = document.createElement('source');
                      sourceEl35.setAttribute('type', 'image/webp');
                      sourceEl35.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_16e311049314fceeab4c66dea76bbdf4652d1795f.png?width=750&format=webply&optimize=medium');
                    pictureEl12.append(sourceEl35);

                      const sourceEl36 = document.createElement('source');
                      sourceEl36.setAttribute('type', 'image/png');
                      sourceEl36.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_16e311049314fceeab4c66dea76bbdf4652d1795f.png?width=2000&format=png&optimize=medium');
                      sourceEl36.setAttribute('media', '(min-width: 600px)');
                    pictureEl12.append(sourceEl36);

                      const imgEl12 = document.createElement('img');
                      imgEl12.setAttribute('loading', 'lazy');
                      imgEl12.setAttribute('alt', '');
                      imgEl12.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_16e311049314fceeab4c66dea76bbdf4652d1795f.png?width=750&format=png&optimize=medium');
                      imgEl12.setAttribute('width', '17');
                      imgEl12.setAttribute('height', '16');
                    pictureEl12.append(imgEl12);
                  pEl29.append(pictureEl12);
                aEl9.append(pEl29);

                  const pEl30 = document.createElement('p');
                  pEl30.textContent = 'Top up';
                aEl9.append(pEl30);
              tdEl12.append(aEl9);
            trEl3.append(tdEl12);
          tbodyEl2.append(trEl3);

            const trEl4 = document.createElement('tr');
            trEl4.setAttribute('class', 'insure-row');

              const tdEl13 = document.createElement('td');
              tdEl13.setAttribute('class', 'insure-cell');

                const aEl10 = document.createElement('a');
                aEl10.setAttribute('class', 'insure-link');
                aEl10.setAttribute('href', 'https://www.iciciprulife.com/services/standing-instructions.html');

                  const pEl31 = document.createElement('p');

                    const pictureEl13 = document.createElement('picture');

                      const sourceEl37 = document.createElement('source');
                      sourceEl37.setAttribute('type', 'image/webp');
                      sourceEl37.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b111cf3e62802e86846f918e102d8bfdfdb5b448.png?width=2000&format=webply&optimize=medium');
                      sourceEl37.setAttribute('media', '(min-width: 600px)');
                    pictureEl13.append(sourceEl37);

                      const sourceEl38 = document.createElement('source');
                      sourceEl38.setAttribute('type', 'image/webp');
                      sourceEl38.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b111cf3e62802e86846f918e102d8bfdfdb5b448.png?width=750&format=webply&optimize=medium');
                    pictureEl13.append(sourceEl38);

                      const sourceEl39 = document.createElement('source');
                      sourceEl39.setAttribute('type', 'image/png');
                      sourceEl39.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b111cf3e62802e86846f918e102d8bfdfdb5b448.png?width=2000&format=png&optimize=medium');
                      sourceEl39.setAttribute('media', '(min-width: 600px)');
                    pictureEl13.append(sourceEl39);

                      const imgEl13 = document.createElement('img');
                      imgEl13.setAttribute('loading', 'lazy');
                      imgEl13.setAttribute('alt', '');
                      imgEl13.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1b111cf3e62802e86846f918e102d8bfdfdb5b448.png?width=750&format=png&optimize=medium');
                      imgEl13.setAttribute('width', '22');
                      imgEl13.setAttribute('height', '21');
                    pictureEl13.append(imgEl13);
                  pEl31.append(pictureEl13);
                aEl10.append(pEl31);

                  const pEl32 = document.createElement('p');
                  pEl32.textContent = 'Auto Debit';
                aEl10.append(pEl32);
              tdEl13.append(aEl10);
            trEl4.append(tdEl13);

              const tdEl14 = document.createElement('td');
              tdEl14.setAttribute('class', 'insure-cell');

                const aEl11 = document.createElement('a');
                aEl11.setAttribute('class', 'insure-link');
                aEl11.setAttribute('href', 'https://customer.iciciprulife.com/csr/applyForLoan.htm?execution=e7s1&_ga=2.161013050.621405321.1733118888-1928831028.1730108556');

                  const pEl33 = document.createElement('p');

                    const pictureEl14 = document.createElement('picture');

                      const sourceEl40 = document.createElement('source');
                      sourceEl40.setAttribute('type', 'image/webp');
                      sourceEl40.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fb92b4c24aff3d807f7ed0e87270d063daeb0c63.png?width=2000&format=webply&optimize=medium');
                      sourceEl40.setAttribute('media', '(min-width: 600px)');
                    pictureEl14.append(sourceEl40);

                      const sourceEl41 = document.createElement('source');
                      sourceEl41.setAttribute('type', 'image/webp');
                      sourceEl41.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fb92b4c24aff3d807f7ed0e87270d063daeb0c63.png?width=750&format=webply&optimize=medium');
                    pictureEl14.append(sourceEl41);

                      const sourceEl42 = document.createElement('source');
                      sourceEl42.setAttribute('type', 'image/png');
                      sourceEl42.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fb92b4c24aff3d807f7ed0e87270d063daeb0c63.png?width=2000&format=png&optimize=medium');
                      sourceEl42.setAttribute('media', '(min-width: 600px)');
                    pictureEl14.append(sourceEl42);

                      const imgEl14 = document.createElement('img');
                      imgEl14.setAttribute('loading', 'lazy');
                      imgEl14.setAttribute('alt', '');
                      imgEl14.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1fb92b4c24aff3d807f7ed0e87270d063daeb0c63.png?width=750&format=png&optimize=medium');
                      imgEl14.setAttribute('width', '16');
                      imgEl14.setAttribute('height', '21');
                    pictureEl14.append(imgEl14);
                  pEl33.append(pictureEl14);
                aEl11.append(pEl33);

                  const pEl34 = document.createElement('p');
                  pEl34.textContent = 'Apply Loan';
                aEl11.append(pEl34);
              tdEl14.append(aEl11);
            trEl4.append(tdEl14);
          tbodyEl2.append(trEl4);
        tableEl2.append(tbodyEl2);
      divEl4.append(tableEl2);
    divEl2.append(divEl4);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}