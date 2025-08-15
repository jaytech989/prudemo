export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'footer block');
  divEl.setAttribute('data-block-name', 'footer');
  divEl.setAttribute('data-block-status', 'loaded');

    const divEl2 = document.createElement('div');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'section ipru-footer-container');
      divEl3.setAttribute('data-section-status', 'loaded');
      divEl3.setAttribute('style', '');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'ipru-footer-wrapper');

          const divEl5 = document.createElement('div');
          divEl5.setAttribute('class', 'ipru-footer block');
          divEl5.setAttribute('data-block-name', 'ipru-footer');
          divEl5.setAttribute('data-block-status', 'loaded');

            const divEl6 = document.createElement('div');
            divEl6.setAttribute('class', 'footer-section');

              const divEl7 = document.createElement('div');
              divEl7.setAttribute('class', 'col-1');

                const h3El = document.createElement('h3');
                h3El.setAttribute('id', 'product-links');
                h3El.setAttribute('class', 'col-heading');
                h3El.textContent = 'Product Links';
              divEl7.append(h3El);

                const ulEl = document.createElement('ul');
                ulEl.setAttribute('class', 'col-list-lev-1');

                  const liEl = document.createElement('li');

                    const aEl = document.createElement('a');
                    aEl.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl.setAttribute('title', 'Buy Online');
                    aEl.textContent = 'Buy Online';
                  liEl.append(aEl);
                ulEl.append(liEl);

                  const liEl2 = document.createElement('li');

                    const aEl2 = document.createElement('a');
                    aEl2.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl2.setAttribute('title', 'Life Insurance');
                    aEl2.textContent = 'Life Insurance';
                  liEl2.append(aEl2);
                ulEl.append(liEl2);

                  const liEl3 = document.createElement('li');

                    const aEl3 = document.createElement('a');
                    aEl3.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl3.setAttribute('title', '1 Crore Term Insurance');
                    aEl3.textContent = '1 Crore Term Insurance';
                  liEl3.append(aEl3);
                ulEl.append(liEl3);

                  const liEl4 = document.createElement('li');

                    const aEl4 = document.createElement('a');
                    aEl4.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl4.setAttribute('title', 'Term Insurance');
                    aEl4.textContent = 'Term Insurance';
                  liEl4.append(aEl4);

                    const olEl = document.createElement('ol');
                    olEl.setAttribute('class', 'col-list-lev-2');

                      const liEl5 = document.createElement('li');

                        const aEl5 = document.createElement('a');
                        aEl5.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl5.setAttribute('title', 'ICICI Pru iProtect Smart');
                        aEl5.textContent = 'ICICI Pru iProtect Smart';
                      liEl5.append(aEl5);
                    olEl.append(liEl5);

                      const liEl6 = document.createElement('li');

                        const aEl6 = document.createElement('a');
                        aEl6.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl6.setAttribute('title', 'ICICI Pru Protect N Gain');
                        aEl6.textContent = 'ICICI Pru Protect N Gain';
                      liEl6.append(aEl6);
                    olEl.append(liEl6);
                  liEl4.append(olEl);
                ulEl.append(liEl4);

                  const liEl7 = document.createElement('li');

                    const aEl7 = document.createElement('a');
                    aEl7.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl7.setAttribute('title', 'Unit Linked Insurance Plans (ULIPs)');
                    aEl7.textContent = 'Unit Linked Insurance Plans (ULIPs)';
                  liEl7.append(aEl7);

                    const olEl2 = document.createElement('ol');
                    olEl2.setAttribute('class', 'col-list-lev-2');

                      const liEl8 = document.createElement('li');

                        const aEl8 = document.createElement('a');
                        aEl8.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl8.setAttribute('title', 'ICICI Pru Signature');
                        aEl8.textContent = 'ICICI Pru Signature';
                      liEl8.append(aEl8);
                    olEl2.append(liEl8);

                      const liEl9 = document.createElement('li');

                        const aEl9 = document.createElement('a');
                        aEl9.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl9.setAttribute('title', 'ICICI Pru LifeTime Classic');
                        aEl9.textContent = 'ICICI Pru LifeTime Classic';
                      liEl9.append(aEl9);
                    olEl2.append(liEl9);

                      const liEl10 = document.createElement('li');

                        const aEl10 = document.createElement('a');
                        aEl10.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl10.setAttribute('title', 'ICICI Pru1 Wealth');
                        aEl10.textContent = 'ICICI Pru1 Wealth';
                      liEl10.append(aEl10);
                    olEl2.append(liEl10);
                  liEl7.append(olEl2);
                ulEl.append(liEl7);

                  const liEl11 = document.createElement('li');

                    const aEl11 = document.createElement('a');
                    aEl11.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl11.setAttribute('title', 'Guaranteed Return Plans');
                    aEl11.textContent = 'Guaranteed Return Plans';
                  liEl11.append(aEl11);

                    const olEl3 = document.createElement('ol');
                    olEl3.setAttribute('class', 'col-list-lev-2');

                      const liEl12 = document.createElement('li');

                        const aEl12 = document.createElement('a');
                        aEl12.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl12.setAttribute('title', 'ICICI Pru GIFT Pro');
                        aEl12.textContent = 'ICICI Pru GIFT Pro';
                      liEl12.append(aEl12);
                    olEl3.append(liEl12);

                      const liEl13 = document.createElement('li');

                        const aEl13 = document.createElement('a');
                        aEl13.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl13.setAttribute('title', 'ICICI Pru Assured Savings Insurance Plan');
                        aEl13.textContent = 'ICICI Pru Assured Savings Insurance Plan';
                      liEl13.append(aEl13);
                    olEl3.append(liEl13);
                  liEl11.append(olEl3);
                ulEl.append(liEl11);

                  const liEl14 = document.createElement('li');

                    const aEl14 = document.createElement('a');
                    aEl14.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl14.setAttribute('title', 'Saving Plans');
                    aEl14.textContent = 'Saving Plans';
                  liEl14.append(aEl14);

                    const olEl4 = document.createElement('ol');
                    olEl4.setAttribute('class', 'col-list-lev-2');

                      const liEl15 = document.createElement('li');

                        const aEl15 = document.createElement('a');
                        aEl15.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl15.setAttribute('title', 'ICICI Pru Savings Suraksha');
                        aEl15.textContent = 'ICICI Pru Savings Suraksha';
                      liEl15.append(aEl15);
                    olEl4.append(liEl15);

                      const liEl16 = document.createElement('li');

                        const aEl16 = document.createElement('a');
                        aEl16.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl16.setAttribute('title', 'ICICI Pru Sukh Samruddhi (New)');
                        aEl16.textContent = 'ICICI Pru Sukh Samruddhi (New)';
                      liEl16.append(aEl16);
                    olEl4.append(liEl16);

                      const liEl17 = document.createElement('li');

                        const aEl17 = document.createElement('a');
                        aEl17.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl17.setAttribute('title', 'ICICI Pru Future Perfect');
                        aEl17.textContent = 'ICICI Pru Future Perfect';
                      liEl17.append(aEl17);
                    olEl4.append(liEl17);

                      const liEl18 = document.createElement('li');

                        const aEl18 = document.createElement('a');
                        aEl18.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl18.setAttribute('title', 'ICICI Pru Gold');
                        aEl18.textContent = 'ICICI Pru Gold';
                      liEl18.append(aEl18);
                    olEl4.append(liEl18);
                  liEl14.append(olEl4);
                ulEl.append(liEl14);

                  const liEl19 = document.createElement('li');

                    const aEl19 = document.createElement('a');
                    aEl19.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl19.setAttribute('title', 'Retirement Plans');
                    aEl19.textContent = 'Retirement Plans';
                  liEl19.append(aEl19);

                    const olEl5 = document.createElement('ol');
                    olEl5.setAttribute('class', 'col-list-lev-2');

                      const liEl20 = document.createElement('li');

                        const aEl20 = document.createElement('a');
                        aEl20.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl20.setAttribute('title', 'ICICI Pru Signature Pension (ULIP) (New)');
                        aEl20.textContent = 'ICICI Pru Signature Pension (ULIP) (New)';
                      liEl20.append(aEl20);
                    olEl5.append(liEl20);

                      const liEl21 = document.createElement('li');

                        const aEl21 = document.createElement('a');
                        aEl21.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl21.setAttribute('title', 'ICICI Pru Guaranteed Pension Plan Flexi (New)');
                        aEl21.textContent = 'ICICI Pru Guaranteed Pension Plan Flexi (New)';
                      liEl21.append(aEl21);
                    olEl5.append(liEl21);
                  liEl19.append(olEl5);
                ulEl.append(liEl19);

                  const liEl22 = document.createElement('li');

                    const aEl22 = document.createElement('a');
                    aEl22.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl22.setAttribute('title', 'Child Education Insurance Plans');
                    aEl22.textContent = 'Child Education Insurance Plans';
                  liEl22.append(aEl22);

                    const olEl6 = document.createElement('ol');
                    olEl6.setAttribute('class', 'col-list-lev-2');

                      const liEl23 = document.createElement('li');

                        const aEl23 = document.createElement('a');
                        aEl23.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl23.setAttribute('title', 'ICICI Pru Smartkid Plans');
                        aEl23.textContent = 'ICICI Pru Smartkid Plans';
                      liEl23.append(aEl23);
                    olEl6.append(liEl23);
                  liEl22.append(olEl6);
                ulEl.append(liEl22);

                  const liEl24 = document.createElement('li');

                    const aEl24 = document.createElement('a');
                    aEl24.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl24.setAttribute('title', 'Health Insurance Plans');
                    aEl24.textContent = 'Health Insurance Plans';
                  liEl24.append(aEl24);

                    const olEl7 = document.createElement('ol');
                    olEl7.setAttribute('class', 'col-list-lev-2');

                      const liEl25 = document.createElement('li');

                        const aEl25 = document.createElement('a');
                        aEl25.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl25.setAttribute('title', 'ICICI Pru iProtect Smart - Life & Health');
                        aEl25.textContent = 'ICICI Pru iProtect Smart - Life & Health';
                      liEl25.append(aEl25);
                    olEl7.append(liEl25);
                  liEl24.append(olEl7);
                ulEl.append(liEl24);

                  const liEl26 = document.createElement('li');

                    const aEl26 = document.createElement('a');
                    aEl26.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl26.setAttribute('title', 'Insta Plan');
                    aEl26.textContent = 'Insta Plan';
                  liEl26.append(aEl26);

                    const olEl8 = document.createElement('ol');
                    olEl8.setAttribute('class', 'col-list-lev-2');

                      const liEl27 = document.createElement('li');

                        const aEl27 = document.createElement('a');
                        aEl27.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl27.setAttribute('title', 'Insta Plan Calculator');
                        aEl27.textContent = 'Insta Plan Calculator';
                      liEl27.append(aEl27);
                    olEl8.append(liEl27);
                  liEl26.append(olEl8);
                ulEl.append(liEl26);

                  const liEl28 = document.createElement('li');

                    const aEl28 = document.createElement('a');
                    aEl28.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl28.setAttribute('title', 'What is Term Insurance?');
                    aEl28.textContent = 'What is Term Insurance?';
                  liEl28.append(aEl28);
                ulEl.append(liEl28);

                  const liEl29 = document.createElement('li');

                    const aEl29 = document.createElement('a');
                    aEl29.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl29.setAttribute('title', 'What is Health Insurance?');
                    aEl29.textContent = 'What is Health Insurance?';
                  liEl29.append(aEl29);
                ulEl.append(liEl29);

                  const liEl30 = document.createElement('li');

                    const aEl30 = document.createElement('a');
                    aEl30.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl30.setAttribute('title', 'What is Critical Illness Insurance?');
                    aEl30.textContent = 'What is Critical Illness Insurance?';
                  liEl30.append(aEl30);
                ulEl.append(liEl30);

                  const liEl31 = document.createElement('li');

                    const aEl31 = document.createElement('a');
                    aEl31.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl31.setAttribute('title', 'Term Insurance for NRI');
                    aEl31.textContent = 'Term Insurance for NRI';
                  liEl31.append(aEl31);
                ulEl.append(liEl31);

                  const liEl32 = document.createElement('li');

                    const aEl32 = document.createElement('a');
                    aEl32.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl32.setAttribute('title', 'Whole Life Insurance');
                    aEl32.textContent = 'Whole Life Insurance';
                  liEl32.append(aEl32);
                ulEl.append(liEl32);

                  const liEl33 = document.createElement('li');

                    const aEl33 = document.createElement('a');
                    aEl33.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl33.setAttribute('title', 'Money Back Policy');
                    aEl33.textContent = 'Money Back Policy';
                  liEl33.append(aEl33);
                ulEl.append(liEl33);
              divEl7.append(ulEl);
            divEl6.append(divEl7);

              const divEl8 = document.createElement('div');
              divEl8.setAttribute('class', 'col-2');

                const h3El2 = document.createElement('h3');
                h3El2.setAttribute('id', 'customer-service');
                h3El2.setAttribute('class', 'col-heading');

                  const aEl34 = document.createElement('a');
                  aEl34.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl34.setAttribute('title', 'Customer Service');
                  aEl34.textContent = 'Customer Service';
                h3El2.append(aEl34);
              divEl8.append(h3El2);

                const ulEl2 = document.createElement('ul');
                ulEl2.setAttribute('class', 'col-list-lev-1');

                  const liEl34 = document.createElement('li');

                    const aEl35 = document.createElement('a');
                    aEl35.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl35.setAttribute('title', 'Premium Payment');
                    aEl35.textContent = 'Premium Payment';
                  liEl34.append(aEl35);

                    const olEl9 = document.createElement('ol');
                    olEl9.setAttribute('class', 'col-list-lev-2');

                      const liEl35 = document.createElement('li');

                        const aEl36 = document.createElement('a');
                        aEl36.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl36.setAttribute('title', 'Pay Your First Premium');
                        aEl36.textContent = 'Pay Your First Premium';
                      liEl35.append(aEl36);
                    olEl9.append(liEl35);

                      const liEl36 = document.createElement('li');

                        const aEl37 = document.createElement('a');
                        aEl37.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl37.setAttribute('title', 'Pay Renewal Premium');
                        aEl37.textContent = 'Pay Renewal Premium';
                      liEl36.append(aEl37);
                    olEl9.append(liEl36);
                  liEl34.append(olEl9);
                ulEl2.append(liEl34);

                  const liEl37 = document.createElement('li');

                    const aEl38 = document.createElement('a');
                    aEl38.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl38.setAttribute('title', 'Download Statements');
                    aEl38.textContent = 'Download Statements';
                  liEl37.append(aEl38);

                    const olEl10 = document.createElement('ol');
                    olEl10.setAttribute('class', 'col-list-lev-2');

                      const liEl38 = document.createElement('li');

                        const aEl39 = document.createElement('a');
                        aEl39.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl39.setAttribute('title', 'e-Welcome kit/Policy Document');
                        aEl39.textContent = 'e-Welcome kit/Policy Document';
                      liEl38.append(aEl39);
                    olEl10.append(liEl38);

                      const liEl39 = document.createElement('li');

                        const aEl40 = document.createElement('a');
                        aEl40.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl40.setAttribute('title', 'Tax/Premium Paid Certificate');
                        aEl40.textContent = 'Tax/Premium Paid Certificate';
                      liEl39.append(aEl40);
                    olEl10.append(liEl39);

                      const liEl40 = document.createElement('li');

                        const aEl41 = document.createElement('a');
                        aEl41.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl41.setAttribute('title', 'Policy/Unit Statement');
                        aEl41.textContent = 'Policy/Unit Statement';
                      liEl40.append(aEl41);
                    olEl10.append(liEl40);
                  liEl37.append(olEl10);
                ulEl2.append(liEl37);

                  const liEl41 = document.createElement('li');

                    const aEl42 = document.createElement('a');
                    aEl42.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl42.setAttribute('title', 'Manage Your Funds');
                    aEl42.textContent = 'Manage Your Funds';
                  liEl41.append(aEl42);

                    const olEl11 = document.createElement('ol');
                    olEl11.setAttribute('class', 'col-list-lev-2');

                      const liEl42 = document.createElement('li');

                        const aEl43 = document.createElement('a');
                        aEl43.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl43.setAttribute('title', 'Check Fund Value');
                        aEl43.textContent = 'Check Fund Value';
                      liEl42.append(aEl43);
                    olEl11.append(liEl42);

                      const liEl43 = document.createElement('li');

                        const aEl44 = document.createElement('a');
                        aEl44.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl44.setAttribute('title', 'Switch Funds');
                        aEl44.textContent = 'Switch Funds';
                      liEl43.append(aEl44);
                    olEl11.append(liEl43);

                      const liEl44 = document.createElement('li');

                        const aEl45 = document.createElement('a');
                        aEl45.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl45.setAttribute('title', 'Top Up');
                        aEl45.textContent = 'Top Up';
                      liEl44.append(aEl45);
                    olEl11.append(liEl44);
                  liEl41.append(olEl11);
                ulEl2.append(liEl41);

                  const liEl45 = document.createElement('li');

                    const aEl46 = document.createElement('a');
                    aEl46.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl46.setAttribute('title', 'Update Profile Details');
                    aEl46.textContent = 'Update Profile Details';
                  liEl45.append(aEl46);

                    const olEl12 = document.createElement('ol');
                    olEl12.setAttribute('class', 'col-list-lev-2');

                      const liEl46 = document.createElement('li');

                        const aEl47 = document.createElement('a');
                        aEl47.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl47.setAttribute('title', 'Update Contact Details');
                        aEl47.textContent = 'Update Contact Details';
                      liEl46.append(aEl47);
                    olEl12.append(liEl46);

                      const liEl47 = document.createElement('li');

                        const aEl48 = document.createElement('a');
                        aEl48.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl48.setAttribute('title', 'Update PAN Details');
                        aEl48.textContent = 'Update PAN Details';
                      liEl47.append(aEl48);
                    olEl12.append(liEl47);

                      const liEl48 = document.createElement('li');

                        const aEl49 = document.createElement('a');
                        aEl49.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                        aEl49.setAttribute('title', 'Update Nominee Details');
                        aEl49.textContent = 'Update Nominee Details';
                      liEl48.append(aEl49);
                    olEl12.append(liEl48);
                  liEl45.append(olEl12);
                ulEl2.append(liEl45);
              divEl8.append(ulEl2);

                const h3El3 = document.createElement('h3');
                h3El3.setAttribute('id', 'site-map');
                h3El3.setAttribute('class', 'col-heading');

                  const aEl50 = document.createElement('a');
                  aEl50.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl50.setAttribute('title', 'Site Map');
                  aEl50.textContent = 'Site Map';
                h3El3.append(aEl50);
              divEl8.append(h3El3);

                const h3El4 = document.createElement('h3');
                h3El4.setAttribute('id', 'tools-and-calculator');
                h3El4.setAttribute('class', 'col-heading');

                  const aEl51 = document.createElement('a');
                  aEl51.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl51.setAttribute('title', 'Tools and Calculator');
                  aEl51.textContent = 'Tools and Calculator';
                h3El4.append(aEl51);
              divEl8.append(h3El4);

                const ulEl3 = document.createElement('ul');
                ulEl3.setAttribute('class', 'col-list-lev-1');

                  const liEl49 = document.createElement('li');

                    const aEl52 = document.createElement('a');
                    aEl52.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl52.setAttribute('title', 'Term Insurance Premium Calculator');
                    aEl52.textContent = 'Term Insurance Premium Calculator';
                  liEl49.append(aEl52);
                ulEl3.append(liEl49);

                  const liEl50 = document.createElement('li');

                    const aEl53 = document.createElement('a');
                    aEl53.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl53.setAttribute('title', 'Income Tax Calculator');
                    aEl53.textContent = 'Income Tax Calculator';
                  liEl50.append(aEl53);
                ulEl3.append(liEl50);

                  const liEl51 = document.createElement('li');

                    const aEl54 = document.createElement('a');
                    aEl54.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl54.setAttribute('title', 'Power of Compounding Calculator');
                    aEl54.textContent = 'Power of Compounding Calculator';
                  liEl51.append(aEl54);
                ulEl3.append(liEl51);

                  const liEl52 = document.createElement('li');

                    const aEl55 = document.createElement('a');
                    aEl55.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl55.setAttribute('title', 'Retirement Planning Calculator');
                    aEl55.textContent = 'Retirement Planning Calculator';
                  liEl52.append(aEl55);
                ulEl3.append(liEl52);

                  const liEl53 = document.createElement('li');

                    const aEl56 = document.createElement('a');
                    aEl56.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl56.setAttribute('title', 'Home Loan Insurance Calculator');
                    aEl56.textContent = 'Home Loan Insurance Calculator';
                  liEl53.append(aEl56);
                ulEl3.append(liEl53);

                  const liEl54 = document.createElement('li');

                    const aEl57 = document.createElement('a');
                    aEl57.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl57.setAttribute('title', 'Child Education Plan Calculator');
                    aEl57.textContent = 'Child Education Plan Calculator';
                  liEl54.append(aEl57);
                ulEl3.append(liEl54);

                  const liEl55 = document.createElement('li');

                    const aEl58 = document.createElement('a');
                    aEl58.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl58.setAttribute('title', 'Human Life Value Calculator');
                    aEl58.textContent = 'Human Life Value Calculator';
                  liEl55.append(aEl58);
                ulEl3.append(liEl55);

                  const liEl56 = document.createElement('li');

                    const aEl59 = document.createElement('a');
                    aEl59.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl59.setAttribute('title', 'HRA Calculator');
                    aEl59.textContent = 'HRA Calculator';
                  liEl56.append(aEl59);
                ulEl3.append(liEl56);

                  const liEl57 = document.createElement('li');

                    const aEl60 = document.createElement('a');
                    aEl60.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl60.setAttribute('title', 'EMI Calculator');
                    aEl60.textContent = 'EMI Calculator';
                  liEl57.append(aEl60);
                ulEl3.append(liEl57);

                  const liEl58 = document.createElement('li');

                    const aEl61 = document.createElement('a');
                    aEl61.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl61.setAttribute('title', 'Investment Planning Calculator');
                    aEl61.textContent = 'Investment Planning Calculator';
                  liEl58.append(aEl61);
                ulEl3.append(liEl58);

                  const liEl59 = document.createElement('li');

                    const aEl62 = document.createElement('a');
                    aEl62.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl62.setAttribute('title', 'Cancer Insurance Calculator');
                    aEl62.textContent = 'Cancer Insurance Calculator';
                  liEl59.append(aEl62);
                ulEl3.append(liEl59);
              divEl8.append(ulEl3);
            divEl6.append(divEl8);

              const divEl9 = document.createElement('div');
              divEl9.setAttribute('class', 'col-3');

                const h3El5 = document.createElement('h3');
                h3El5.setAttribute('id', 'quick-links');
                h3El5.setAttribute('class', 'col-heading');
                h3El5.textContent = 'Quick Links';
              divEl9.append(h3El5);

                const ulEl4 = document.createElement('ul');
                ulEl4.setAttribute('class', 'col-list-lev-1');

                  const liEl60 = document.createElement('li');

                    const aEl63 = document.createElement('a');
                    aEl63.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl63.setAttribute('title', 'Public Disclosure');
                    aEl63.textContent = 'Public Disclosure';
                  liEl60.append(aEl63);
                ulEl4.append(liEl60);

                  const liEl61 = document.createElement('li');

                    const aEl64 = document.createElement('a');
                    aEl64.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl64.setAttribute('title', 'Bonus Declaration');
                    aEl64.textContent = 'Bonus Declaration';
                  liEl61.append(aEl64);
                ulEl4.append(liEl61);

                  const liEl62 = document.createElement('li');

                    const aEl65 = document.createElement('a');
                    aEl65.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl65.setAttribute('title', 'Goods and Services Tax Rates 2017');
                    aEl65.textContent = 'Goods and Services Tax Rates 2017';
                  liEl62.append(aEl65);
                ulEl4.append(liEl62);

                  const liEl63 = document.createElement('li');

                    const aEl66 = document.createElement('a');
                    aEl66.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl66.setAttribute('title', 'Download Centre');
                    aEl66.textContent = 'Download Centre';
                  liEl63.append(aEl66);
                ulEl4.append(liEl63);

                  const liEl64 = document.createElement('li');

                    const aEl67 = document.createElement('a');
                    aEl67.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl67.setAttribute('title', 'Newsroom');
                    aEl67.textContent = 'Newsroom';
                  liEl64.append(aEl67);
                ulEl4.append(liEl64);

                  const liEl65 = document.createElement('li');

                    const aEl68 = document.createElement('a');
                    aEl68.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl68.setAttribute('title', 'Do Not Call');
                    aEl68.textContent = 'Do Not Call';
                  liEl65.append(aEl68);
                ulEl4.append(liEl65);

                  const liEl66 = document.createElement('li');

                    const aEl69 = document.createElement('a');
                    aEl69.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl69.setAttribute('title', 'Local DNC Check');
                    aEl69.textContent = 'Local DNC Check';
                  liEl66.append(aEl69);
                ulEl4.append(liEl66);

                  const liEl67 = document.createElement('li');

                    const aEl70 = document.createElement('a');
                    aEl70.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl70.setAttribute('title', 'Cookie Policy');
                    aEl70.textContent = 'Cookie Policy';
                  liEl67.append(aEl70);
                ulEl4.append(liEl67);

                  const liEl68 = document.createElement('li');

                    const aEl71 = document.createElement('a');
                    aEl71.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl71.setAttribute('title', 'Disclaimer Policy');
                    aEl71.textContent = 'Disclaimer Policy';
                  liEl68.append(aEl71);
                ulEl4.append(liEl68);

                  const liEl69 = document.createElement('li');

                    const aEl72 = document.createElement('a');
                    aEl72.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl72.setAttribute('title', 'Privacy Policy');
                    aEl72.textContent = 'Privacy Policy';
                  liEl69.append(aEl72);
                ulEl4.append(liEl69);

                  const liEl70 = document.createElement('li');

                    const aEl73 = document.createElement('a');
                    aEl73.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl73.setAttribute('title', 'Terms and Conditions');
                    aEl73.textContent = 'Terms and Conditions';
                  liEl70.append(aEl73);
                ulEl4.append(liEl70);

                  const liEl71 = document.createElement('li');

                    const aEl74 = document.createElement('a');
                    aEl74.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl74.setAttribute('title', 'Grievance Redressal');
                    aEl74.textContent = 'Grievance Redressal';
                  liEl71.append(aEl74);
                ulEl4.append(liEl71);

                  const liEl72 = document.createElement('li');

                    const aEl75 = document.createElement('a');
                    aEl75.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl75.setAttribute('title', 'IRDAI');
                    aEl75.textContent = 'IRDAI';
                  liEl72.append(aEl75);
                ulEl4.append(liEl72);

                  const liEl73 = document.createElement('li');

                    const aEl76 = document.createElement('a');
                    aEl76.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl76.setAttribute('title', 'IRDAI website for policyholder education');
                    aEl76.textContent = 'IRDAI website for policyholder education';
                  liEl73.append(aEl76);
                ulEl4.append(liEl73);

                  const liEl74 = document.createElement('li');

                    const aEl77 = document.createElement('a');
                    aEl77.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl77.setAttribute('title', 'Bima Bharosa');
                    aEl77.textContent = 'Bima Bharosa';
                  liEl74.append(aEl77);
                ulEl4.append(liEl74);

                  const liEl75 = document.createElement('li');

                    const aEl78 = document.createElement('a');
                    aEl78.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl78.setAttribute('title', 'Electronic Insurance Account');
                    aEl78.textContent = 'Electronic Insurance Account';
                  liEl75.append(aEl78);
                ulEl4.append(liEl75);

                  const liEl76 = document.createElement('li');

                    const aEl79 = document.createElement('a');
                    aEl79.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl79.setAttribute('title', 'Fund Performance');
                    aEl79.textContent = 'Fund Performance';
                  liEl76.append(aEl79);
                ulEl4.append(liEl76);

                  const liEl77 = document.createElement('li');

                    const aEl80 = document.createElement('a');
                    aEl80.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl80.setAttribute('title', 'Claims');
                    aEl80.textContent = 'Claims';
                  liEl77.append(aEl80);
                ulEl4.append(liEl77);

                  const liEl78 = document.createElement('li');

                    const aEl81 = document.createElement('a');
                    aEl81.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl81.setAttribute('title', 'Our Delighted Customers');
                    aEl81.textContent = 'Our Delighted Customers';
                  liEl78.append(aEl81);
                ulEl4.append(liEl78);

                  const liEl79 = document.createElement('li');

                    const aEl82 = document.createElement('a');
                    aEl82.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl82.setAttribute('title', 'Contact Us');
                    aEl82.textContent = 'Contact Us';
                  liEl79.append(aEl82);
                ulEl4.append(liEl79);

                  const liEl80 = document.createElement('li');

                    const aEl83 = document.createElement('a');
                    aEl83.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl83.setAttribute('title', 'Hospital Network');
                    aEl83.textContent = 'Hospital Network';
                  liEl80.append(aEl83);
                ulEl4.append(liEl80);

                  const liEl81 = document.createElement('li');

                    const aEl84 = document.createElement('a');
                    aEl84.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl84.setAttribute('title', 'Blogs');
                    aEl84.textContent = 'Blogs';
                  liEl81.append(aEl84);
                ulEl4.append(liEl81);

                  const liEl82 = document.createElement('li');

                    const aEl85 = document.createElement('a');
                    aEl85.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl85.setAttribute('title', 'Send Me An Advisor');
                    aEl85.textContent = 'Send Me An Advisor';
                  liEl82.append(aEl85);
                ulEl4.append(liEl82);

                  const liEl83 = document.createElement('li');

                    const aEl86 = document.createElement('a');
                    aEl86.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl86.setAttribute('title', 'Old Products');
                    aEl86.textContent = 'Old Products';
                  liEl83.append(aEl86);
                ulEl4.append(liEl83);

                  const liEl84 = document.createElement('li');

                    const aEl87 = document.createElement('a');
                    aEl87.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl87.setAttribute('title', 'COI');
                    aEl87.textContent = 'COI';
                  liEl84.append(aEl87);
                ulEl4.append(liEl84);

                  const liEl85 = document.createElement('li');

                    const aEl88 = document.createElement('a');
                    aEl88.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl88.setAttribute('title', 'PMJJBY');
                    aEl88.textContent = 'PMJJBY';
                  liEl85.append(aEl88);
                ulEl4.append(liEl85);

                  const liEl86 = document.createElement('li');

                    const aEl89 = document.createElement('a');
                    aEl89.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl89.setAttribute('title', 'Login Assistant');
                    aEl89.textContent = 'Login Assistant';
                  liEl86.append(aEl89);
                ulEl4.append(liEl86);

                  const liEl87 = document.createElement('li');

                    const aEl90 = document.createElement('a');
                    aEl90.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl90.setAttribute('title', 'NRI GST Benefit');
                    aEl90.textContent = 'NRI GST Benefit';
                  liEl87.append(aEl90);
                ulEl4.append(liEl87);

                  const liEl88 = document.createElement('li');

                    const aEl91 = document.createElement('a');
                    aEl91.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl91.setAttribute('title', 'Account Aggregator');
                    aEl91.textContent = 'Account Aggregator';
                  liEl88.append(aEl91);
                ulEl4.append(liEl88);

                  const liEl89 = document.createElement('li');

                    const aEl92 = document.createElement('a');
                    aEl92.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl92.setAttribute('title', 'Investors: Disclosures under Reg 46 & 62 of SEBI LODR');
                    aEl92.textContent = 'Investors: Disclosures under Reg 46 & 62 of SEBI LODR';
                  liEl89.append(aEl92);
                ulEl4.append(liEl89);

                  const liEl90 = document.createElement('li');

                    const aEl93 = document.createElement('a');
                    aEl93.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl93.setAttribute('title', 'SMART ODR Portal');
                    aEl93.textContent = 'SMART ODR Portal';
                  liEl90.append(aEl93);
                ulEl4.append(liEl90);

                  const liEl91 = document.createElement('li');

                    const aEl94 = document.createElement('a');
                    aEl94.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl94.setAttribute('title', 'Ayushman Bharat Health Account (ABHA)');
                    aEl94.textContent = 'Ayushman Bharat Health Account (ABHA)';
                  liEl91.append(aEl94);
                ulEl4.append(liEl91);
              divEl9.append(ulEl4);

                const h3El6 = document.createElement('h3');
                h3El6.setAttribute('id', 'tax-planning');
                h3El6.setAttribute('class', 'col-heading');
                h3El6.textContent = 'Tax Planning';
              divEl9.append(h3El6);

                const ulEl5 = document.createElement('ul');
                ulEl5.setAttribute('class', 'col-list-lev-1');

                  const liEl92 = document.createElement('li');

                    const aEl95 = document.createElement('a');
                    aEl95.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl95.setAttribute('title', 'ULIPS as a tax saving investment');
                    aEl95.textContent = 'ULIPS as a tax saving investment';
                  liEl92.append(aEl95);
                ulEl5.append(liEl92);

                  const liEl93 = document.createElement('li');

                    const aEl96 = document.createElement('a');
                    aEl96.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl96.setAttribute('title', 'Income Tax Slabs & Rates');
                    aEl96.textContent = 'Income Tax Slabs & Rates';
                  liEl93.append(aEl96);
                ulEl5.append(liEl93);

                  const liEl94 = document.createElement('li');

                    const aEl97 = document.createElement('a');
                    aEl97.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl97.setAttribute('title', 'How to Save Income Tax');
                    aEl97.textContent = 'How to Save Income Tax';
                  liEl94.append(aEl97);
                ulEl5.append(liEl94);

                  const liEl95 = document.createElement('li');

                    const aEl98 = document.createElement('a');
                    aEl98.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl98.setAttribute('title', 'Tax Saving Life Insurance Plans');
                    aEl98.textContent = 'Tax Saving Life Insurance Plans';
                  liEl95.append(aEl98);
                ulEl5.append(liEl95);
              divEl9.append(ulEl5);
            divEl6.append(divEl9);

              const divEl10 = document.createElement('div');
              divEl10.setAttribute('class', 'col-4');

                const h3El7 = document.createElement('h3');
                h3El7.setAttribute('id', 'download-the-icici-prudential-life-insurance-mobile-app');
                h3El7.setAttribute('class', 'col-heading');

                  const aEl99 = document.createElement('a');
                  aEl99.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl99.setAttribute('title', 'Download The ICICI Prudential Life Insurance Mobile App');
                  aEl99.textContent = 'Download The ICICI Prudential Life Insurance Mobile App';
                h3El7.append(aEl99);
              divEl10.append(h3El7);

                const ulEl6 = document.createElement('ul');
                ulEl6.setAttribute('class', 'col-list-lev-1');

                  const liEl96 = document.createElement('li');

                    const aEl100 = document.createElement('a');
                    aEl100.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl100.setAttribute('title', 'Google Play Icon');
                    aEl100.textContent = 'Google Play Icon';
                  liEl96.append(aEl100);
                ulEl6.append(liEl96);

                  const liEl97 = document.createElement('li');

                    const aEl101 = document.createElement('a');
                    aEl101.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl101.setAttribute('title', 'App Store Icon');
                    aEl101.textContent = 'App Store Icon';
                  liEl97.append(aEl101);
                ulEl6.append(liEl97);
              divEl10.append(ulEl6);

                const h3El8 = document.createElement('h3');
                h3El8.setAttribute('id', 'social-media-links');
                h3El8.setAttribute('class', 'col-heading');
                h3El8.textContent = 'Social Media Links';
              divEl10.append(h3El8);

                const ulEl7 = document.createElement('ul');
                ulEl7.setAttribute('class', 'col-list-lev-1');

                  const liEl98 = document.createElement('li');

                    const aEl102 = document.createElement('a');
                    aEl102.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl102.setAttribute('title', 'Like Us on Facebook');
                    aEl102.textContent = 'Like Us on Facebook';
                  liEl98.append(aEl102);
                ulEl7.append(liEl98);

                  const liEl99 = document.createElement('li');

                    const aEl103 = document.createElement('a');
                    aEl103.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl103.setAttribute('title', 'Follow Us on Twitter');
                    aEl103.textContent = 'Follow Us on Twitter';
                  liEl99.append(aEl103);
                ulEl7.append(liEl99);

                  const liEl100 = document.createElement('li');

                    const aEl104 = document.createElement('a');
                    aEl104.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl104.setAttribute('title', 'Follow Us on Instagram');
                    aEl104.textContent = 'Follow Us on Instagram';
                  liEl100.append(aEl104);
                ulEl7.append(liEl100);

                  const liEl101 = document.createElement('li');

                    const aEl105 = document.createElement('a');
                    aEl105.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl105.setAttribute('title', 'Watch our Videos');
                    aEl105.textContent = 'Watch our Videos';
                  liEl101.append(aEl105);
                ulEl7.append(liEl101);

                  const liEl102 = document.createElement('li');

                    const aEl106 = document.createElement('a');
                    aEl106.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl106.setAttribute('title', 'Connect on Linkedin');
                    aEl106.textContent = 'Connect on Linkedin';
                  liEl102.append(aEl106);
                ulEl7.append(liEl102);

                  const liEl103 = document.createElement('li');

                    const aEl107 = document.createElement('a');
                    aEl107.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl107.setAttribute('title', 'Add on Google Plus');
                    aEl107.textContent = 'Add on Google Plus';
                  liEl103.append(aEl107);
                ulEl7.append(liEl103);
              divEl10.append(ulEl7);

                const h3El9 = document.createElement('h3');
                h3El9.setAttribute('id', 'group-companies');
                h3El9.setAttribute('class', 'col-heading');
                h3El9.textContent = 'Group Companies';
              divEl10.append(h3El9);

                const ulEl8 = document.createElement('ul');
                ulEl8.setAttribute('class', 'col-list-lev-1');

                  const liEl104 = document.createElement('li');

                    const aEl108 = document.createElement('a');
                    aEl108.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl108.setAttribute('title', 'ICICI Bank');
                    aEl108.textContent = 'ICICI Bank';
                  liEl104.append(aEl108);
                ulEl8.append(liEl104);

                  const liEl105 = document.createElement('li');

                    const aEl109 = document.createElement('a');
                    aEl109.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl109.setAttribute('title', 'ICICI Lombard General Insurance');
                    aEl109.textContent = 'ICICI Lombard General Insurance';
                  liEl105.append(aEl109);
                ulEl8.append(liEl105);

                  const liEl106 = document.createElement('li');

                    const aEl110 = document.createElement('a');
                    aEl110.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl110.setAttribute('title', 'ICICI Direct');
                    aEl110.textContent = 'ICICI Direct';
                  liEl106.append(aEl110);
                ulEl8.append(liEl106);

                  const liEl107 = document.createElement('li');

                    const aEl111 = document.createElement('a');
                    aEl111.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl111.setAttribute('title', 'ICICI Prudential Mutual Fund');
                    aEl111.textContent = 'ICICI Prudential Mutual Fund';
                  liEl107.append(aEl111);
                ulEl8.append(liEl107);

                  const liEl108 = document.createElement('li');

                    const aEl112 = document.createElement('a');
                    aEl112.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl112.setAttribute('title', 'ICICI Home Finance');
                    aEl112.textContent = 'ICICI Home Finance';
                  liEl108.append(aEl112);
                ulEl8.append(liEl108);

                  const liEl109 = document.createElement('li');

                    const aEl113 = document.createElement('a');
                    aEl113.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                    aEl113.setAttribute('title', 'ICICI Prudential Pension FMC');
                    aEl113.textContent = 'ICICI Prudential Pension FMC';
                  liEl109.append(aEl113);
                ulEl8.append(liEl109);
              divEl10.append(ulEl8);
            divEl6.append(divEl10);
          divEl5.append(divEl6);

            const divEl11 = document.createElement('div');
            divEl11.setAttribute('class', 'footer-section');

              const divEl12 = document.createElement('div');
              divEl12.setAttribute('class', 'footer-info');

                const pEl = document.createElement('p');
                pEl.textContent = '© ICICI Prudential Life Insurance Co. Ltd. All rights reserved. Registered with Insurance Regulatory & Development Authority of India (IRDAI) as Life Insurance Company. Regn. No. 105. CIN: L66010MH2000PLC127837.Reg. Off.: ICICI PruLife Towers, 1089 Appasaheb Marathe Marg, Prabhadevi, Mumbai 400025. Tel.: 40391600. Customer helpline number - 1800 2660 (Help us to serve you better by calling us from your registered mobile number). Timings – 10:00 A.M. to 7:00 P.M., Monday to Saturday (except national holidays). Member of the Life Insurance Council. For more details on the risk factors, term and conditions please read the product brochure carefully before concluding the sale. Trade Logo displayed above belongs to ICICI Bank Ltd & Prudential IP services Ltd and used by ICICI Prudential Life Insurance Company Ltd under license.';
              divEl12.append(pEl);
            divEl11.append(divEl12);
          divEl5.append(divEl11);

            const divEl13 = document.createElement('div');
            divEl13.setAttribute('class', 'footer-section');

              const divEl14 = document.createElement('div');
              divEl14.setAttribute('class', 'footer-warn-text');

                const h3El10 = document.createElement('h3');
                h3El10.setAttribute('id', 'beware-of-suspicious-phone-calls-and-fictitiousfraudulent-offers');
                h3El10.textContent = 'BEWARE OF SUSPICIOUS PHONE CALLS AND FICTITIOUS/FRAUDULENT OFFERS';
              divEl14.append(h3El10);

                const pEl2 = document.createElement('p');
                pEl2.textContent = 'IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.';
              divEl14.append(pEl2);
            divEl13.append(divEl14);

              const divEl15 = document.createElement('div');
              divEl15.setAttribute('class', 'button-container footer-warn-button');

                const pEl3 = document.createElement('p');

                  const aEl114 = document.createElement('a');
                  aEl114.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl114.setAttribute('title', 'IRDAI CAUTIONS PUBLIC AGAINST SPURIOUS CALLS AND FICTITIOUS OFFERS');
                  aEl114.setAttribute('class', 'button');
                  aEl114.textContent = 'IRDAI CAUTIONS PUBLIC AGAINST SPURIOUS CALLS AND FICTITIOUS OFFERS';
                pEl3.append(aEl114);
              divEl15.append(pEl3);
            divEl13.append(divEl15);
          divEl5.append(divEl13);
        divEl4.append(divEl5);
      divEl3.append(divEl4);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}