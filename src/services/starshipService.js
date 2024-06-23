// src/services/starshipService.js

const BASE_URL = `https://swapi.dev/api/starships/`

async function search(query) {
    const queryString = `?search=${query}`;
    const url = BASE_URL + queryString;
    console.log('Fetching URL:', url); 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
} catch (error) {
    console.log(error);
}
}
// console.log(show('people', 2));
export { search };