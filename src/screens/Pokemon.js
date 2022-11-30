import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi } from "../api/pokemon";
import { API_HOST, getBackgroundByPokemonType } from "../utils/constans";
import Header from "../components/PokemonDetail/Header";
import Type from "../components/PokemonDetail/Type";
import Stats from "../components/PokemonDetail/Stats";
import Shiny from "../components/PokemonDetail/Shiny";

const Pokemon = ({ route: { params }, navigation }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const url = `${API_HOST}/pokemon/${params.id}`;
        const response = await getPokemonsApi(url);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  if (!pokemon) return null;
  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: getBackgroundByPokemonType(pokemon.types[0].type.name) }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other["home"].front_default}
          type={pokemon.types[0].type.name}
        />
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
        <Shiny
          id={pokemon.id}
          image={pokemon.sprites.other["home"].front_default}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
});
export default Pokemon;
