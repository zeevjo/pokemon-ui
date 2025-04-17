import Pokemon from "../../interfaces/pokemon";
import "./pokemonItem.css";

const PokemonItem = ({ pokedexNumber, name }: Pokemon) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};

export default PokemonItem;
