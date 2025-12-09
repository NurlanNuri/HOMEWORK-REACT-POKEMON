import "./App.css";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import YourTeam from "./Components/YourTeam/YourTeam";
import TotalPokemons from "./Components/TotalPokemons/TotalPokemons";
import usePokemonFunctions from "./Hooks/usePokemonFunctions.js";

export default function App() {
  const pokemons = [
    { id: 4, name: "Charmander", type: "Fire" },
    { id: 7, name: "Squirtle", type: "Water" },
    { id: 11, name: "Metapod", type: "Bug" },
    { id: 12, name: "Butterfree", type: "Flying" },
    { id: 25, name: "Pikachu", type: "Electric" },
    { id: 39, name: "Jigglypuff", type: "Normal" },
    { id: 94, name: "Gengar", type: "Poison" },
    { id: 133, name: "Eevee", type: "Normal" },
  ];

  const { team, addPokemon, increment, decrement, removePokemon } =
    usePokemonFunctions();

  return (
    <div>
      <h1>Pokémon Team Manager</h1>

      <div className="card-container">
        {pokemons.map((p) => (
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            onAdd={addPokemon}
          />
        ))}
      </div>

      <div className="team-container">
        <YourTeam
          team={team}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={removePokemon}
        />
      </div>
      <TotalPokemons team={team} />
    </div>
  );
}
