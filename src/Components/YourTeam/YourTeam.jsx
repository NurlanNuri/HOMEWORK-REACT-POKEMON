import "./YourTeam.css";

export default function YourTeam({ team, onIncrement, onDecrement, onRemove }) {
  return (
    <div>
      <h2>Your Team</h2>

      {team.map((pokemon) => {
        const padded = String(pokemon.id).padStart(3, "0");
        const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padded}.png`;

        return (
          <div key={pokemon.id} className="pokemonRow">
            <div>
              <img src={imgUrl} alt={pokemon.name} />
            </div>
            <p>{pokemon.name}</p>

            <div className="increments">
              <button onClick={() => onDecrement(pokemon.id)}>-</button>
              <p>{pokemon.count}</p>
              <button onClick={() => onIncrement(pokemon.id)}>+</button>
            </div>

            <button onClick={() => onRemove(pokemon.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
