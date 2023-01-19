import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';
import Controls from '../../Controls/Controls';
import './Main.css';
import '../../Controls/Controls.css';

export default function Main() {
  const [continent, setContinent] = React.useState('all');
  const [searchValue, setSearchValue] = React.useState('');

  //   const [countries, setCountries] = React.useState([]);
  //   const [error, setError] = React.useState(null);
  //   const [isLoading, setIsLoading] = React.useState(true);

  const { countries, error, isLoading } = useCountries();
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  if (isLoading && !error) {
    return (
      <article>
        <p style={{ textAlign: 'center', fontWeight: '700' }}>Loading...</p>
      </article>
    );
  }

  return (
    <>
      <Controls className="controls" {...{ setContinent, countries, setSearchValue }} />
      <main className="country-display">
        {filtered
          .filter(({ name }) => name.includes(searchValue) || name.match(setSearchValue))
          .map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        <p style={{ color: 'red', fontWeight: '700' }}>{error}</p>
      </main>
    </>
  );
}
