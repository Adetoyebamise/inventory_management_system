import axios from 'axios';

const productionUrl = 'https://fakestoreapi.com/products';

export const customFetch = axios.create({
  baseURL: productionUrl,
});