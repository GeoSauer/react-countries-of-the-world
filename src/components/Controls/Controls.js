export default function Controls({ setContinent, countries }) {
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  return (
    <div className="controls">
      {/* <input type="text"></input> */}
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
