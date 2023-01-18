import * as React from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = React.useState([]);
  //   const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // setIsLoading(true);

    const fetchData = async () => {
      const resp = await fetchCountries();
      //   setIsLoading(false);
      setCountries(resp);
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

  return countries;
}
