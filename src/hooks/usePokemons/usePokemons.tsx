import { useState, useEffect, useRef } from "react";
import { API } from "@/constants/apiPaths";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import { Pokemon } from "@/interfaces/pokemon";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(true);

  const fetchPokemons = async () => {
    try {
      const url = `${API.BASE_URL}${API.PATHS.GET_ALL_POKEMON}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error(ERROR_MESSAGE.TRY_AGAIN_LATER);

      const data = await response.json();
      if (isMountedRef.current) setPokemons(data);
    } catch (err) {
      if (err instanceof Error && isMountedRef.current) setError(err.message);
    } finally {
      console.log("test", isMountedRef);
      
      if (isMountedRef.current) setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return { pokemons, error, isLoading };
};
