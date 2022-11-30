import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi } from "../api/pokemon";
import { API_HOST } from "../utils/constans";
import PokemonList from "../components/PokemonList";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);
  const loadPokemons = async () => {
    try {
      const urlPokemons = `${API_HOST}/pokemon?limit=20&offset=0`;
      const response = await getPokemonsApi(nextUrl || urlPokemons);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
