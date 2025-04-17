import PokemonProp from "../../interfaces/pokemonProp";
import "./pokemonItem.css";

const PokemonItem = ({ pokedexNumber, name }: PokemonProp) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};

export default PokemonItem;
