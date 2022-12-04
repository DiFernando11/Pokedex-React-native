import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {
  const loadMorePokemons = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            color="#AEAEAE"
            size={"large"}
            style={styles.spinner}
          />
        )
      }
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default PokemonList;
