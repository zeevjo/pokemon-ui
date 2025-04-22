import { Pokemon as PokemonProps } from "@/interfaces/pokemon";
import "./pokemonItem.css";

export const PokemonItem = ({ pokedexNumber, name }: PokemonProps) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};