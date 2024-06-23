// src/components/StarshipSearch.jsx

import { useState } from 'react';

export default function StarshipSearch({ fetchData }) {
    const [query, setQuery] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        fetchData(query);
        setQuery('');
    }
    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="query">Search Starships: </label>
                <input
                    type="text"
                    name="query"
                    id="query" 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value); 
                    }} 
                    />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}