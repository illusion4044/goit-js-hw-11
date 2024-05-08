import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const galleryMarkup = images
    .map(
      (image) => `
        <a href="${image.largeImageURL}">
          <div class="image-card">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <div class="info">
              <p><b>Likes:</b> ${image.likes}</p>
              <p><b>Views:</b> ${image.views}</p>
              <p><b>Comments:</b> ${image.comments}</p>
              <p><b>Downloads:</b> ${image.downloads}</p>
            </div>
          </div>
        </a>`
    )
    .join('');

  gallery.innerHTML = galleryMarkup;
  // Refresh SimpleLightbox
  new SimpleLightbox('.gallery a').refresh();
}

export function showNotification(message) {
  iziToast.show({
    message,
    position: 'topCenter',
    color: 'red',
  });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function setLoadingState(isLoading) {
  const loader = document.querySelector('.loader');
  loader.style.display = isLoading ? 'block' : 'none';
}
