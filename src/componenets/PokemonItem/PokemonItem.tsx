import "./pokemonItem.css"

type Type = {
    name: string;
}

type PokemonItem = {
    pokedexNumber: number;
    name: string;
    imgUrl: string;
    types: Type[];
}

const PokemonItem = ({pokedexNumber, name}: PokemonItem) => {
  return (
    <li>Pokemon Number:{pokedexNumber}, Pokemon Name:{name}</li>
  )
}

export default PokemonItem;