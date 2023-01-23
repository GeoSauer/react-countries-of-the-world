import React from 'react';

export default function Controls({ setContinent, countries, setSearchValue, order, setOrder }) {
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div className="controls">
      <input type="text" placeholder="Search by name" onChange={handleSearchChange}></input>
      <select onChange={handleContinentChange}>
        <option value="all">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <select value={order} onChange={handleOrderChange}>
        <option value="">Select Sort Order</option>
        <option value="asc">A-Z Ascending</option>
        <option value="desc">A-Z Descending</option>
      </select>
    </div>
  );
}
