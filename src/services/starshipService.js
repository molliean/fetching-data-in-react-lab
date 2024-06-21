
const BASE_URL= `https://swapi.dev/api/`

async function show (resource, index){
    const queryString = `${resource}/${index}/`;
    try {
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
// console.log(show('people', 2));
export {show};