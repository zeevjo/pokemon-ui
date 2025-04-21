import { Type } from "@/interfaces/type";

export interface Pokemon {
  pokedexNumber: number;
  name: string;
  imgUrl: string;
  types: Type[];
}


