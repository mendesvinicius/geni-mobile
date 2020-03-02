import axios from 'axios';

const url = 'https://geni-api.herokuapp.com';
// const url = 'http://localhost:3333';

const api = axios.create({
  baseURL: url,
});

export default api;