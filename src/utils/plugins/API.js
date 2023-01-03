import axios from 'axios';

const API = axios.create({
  baseURL: 'https://picsum.photos',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
