import { Type } from "./type";

export type Pokemon = {
    pokedexNumber: number;
    name: string;
    imgUrl: string;
    types: Type[];
}