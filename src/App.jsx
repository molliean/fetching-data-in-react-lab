// src/App.jsx

import * as starshipService from './services/starshipService'
import StarshipList from './components/StarshipList'
import StarshipCard from './components/StarshipCard/StarshipCard'
import { useEffect, useState } from 'react';
import StarshipSearch from './components/StarshipSearch';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const fetchData = async (query) => {
    const data = await starshipService.search(query);
    console.log('Data:', data);
    if (data.results) {
      const searchResults = data.results.map(starship => ({
        name: starship.name,
        starshipClass: starship.starship_class,
        manufacturer: starship.manufacturer,
        model: starship.model,
      }));
      setStarships(searchResults);
    } else {
      setStarships([]);
    }
  };

  useEffect(() => {
    console.log('use effect is up and running');
    async function fetchDefaultData() {
      const data = await starshipService.search('')
      const defaultStarshipList = data.results.map(starship => ({
        name: starship.name,
        starshipClass: starship.starship_class,
        manufacturer: starship.manufacturer,
        model: starship.model,
      }));
      setStarships(defaultStarshipList);
    }
    fetchDefaultData();
  }, []);

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <button onClick={() => fetchData('')}>Show All Starships</button>
      <h2>Starships</h2>
      <p> Number of results: {starships.length} </p>
      <StarshipList starships={starships} />
    </main>
  );
}

export default App
