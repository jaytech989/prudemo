export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const navEl = document.createElement('nav');
  navEl.setAttribute('id', 'nav');

    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'section nav-brand');
    divEl.setAttribute('data-section-status', 'loaded');
    divEl.setAttribute('style', '');
  navEl.append(divEl);

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'section nav-sections');
    divEl2.setAttribute('data-section-status', 'loaded');
    divEl2.setAttribute('style', '');
  navEl.append(divEl2);

    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'section ipru-nav-1-container nav-tools');
    divEl3.setAttribute('data-section-status', 'loaded');
    divEl3.setAttribute('style', '');

      const divEl4 = document.createElement('div');
      divEl4.setAttribute('class', 'ipru-nav-1-wrapper');

        const divEl5 = document.createElement('div');
        divEl5.setAttribute('class', 'ipru-nav-1 block');
        divEl5.setAttribute('data-block-name', 'ipru-nav-1');
        divEl5.setAttribute('data-block-status', 'loaded');

          const divEl6 = document.createElement('div');
          divEl6.setAttribute('class', 'ipru-header');

            const divEl7 = document.createElement('div');
            divEl7.setAttribute('class', 'ipru-nav-logo');

              const pictureEl = document.createElement('picture');

                const sourceEl = document.createElement('source');
                sourceEl.setAttribute('type', 'image/webp');
                sourceEl.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_13276062cc939e5cde0036a2f69a45824e90362a3.png?width=2000&format=webply&optimize=medium');
                sourceEl.setAttribute('media', '(min-width: 600px)');
              pictureEl.append(sourceEl);

                const sourceEl2 = document.createElement('source');
                sourceEl2.setAttribute('type', 'image/webp');
                sourceEl2.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_13276062cc939e5cde0036a2f69a45824e90362a3.png?width=750&format=webply&optimize=medium');
              pictureEl.append(sourceEl2);

                const sourceEl3 = document.createElement('source');
                sourceEl3.setAttribute('type', 'image/png');
                sourceEl3.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_13276062cc939e5cde0036a2f69a45824e90362a3.png?width=2000&format=png&optimize=medium');
                sourceEl3.setAttribute('media', '(min-width: 600px)');
              pictureEl.append(sourceEl3);

                const imgEl = document.createElement('img');
                imgEl.setAttribute('loading', 'lazy');
                imgEl.setAttribute('alt', '');
                imgEl.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_13276062cc939e5cde0036a2f69a45824e90362a3.png?width=750&format=png&optimize=medium');
                imgEl.setAttribute('width', '242');
                imgEl.setAttribute('height', '46');
              pictureEl.append(imgEl);
            divEl7.append(pictureEl);
          divEl6.append(divEl7);

            const divEl8 = document.createElement('div');
            divEl8.setAttribute('class', 'ipru-search-bar');

              const divEl9 = document.createElement('div');
              divEl9.setAttribute('class', 'search-bar-container');

                const divEl10 = document.createElement('div');
                divEl10.setAttribute('class', 'search-bar');

                  const inputEl = document.createElement('input');
                  inputEl.setAttribute('type', 'text');
                  inputEl.setAttribute('placeholder', 'Search');
                divEl10.append(inputEl);

                  const spanEl = document.createElement('span');
                  spanEl.setAttribute('class', 'search-icon');

                    const imgEl2 = document.createElement('img');
                    imgEl2.setAttribute('src', '../../images/ipru-nav-img/search-maroon.png');
                    imgEl2.setAttribute('alt', 'Search Icon');
                  spanEl.append(imgEl2);
                divEl10.append(spanEl);
              divEl9.append(divEl10);
            divEl8.append(divEl9);
          divEl6.append(divEl8);

            const divEl11 = document.createElement('div');
            divEl11.setAttribute('class', 'ipru-nav-items');

              const ulEl = document.createElement('ul');

                const liEl = document.createElement('li');

                  const aEl = document.createElement('a');
                  aEl.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl.setAttribute('title', 'About Us');
                  aEl.textContent = 'About Us';
                liEl.append(aEl);
              ulEl.append(liEl);

                const liEl2 = document.createElement('li');

                  const aEl2 = document.createElement('a');
                  aEl2.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl2.setAttribute('title', 'Careers');
                  aEl2.textContent = 'Careers';
                liEl2.append(aEl2);
              ulEl.append(liEl2);

                const liEl3 = document.createElement('li');

                  const aEl3 = document.createElement('a');
                  aEl3.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl3.setAttribute('title', 'Contact Us');
                  aEl3.textContent = 'Contact Us';
                liEl3.append(aEl3);
              ulEl.append(liEl3);
            divEl11.append(ulEl);
          divEl6.append(divEl11);

            const divEl12 = document.createElement('div');
            divEl12.setAttribute('class', 'button-container ipru-track-app');

              const pEl = document.createElement('p');

                const aEl4 = document.createElement('a');
                aEl4.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                aEl4.setAttribute('title', 'Track Application');
                aEl4.setAttribute('class', 'button');
                aEl4.textContent = 'Track Application';
              pEl.append(aEl4);
            divEl12.append(pEl);
          divEl6.append(divEl12);

            const divEl13 = document.createElement('div');
            divEl13.setAttribute('class', 'ipru-noti-icon');

              const pictureEl2 = document.createElement('picture');

                const sourceEl4 = document.createElement('source');
                sourceEl4.setAttribute('type', 'image/webp');
                sourceEl4.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ff2081ae9db621cea15a00d358e00a207d99d939.png?width=2000&format=webply&optimize=medium');
                sourceEl4.setAttribute('media', '(min-width: 600px)');
              pictureEl2.append(sourceEl4);

                const sourceEl5 = document.createElement('source');
                sourceEl5.setAttribute('type', 'image/webp');
                sourceEl5.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ff2081ae9db621cea15a00d358e00a207d99d939.png?width=750&format=webply&optimize=medium');
              pictureEl2.append(sourceEl5);

                const sourceEl6 = document.createElement('source');
                sourceEl6.setAttribute('type', 'image/png');
                sourceEl6.setAttribute('srcset', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ff2081ae9db621cea15a00d358e00a207d99d939.png?width=2000&format=png&optimize=medium');
                sourceEl6.setAttribute('media', '(min-width: 600px)');
              pictureEl2.append(sourceEl6);

                const imgEl3 = document.createElement('img');
                imgEl3.setAttribute('loading', 'lazy');
                imgEl3.setAttribute('alt', '');
                imgEl3.setAttribute('src', 'https://main--prohomedemo--eds-dwao.aem.page/media_1ff2081ae9db621cea15a00d358e00a207d99d939.png?width=750&format=png&optimize=medium');
                imgEl3.setAttribute('width', '30');
                imgEl3.setAttribute('height', '30');
              pictureEl2.append(imgEl3);
            divEl13.append(pictureEl2);
          divEl6.append(divEl13);

            const divEl14 = document.createElement('div');
            divEl14.setAttribute('class', 'button-container ipru-nav-login');

              const pEl2 = document.createElement('p');

                const aEl5 = document.createElement('a');
                aEl5.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                aEl5.setAttribute('title', 'Login');
                aEl5.setAttribute('class', 'button');
                aEl5.textContent = 'Login';
              pEl2.append(aEl5);
            divEl14.append(pEl2);
          divEl6.append(divEl14);
        divEl5.append(divEl6);
      divEl4.append(divEl5);
    divEl3.append(divEl4);
  navEl.append(divEl3);

    const divEl15 = document.createElement('div');
    divEl15.setAttribute('class', 'section ipru-nav-2-container');
    divEl15.setAttribute('data-section-status', 'loaded');
    divEl15.setAttribute('style', '');

      const divEl16 = document.createElement('div');
      divEl16.setAttribute('class', 'ipru-nav-2-wrapper');

        const divEl17 = document.createElement('div');
        divEl17.setAttribute('class', 'ipru-nav-2 block');
        divEl17.setAttribute('data-block-name', 'ipru-nav-2');
        divEl17.setAttribute('data-block-status', 'loaded');

          const divEl18 = document.createElement('div');
          divEl18.setAttribute('class', 'ipru-header-2');

            const divEl19 = document.createElement('div');
            divEl19.setAttribute('class', 'ipru-nav-list');

              const ulEl2 = document.createElement('ul');

                const liEl4 = document.createElement('li');

                  const aEl6 = document.createElement('a');
                  aEl6.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl6.setAttribute('title', 'Plans');
                  aEl6.textContent = 'Plans';
                liEl4.append(aEl6);
              ulEl2.append(liEl4);

                const liEl5 = document.createElement('li');

                  const aEl7 = document.createElement('a');
                  aEl7.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl7.setAttribute('title', 'Term Insurance');
                  aEl7.textContent = 'Term Insurance';
                liEl5.append(aEl7);
              ulEl2.append(liEl5);

                const liEl6 = document.createElement('li');

                  const aEl8 = document.createElement('a');
                  aEl8.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl8.setAttribute('title', 'Claims');
                  aEl8.textContent = 'Claims';
                liEl6.append(aEl8);
              ulEl2.append(liEl6);

                const liEl7 = document.createElement('li');

                  const aEl9 = document.createElement('a');
                  aEl9.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl9.setAttribute('title', 'Library');
                  aEl9.textContent = 'Library';
                liEl7.append(aEl9);
              ulEl2.append(liEl7);

                const liEl8 = document.createElement('li');

                  const aEl10 = document.createElement('a');
                  aEl10.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl10.setAttribute('title', 'Customer Services');
                  aEl10.textContent = 'Customer Services';
                liEl8.append(aEl10);
              ulEl2.append(liEl8);

                const liEl9 = document.createElement('li');

                  const aEl11 = document.createElement('a');
                  aEl11.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl11.setAttribute('title', 'Public Disclosure');
                  aEl11.textContent = 'Public Disclosure';
                liEl9.append(aEl11);
              ulEl2.append(liEl9);

                const liEl10 = document.createElement('li');

                  const aEl12 = document.createElement('a');
                  aEl12.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl12.setAttribute('title', 'Tax Center');
                  aEl12.textContent = 'Tax Center';
                liEl10.append(aEl12);
              ulEl2.append(liEl10);

                const liEl11 = document.createElement('li');

                  const aEl13 = document.createElement('a');
                  aEl13.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                  aEl13.setAttribute('title', 'Pay Premiuim');
                  aEl13.textContent = 'Pay Premiuim';
                liEl11.append(aEl13);
              ulEl2.append(liEl11);
            divEl19.append(ulEl2);
          divEl18.append(divEl19);
        divEl17.append(divEl18);
      divEl16.append(divEl17);
    divEl15.append(divEl16);
  navEl.append(divEl15);

    const divEl20 = document.createElement('div');
    divEl20.setAttribute('class', 'section ipru-nav-3-container');
    divEl20.setAttribute('data-section-status', 'loaded');
    divEl20.setAttribute('style', '');

      const divEl21 = document.createElement('div');
      divEl21.setAttribute('class', 'ipru-nav-3-wrapper');

        const divEl22 = document.createElement('div');
        divEl22.setAttribute('class', 'ipru-nav-3 block');
        divEl22.setAttribute('data-block-name', 'ipru-nav-3');
        divEl22.setAttribute('data-block-status', 'loaded');

          const divEl23 = document.createElement('div');
          divEl23.setAttribute('class', 'ipru-header-notif');

            const divEl24 = document.createElement('div');
            divEl24.setAttribute('class', 'ipru-nav-notif-text');

              const pEl3 = document.createElement('p');

                const aEl14 = document.createElement('a');
                aEl14.setAttribute('href', 'https://docs.google.com/document/d/1YdEj1i7l9eUb8EckoxlQjA51C6OmdMy2m8yZ4gw4qLY/edit#');
                aEl14.setAttribute('title', 'Click here');
                aEl14.textContent = 'Click here';
              pEl3.append(aEl14);
            divEl24.append(pEl3);
          divEl23.append(divEl24);
        divEl22.append(divEl23);
      divEl21.append(divEl22);
    divEl20.append(divEl21);
  navEl.append(divEl20);
  container.append(navEl);


  block.textContent = '';
  block.append(container);
}