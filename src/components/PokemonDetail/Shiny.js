import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavorites, isCapturedPokemon } from "../../api/favoriteApi";

const Shiny = ({ id, name, image, type }) => {
  const [pokemonsFavorites, setPokemonsFavorites] = useState([]);
  const [pokemonExisted, setPokemonExisted] = useState(false);
  const navigation = useNavigation();
  const { auth } = useAuth();

  const goToCapture = () => {
    if (!auth) navigation.navigate("Account");
    else if (!pokemonsFavorites.length) navigation.navigate("Favorite");
    else navigation.navigate("CapturePokemon", { id, name, image, type });
  };
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const pokemosDetailFavorites = await isCapturedPokemon(id);
        setPokemonExisted(pokemosDetailFavorites);
        const pokemonFavoritesLength = await getPokemonsFavorites();
        setPokemonsFavorites(pokemonFavoritesLength);
      })();
    }, [])
  );
  return (
    <View style={styles.containerImageText}>
      {!pokemonExisted ? (
        <TouchableOpacity style={styles.buttonCapture} onPress={goToCapture}>
          <Text style={styles.textCapture}>Atrapar</Text>
          <Image
            style={styles.imageCapture}
            source={{
              uri: "https://m.media-amazon.com/images/I/71EWLJFu5CL.png",
            }}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonCapture}>
          <Text style={styles.textCapture}>Atrapado</Text>
          <Image
            style={styles.imageCapture}
            source={{
              uri: "https://m.media-amazon.com/images/I/71EWLJFu5CL.png",
            }}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerImageText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 174,
  },
  buttonCapture: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: "#696969",
  },
  textCapture: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  imageCapture: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
export default Shiny;
