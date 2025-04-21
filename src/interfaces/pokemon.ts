import { Type } from "@/interfaces";

interface Pokemon {
  pokedexNumber: number;
  name: string;
  imgUrl: string;
  types: Type[];
}

export default Pokemon;
