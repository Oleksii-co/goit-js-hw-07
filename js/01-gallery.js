import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");
const imgMarkup = createGaleryElement(galleryItems);

galleryEL.insertAdjacentHTML("beforeend", imgMarkup);

galleryEL.addEventListener("click", galleryClick);

function createGaleryElement(Element) {
  const elements = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join("");

  return elements;
}

function galleryClick(evt) {
  evt.preventDefault();

  const isGaleryItem = evt.target.classList.contains("gallery__image");

  if (!isGaleryItem) {
    return;
  }

  basicLightbox
    .create(
      `
<div class="modal">
<img src="${evt.target.dataset.source}">
    </div>
    `
    )
    .show();

  console.log(evt.target.dataset.source);
}
