import { useState } from "react";

export default function usePokemonFunctions() {
  const [team, setTeam] = useState([]);

  // Add Pokémon
  function addPokemon(pokemon) {
    setTeam(prev => {
      const exists = prev.find(p => p.id === pokemon.id);

      if (exists) {
        return prev.map(p =>
          p.id === pokemon.id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { ...pokemon, count: 1 }];
    });
  }

  // Increment
  function increment(id) {
    setTeam(prev =>
      prev.map(p => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );
  }

  // Decrement
  function decrement(id) {
    setTeam(prev =>
      prev
        .map(p => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter(p => p.count > 0)
    );
  }

  // Remove
  function removePokemon(id) {
    setTeam(prev => prev.filter(p => p.id !== id));
  }

  return { team, addPokemon, increment, decrement, removePokemon };
}
