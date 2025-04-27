import "./pokemonItem.css";

interface PokemonItemPorps {
  pokedexNumber: number;
  name: string;
}

export const PokemonItem = ({ pokedexNumber, name }: PokemonItemPorps) => {
  return (
    <li className="pokemonItemContainer">
      <div>Pokemon Number: {pokedexNumber}</div>
      <div>Pokemon Name: {name}</div>
    </li>
  );
};
