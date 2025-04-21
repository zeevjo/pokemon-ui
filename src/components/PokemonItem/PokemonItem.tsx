import { Pokemon } from "@/interfaces/pokemon";
import "./pokemonItem.css";

export const PokemonItem = ({ pokedexNumber, name }: Pokemon) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};