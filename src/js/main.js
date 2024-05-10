import iziToast from 'izitoast';
import { createGalleryItemMarkup } from './render-functions.js';
import { fetchPhotosByQuery } from './pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKeyword.value.trim();
  
    if (searchQuery === '') {
      galleryEl.innerHTML = '';
      event.target.reset();
      iziToast.show({
        message: 'Input field can not be empty',
        position: 'topRight',
        timeout: 2000,
        color: 'red',
      });
  
      return;
    }
  
    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
  
    fetchPhotosByQuery(searchQuery)
      .then(imagesData => {
        if (imagesData.total === 0) {
          iziToast.show({
            message: 'Sorry, there are no images for this query',
            position: 'topRight',
            timeout: 2000,
            color: 'red',
          });
        }
  
        galleryEl.innerHTML = createGalleryItemMarkup(imagesData.results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        event.target.reset();
        loaderEl.classList.add('is-hidden');
      });
  }
  
  searchFormEl.addEventListener('submit', onSearchFormSubmit);