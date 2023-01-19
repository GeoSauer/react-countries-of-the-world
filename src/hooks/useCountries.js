import React from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setIsLoading(false);
      } catch (error) {
        setError('Oops!  Something went wrong');
      }
    };
    fetchData();
  }, [setCountries, setError, setIsLoading]);

  return { countries, setCountries, error, isLoading };
}
