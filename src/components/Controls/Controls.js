import React from 'react';

export default function Controls({ setContinent, countries, setSearchValue }) {
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="controls">
      <input type="text" placeholder="Search by name" onChange={handleChange}></input>
      <select onChange={(event) => setContinent(event.target.value)}>
        <option value="all">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
