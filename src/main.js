import { fetchImages } from './pixabay-api';
import { renderGallery, showNotification, clearGallery, setLoadingState } from './render-functions';

const searchForm = document.querySelector('#search-form');
const input = document.querySelector('input[name="search"]');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    showNotification('Search query cannot be empty');
    return;
  }

  setLoadingState(true);
  clearGallery();

  try {
    const data = await fetchImages(query);
    setLoadingState(false);

    if (data.hits.length === 0) {
      showNotification('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    setLoadingState(false);
    showNotification('An error occurred while fetching images. Please try again later.');
  }
});
