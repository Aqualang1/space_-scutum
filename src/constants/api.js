export const API_URL = 'https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/products';

export const getTodo = () =>
    fetch(API_URL).then(response => response.json());