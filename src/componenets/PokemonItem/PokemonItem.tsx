import { Pokemon } from "../../types/pokemon";
import "./pokemonItem.css";

const PokemonItem = ({ pokedexNumber, name }: Pokemon) => {
  return (
    <li>
      <div>Pokemon Number:{pokedexNumber}</div>
      <div>Pokemon Name:{name}</div> 
    </li>
  );
};

export default PokemonItem;
