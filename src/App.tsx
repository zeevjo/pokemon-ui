import PokemonItem from "./components/PokemonItem/PokemonItem";
import { useEffect, useState } from "react";
import { Pokemon } from "./interfaces/pokemon";
import { API } from "./constants/apiPaths";
import "./App.css";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const url = `${API.BASE_URL}${API.PATHS.GET_ALL_POKEMON}`;

        const response = await fetch(url);

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

  return (
    <div className="appContainer">
      {isLoading && <Loader/>}

      {error && <p className="error">{error}</p>}

      {!isLoading && !error && (
        <>
          <div className="pokemonListContainer">
            <h1 className="pokemonListTitle">Pokemon List</h1>
            {pokemons.map((pokemon) => (
              <PokemonItem key={pokemon.pokedexNumber} {...pokemon} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
