import "./PokemonCard.css";

export default function PokemonCard({ id, name, type, onAdd }) {
  const paddedId = String(id).padStart(3, "0");
  const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

  function handleAddClick() {
    onAdd({ id, name, type });
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img
          src={imgUrl}
          alt={name}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      <div className="pokemon-info">
        <h3 className="pokemon-name">{name}</h3>
        <p className="pokemon-type">Type: {type}</p>

        <button onClick={handleAddClick}>Add to Team</button>
      </div>
    </div>
  );
}
