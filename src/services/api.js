// services/api.js
import axios from 'axios';

export const getProductById = (id) => {
  return axios.get(`/api/products/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching product data:', error);
      throw error;
    });
};

