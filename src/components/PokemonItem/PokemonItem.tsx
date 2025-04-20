import { PokemonProps } from "@/interfaces";
import "./pokemonItem.css";

const PokemonItem = ({ pokedexNumber, name }: PokemonProps) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};

export default PokemonItem;
