// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
function createGelleryItems(Items) {
    return galleryItems
        .map(item => {
        return `
   <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
    `;
    })
        .join('');
}
 
const galleryItemsList = document.querySelector('.gallery');
galleryItemsList.insertAdjacentHTML('afterbegin', createGelleryItems(galleryItems)); 

    const lightBox = new SimpleLightbox('.gallery a', {
         captionsData: 'alt',
         captionDelay: 250,
         enableKeyboard: true,
         close: true,
    });
