import iziToast from 'izitoast';
import { createGalleryItemMarkup } from './render-functions.js';
import { fetchPhotosByQuery } from './pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

fetchPhotosByQuery()
.then(ImageData => {
    gelleryEL.innerHTML = createGalleryItemMarkup (imagesData.results)
 })
 .catch(error =>console.log(error));
