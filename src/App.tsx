import PokemonItem from "./componenets/PokemonItem/PokemonItem";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/pokemon");
      const data = await response.json();

      if (!response.ok) setError("Error message");

      setPokemons(data);
    };

    fetchData();
  }, []);

  return (
    <div className="appContainer">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="pokemonListContainer">
          <h1>Pokemon List</h1>
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.pokedexNumber} {...pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
