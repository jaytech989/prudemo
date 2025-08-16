// export default function decorate(block) {
//   [...block.children].forEach((row, r) => {
//     if (r === 0) {
//       row.classList.add('ipru-wbo-heading');
//     }
//     if (r === 1) {
//       row.classList.add('ipru-wbo-cards');
//       [...row.children].forEach((div, d) => {
//         div.classList.add('wbo-cards');
//         div.classList.add('wbo-cards-'.concat(d + 1));
//       });
//     }
//   });
// }

export default function decorate(block) {
  let [heading, ...others] = block.children;
  let headingtxt = heading.textContent.trim();
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const divEl = document.createElement("div");
  divEl.setAttribute("class", "ipru-wbo-wrapper");

  const divEl2 = document.createElement("div");
  divEl2.setAttribute("class", "ipru-wbo block");
  divEl2.setAttribute("data-block-name", "ipru-wbo");
  divEl2.setAttribute("data-block-status", "loaded");

  const divEl3 = document.createElement("div");
  divEl3.setAttribute("class", "ipru-wbo-heading");

  const divEl4 = document.createElement("div");

  const pEl = document.createElement("p");
  pEl.textContent = headingtxt;
  divEl4.append(pEl);

  //   const h2El = document.createElement('h2');
  //   h2El.setAttribute('id', 'choosing-to-buy-online-has-benefits');
  //   h2El.textContent = 'Choosing to buy online has benefits';
  // divEl4.append(h2El);
  divEl3.append(divEl4);
  divEl2.append(divEl3);

  const divEl5 = document.createElement("div");
  divEl5.setAttribute("class", "ipru-wbo-cards");

  others.forEach((element) => {
    const divEl10 = document.createElement("div");
    divEl10.setAttribute("class", "wbo-cards wbo-cards");

    const pEl10 = document.createElement("p");

    const pictureEl5 = document.createElement("picture");
    pictureEl5.setAttribute("style", "display: block;");

    const sourceEl13 = document.createElement("source");
    sourceEl13.setAttribute("type", "image/webp");
    sourceEl13.setAttribute(
      "srcset",
      element.children[0].querySelector("img").getAttribute("src")
    );
    sourceEl13.setAttribute("media", "(min-width: 600px)");
    pictureEl5.append(sourceEl13);

    const sourceEl14 = document.createElement("source");
    sourceEl14.setAttribute("type", "image/webp");
    sourceEl14.setAttribute(
      "srcset",
      element.children[0].querySelector("img").getAttribute("src")
    );
    pictureEl5.append(sourceEl14);

    const sourceEl15 = document.createElement("source");
    sourceEl15.setAttribute("type", "image/png");
    sourceEl15.setAttribute(
      "srcset",
      element.children[0].querySelector("img").getAttribute("src")
    );
    sourceEl15.setAttribute("media", "(min-width: 600px)");
    pictureEl5.append(sourceEl15);

    const imgEl9 = document.createElement("img");
    imgEl9.setAttribute("loading", "lazy");
    imgEl9.setAttribute("alt", "");
    imgEl9.setAttribute(
      "src",
      element.children[0].querySelector("img").getAttribute("src")
    );
    imgEl9.setAttribute("width", "148");
    imgEl9.setAttribute("height", "151");
    pictureEl5.append(imgEl9);
    pEl10.append(pictureEl5);

    const imgEl10 = document.createElement("img");
    imgEl10.setAttribute("src", "../../images/ipru-wbo/wbo-5.gif");
    imgEl10.setAttribute("alt", "Sample Image");
    imgEl10.setAttribute("width", "300");
    imgEl10.setAttribute("height", "200");
    imgEl10.setAttribute("style", "display: none;");
    pEl10.append(imgEl10);
    divEl10.append(pEl10);

    const pEl11 = document.createElement("p");
    pEl11.textContent = element.children[1].textContent;
    divEl10.append(pEl11);
    divEl5.append(divEl10);
    divEl2.append(divEl5);
  });

  divEl.append(divEl2);
  container.append(divEl);

  block.textContent = "";
  block.append(container);
}
