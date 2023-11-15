import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Using a sample JSONPlaceholder API for demonstration
});

export default api;
