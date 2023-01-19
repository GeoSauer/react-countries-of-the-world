import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';
import Controls from '../../Controls/Controls';
import './Main.css';
import '../../Controls/Controls.css';

export default function Main() {
  const [continent, setContinent] = React.useState('all');
  const { countries, error, isLoading } = useCountries();
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <>
      <Controls className="controls" {...{ setContinent, countries }} />
      <main className="country-display">
        {filtered.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
        <p style={{ color: 'red' }}>{error}</p>
      </main>
    </>
  );
}
