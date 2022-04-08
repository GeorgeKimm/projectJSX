import { useState } from "react";

export function useFetching(callback) {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  async function fetching() {
    try {
      setIsloading(true);
      await callback();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsloading(false);
    }
  }

  return [fetching, isLoading, error];
}
