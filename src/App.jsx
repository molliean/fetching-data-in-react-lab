// src/App.jsx

import * as starshipService from './services/starshipService'
import StarshipList from './components/StarshipList'
import StarshipCard from './components/StarshipCard/StarshipCard'
import { useEffect, useState } from 'react';

const App = () => {
  const [starships, setStarships] = useState([]);
  const fetchData = async () => {
    const data = await starshipService.show('people', 2);
    console.log('Data:', data);
  }
  return (
    <main>
      <h1>Welcome to Starship Central</h1>
      <button onClick={fetchData}>Fetch Starship Cards</button>
    </main>
  );
}

export default App
