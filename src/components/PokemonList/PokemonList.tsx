import { useEffect, useState } from "react";
import { PokemonItem } from "@/components/PokemonItem/PokemonItem";
import { Loader } from "@/components/Loader/Loader";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { API } from "@/constants/apiPaths";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import { Pokemon } from "@/interfaces/pokemon";
import { useOperationState } from "@/hooks/useOperationState/useOperationState";
import "./PokemonList.css";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { error, setError, isLoading, setIsLoading } = useOperationState();

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
