import React from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = React.useState([]);
  const [error, setError] = React.useState(null);
  //   const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        //   setIsLoading(false);
        setCountries(resp);
      } catch (error) {
        setError('Oops!  Something went wrong');
      }
    };
    fetchData();
  }, []);

  //   if (isLoading) {
  //     return (
  //       <article>
  //         <p>Loading...</p>
  //       </article>
  //     );
  //   }

  return { countries, error };
}
