import axios from 'axios';

const apiKey = 'live_PhwyQ190iBWMD41jyFSre7c2tEjoQPL9JZN3xA9orTnwo4Tysj2GLchEe0O80FAe';
axios.defaults.headers.common['x-api-key'] = apiKey;

async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat breeds');
  }
}

async function fetchCatByBreed(selectedBreedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat by breed');
  }
}

export { fetchBreeds, fetchCatByBreed };