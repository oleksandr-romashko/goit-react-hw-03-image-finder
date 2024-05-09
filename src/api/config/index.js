import axios from 'axios';

const API_KEY = '40405988-c6d5b0647c8f4a8e4e473288b';

export const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  withCredentials: false,
  params: {
    key: API_KEY,
  },
});
