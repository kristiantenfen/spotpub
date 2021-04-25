import axios from 'axios';

// Create axios instance
const service = axios.create({
  baseURL: 'https://605d074f9386d200171ba209.mockapi.io/api/v1',
  timeout: 10000, // Request timeout
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
