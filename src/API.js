const API_URL = 'http://localhost:3000/api/v1/products';

export function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json())
}