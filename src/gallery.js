import gallery from './menu.json';
import galleryCardsTempl from "./templates/gallery.hbs";
console.log(galleryCardsTempl);

const menuEl = document.querySelector('.js-menu');

menuEl.insertAdjacentHTML('beforeend', galleryCardsTempl(gallery));
