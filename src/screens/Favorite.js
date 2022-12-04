import { StyleSheet, ImageBackground, Text, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_HOST } from "../utils/constans";
import { getPokemonsApi } from "../api/pokemon";
import backgroundInitial from "../assets/backgroundFavorite.jpg";
import screenInitial from "../assets/imageScreenInitial.png";
import ListChoosePokemon from "../components/toChooseCard/ListChoosePokemon";
import { getPokemonsFavorites } from "../api/favoriteApi";
import FavoriteList from "../components/capturePokemon/FavoriteList";

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const [refreshFavorite, setRefreshFavorite] = useState(false);
  const [pokemonsFavorites, setPokemonsFavorites] = useState([]);

  const [animationSelectPokemon, setAnimationSelectPokemon] =
    useState(screenInitial);
  const [visibilityPokemons, setVisibilityPokemons] = useState(false);
  const animationSelected = () => {
    setTimeout(() => {
      setAnimationSelectPokemon(backgroundInitial);
      setVisibilityPokemons(true);
    }, 5000);
  };
  const loadPokemons = async () => {
    try {
      const urlPokemons = `${API_HOST}/pokemon?limit=10&offset=0`;
      const response = await getPokemonsApi(urlPokemons);
      const filterThirdPokemon = await response.results.filter((pokemon) =>
        ["bulbasaur", "charmander", "squirtle"].includes(pokemon.name)
      );
      const pokemonsArray = [];

      for await (const pokemon of filterThirdPokemon) {
        const pokemonDetails = await getPokemonsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
          stats: pokemonDetails.stats,
        });
      }
      setPokemons(pokemonsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const pokemosDetailFavorites = await getPokemonsFavorites();
        setPokemonsFavorites(pokemosDetailFavorites);
      })();
    }, [refreshFavorite])
  );

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    animationSelected();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={
          !pokemonsFavorites.length ? animationSelectPokemon : backgroundInitial
        }
      >
        <Text style={styles.textToChoose}>Tus pokemons</Text>
        {visibilityPokemons && !pokemonsFavorites.length ? (
          <>
            <Text style={styles.textToChoose}>Escoge un pokemon</Text>
            <ListChoosePokemon
              pokemons={pokemons}
              setRefreshFavorite={setRefreshFavorite}
            />
          </>
        ) : (
          <FavoriteList
            pokemons={pokemonsFavorites}
            setRefreshFavorite={setRefreshFavorite}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  textToChoose: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#808080",
  },
});

export default Favorite;
