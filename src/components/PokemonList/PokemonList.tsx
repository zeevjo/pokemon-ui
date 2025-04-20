import { useEffect, useState } from "react";
import { PokemonItem, Loader, ErrorMessage } from "@/components";
import { API, ERROR_MESSAGE } from "@/constants";
import { PokemonProps } from "@/interfaces";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const url = `${API.BASE_URL}${API.PATHS.GET_ALL_POKEMON}`;

      const response = await fetch(url);

      if (!response.ok) throw new Error(ERROR_MESSAGE.TRY_AGAIN_LATER);

      const data = await response.json();
      setPokemons(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <div className="pokemonListContainer">
          <h1 className="pokemonListTitle">Pokemon List</h1>
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.pokedexNumber} {...pokemon} />
          ))}
        </div>
      )}
    </>
  );
};

export default PokemonList;
