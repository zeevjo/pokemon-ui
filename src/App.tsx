import PokemonItem from "./componenets/PokemonItem/PokemonItem";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/pokemon");

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        setPokemons(data);
      } catch (err) {
        setError("Something went wrong. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (isLoading) {
    return (
      <div className="appContainer">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="appContainer">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="appContainer">
      <div className="pokemonListContainer">
        <h1 className="pokemonListTitle">Pokemon List</h1>
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.pokedexNumber} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
