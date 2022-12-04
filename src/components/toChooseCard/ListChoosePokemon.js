import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ToChooseCard from "./ToChooseCard";

const ListChoosePokemon = ({ pokemons ,  setRefreshFavorite }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <ToChooseCard pokemon={item}  setRefreshFavorite={setRefreshFavorite} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});
export default ListChoosePokemon;
