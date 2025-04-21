import { useState } from "react";

export const useOperationState = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return {
    error,
    setError,
    isLoading,
    setIsLoading,
  };
};
