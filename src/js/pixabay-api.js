const API_KEY = '813609-98f1a5b8a61f7cd1a2ca10379';
const BASE_URL = 'https://pixabay.com/api';

export const fetchPhotosByQuery = (query = 'cat') => {
  const searchParams = new URLSearchParams({
    query,
    client_id: API_KEY,
    
    orientation: 'horizontal',
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};