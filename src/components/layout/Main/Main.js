import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';
import Controls from '../../Controls/Controls';
import './Main.css';
import '../../Controls/Controls.css';
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';

export default function Main() {
  const [searchValue, setSearchValue] = React.useState('');
  const [continent, setContinent] = React.useState('all');
  const [order, setOrder] = React.useState('');

  const { countries, error, isLoading } = useCountries(order);

  const filteredCountries = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  if (isLoading && !error) {
    return (
      <article>
        <TripleMaze text={'Loading...'} />
      </article>
    );
  }

  return (
    <>
      <Controls
        className="controls"
        {...{ setContinent, countries, setSearchValue, order, setOrder }}
      />
      <main className="country-display">
        {filteredCountries
          .filter(({ name }) => name.includes(searchValue) || name.match(setSearchValue))
          .map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        <p style={{ color: 'red', fontWeight: '700' }}>{error}</p>
      </main>
    </>
  );
}
