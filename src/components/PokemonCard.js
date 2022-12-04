import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getColorByPokemonType } from "../utils/constans";
import { deletePokemonFavorite } from "../api/favoriteApi";

const PokemonCard = ({ pokemon, setRefreshFavorite }) => {
  const navigation = useNavigation();
  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  const handleDeletePokemonFavorite = async () => {
    await deletePokemonFavorite(pokemon.idFavorite);
    setRefreshFavorite((prev) => !prev);
  };

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const cardStyles = {
    backgroundColor: pokemonColor,
    ...styles.card,
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={cardStyles}>
        {pokemon.order && (
          <Text style={styles.orderPokemon}>
            #{`${pokemon.order}`.padStart(3, 0)}
          </Text>
        )}
        {pokemon.idFavorite && pokemon.idFavorite !== 1 && (
          <Button title="Delete" onPress={handleDeletePokemonFavorite} />
        )}

        <Image style={styles.imagePokemon} source={{ uri: pokemon.image }} />
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    margin: 8,
    borderRadius: 20,
  },

  pokemonName: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "grey",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 4,
    paddingTop: 10,
    zIndex: -1,
    textTransform: "capitalize",
  },
  imagePokemon: {
    position: "absolute",
    bottom: 0,
    right: 2,
    width: 90,
    height: 90,
  },
  orderPokemon: {
    color: "white",
    marginLeft: "auto",
    paddingRight: 16,
    fontWeight: "bold",
  },
});

export default PokemonCard;
