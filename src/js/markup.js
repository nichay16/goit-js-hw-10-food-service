import menu from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const refs = {
  galleryMenu: document.querySelector('ul.js-menu'),
  murkup: itemsTemplate(menu),
};

refs.galleryMenu.insertAdjacentHTML('beforeend', refs.murkup);
