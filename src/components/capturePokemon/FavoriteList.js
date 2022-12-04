import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "../PokemonCard";
import React from "react";

const FavoriteList = ({ pokemons, setRefreshFavorite }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.idFavorite)}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} setRefreshFavorite={setRefreshFavorite} />
      )}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});

export default FavoriteList;
