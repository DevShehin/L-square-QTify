import axios from 'axios';
const BASE_URL ='https://qtify-backend.labs.crio.do';

export const getTopAlbums=async()=>{
    const response=await axios.get(`${BASE_URL}/albums/top`);
    return response.data;
};

export const getNewAlbums=async()=>{
    const response=await axios.get(`${BASE_URL}/albums/new`);
    return response.data;
};

export const getSongs= async()=>{
    const response=await axios.get(`${BASE_URL}/songs`);
    return response.data;
}

export const getGenres= async()=>{
    const response = await axios.get(`${BASE_URL}/genres`);
    return response.data;
};