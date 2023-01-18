import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="name">{name}</div>
      <div className="image">
        <img src={`https://flagcdn.com/160x120/${iso2.toLowerCase()}.png`} />
      </div>
    </div>
  );
}
