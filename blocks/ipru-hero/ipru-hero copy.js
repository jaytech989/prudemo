export default function decorate(block) {
  debugger;

  // Wrapper for entire hero block
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "ipru-hero-wrapper11");

  // Previous button
  const prevBtn = document.createElement("button");
  prevBtn.setAttribute("class", "prev");
  prevBtn.textContent = "❮";
  // wrapper.append(prevBtn);

  // Slides container (no extra container or 'ipru-hero block' div)
  const children = [...block.children];
  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.className = "indicators";

  children.forEach((el, index) => {
    const slideWrapper = document.createElement("div");
    slideWrapper.setAttribute("class", `ipru-hero-slide hero-slide-${index + 1}${index === 0 ? ' active' : ''}`);

    const slideBody = document.createElement("div");
    slideBody.setAttribute("data-align", "right");
    slideBody.setAttribute("class", "slide-body");

    // Get image from picture
    const bgPicture = el.querySelector("picture");
    const bgImg = bgPicture?.querySelector("img");
    const bgImageUrl = bgImg?.getAttribute("src") || "";

    slideBody.style.backgroundImage = `url("${bgImageUrl}")`;

    // CTA section
    const pEl = document.createElement("p");
    pEl.classList.add("hero-cta");

    const ctaLink = el.querySelector("p a");
    const ctaText = ctaLink?.textContent?.trim() || "Buy Online";
    const ctaHref = ctaLink?.getAttribute("href") || "#";

    const a1 = document.createElement("a");
    a1.href = ctaHref;
    a1.title = "Buy Online";
    a1.textContent = ctaText;
    pEl.appendChild(a1);

    const a2 = document.createElement("a");
    a2.href = ctaHref;
    a2.title = "";

    const clonedPicture = bgPicture?.cloneNode(true);
    if (clonedPicture) {
      a2.appendChild(clonedPicture);
    }

    pEl.appendChild(a2);
    slideBody.appendChild(pEl);
    slideWrapper.appendChild(slideBody);
    wrapper.appendChild(slideWrapper);

    // Create indicator for this slide
    const indicator = document.createElement("span");
    indicator.setAttribute("data-slide", `${index + 1}`);
    indicator.setAttribute("class", `indicator${index === 0 ? ' active' : ''}`);
    indicatorsContainer.appendChild(indicator);
  });

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.setAttribute("class", "next");
  nextBtn.textContent = "❯";
  // wrapper.append(nextBtn);

  // Append indicators at the end
  // wrapper.appendChild(indicatorsContainer);

  // Clear original block and append the hero wrapper
  block.textContent = "";
  block.append(wrapper);
}
