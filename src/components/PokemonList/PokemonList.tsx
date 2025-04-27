import { PokemonItem } from "@/components/PokemonItem/PokemonItem";
import { Loader } from "@/components/Loader/Loader";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { usePokemons } from "@/hooks/usePokemons/usePokemons";
import "./PokemonList.css";

export const PokemonList = () => {
  const { pokemons, error, isLoading } = usePokemons();

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <div className="pokemonListContainer">
          <h1 className="pokemonListTitle">Pokemon List</h1>
          {pokemons.map((pokemon) => (
            <PokemonItem
              key={pokemon.pokedexNumber}
              pokedexNumber={pokemon.pokedexNumber}
              name={pokemon.name}
            />
          ))}
        </div>
      )}
    </>
  );
};
