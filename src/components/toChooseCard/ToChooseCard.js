import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Stats from "../PokemonDetail/Stats";
import { getColorByPokemonType } from "../../utils/constans";
import { addPokemonFavorite } from "../../api/favoriteApi";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const ToChooseCard = ({ pokemon, setRefreshFavorite }) => {
  const navigation = useNavigation();
  const { auth } = useAuth();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const cardStyles = {
    backgroundColor: pokemonColor,
    ...styles.card,
  };
  const handleSaveFavoritePokemon = async () => {
    if (!auth) navigation.navigate("Account");
    await addPokemonFavorite(
      pokemon.id,
      pokemon.image,
      pokemon.name,
      pokemon.type
    );
    setRefreshFavorite((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSaveFavoritePokemon}>
      <View style={cardStyles}>
        <Text style={styles.pokemonName}>{pokemon.name} </Text>
        <Image style={styles.imagePokemon} source={{ uri: pokemon.image }} />
        {pokemon.stats && <Stats stats={pokemon.stats} />}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 264,
    margin: 8,
    borderRadius: 20,
  },

  pokemonName: {
    color: "white",
    marginLeft: "auto",
    margin: 0,

    paddingRight: 16,
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  imagePokemon: {
    position: "absolute",
    marginLeft: 12,
    marginTop: -16,
    margin: 0,
    padding: 0,
    width: 90,
    height: 90,
  },
});

export default ToChooseCard;
