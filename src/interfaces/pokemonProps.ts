import { Type } from "@/interfaces";

interface PokemonProp {
  pokedexNumber: number;
  name: string;
  imgUrl: string;
  types: Type[];
}

export default PokemonProp;
