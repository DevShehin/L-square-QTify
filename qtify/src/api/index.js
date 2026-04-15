import axios from 'axios';
const BASE_URL ='https://qtify-backend.labs.crio.do';

export const getSongs = async () => {
  const response = await axios.get(`${BASE_URL}/songs`);
  const data = response.data;
  return Array.isArray(data) ? data : (data.data || []);
};

export const getGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genres`);
  const data = response.data;
  const genresArray = Array.isArray(data) ? data : (data.data || []);
  return genresArray;
};

export const getTopAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/albums/top`);
  const data = response.data;
  return Array.isArray(data) ? data : (data.data || []);
};

export const getNewAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/albums/new`);
  const data = response.data;
  return Array.isArray(data) ? data : (data.data || []);
};