import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { getColorByPokemonType } from "../../utils/constans";

const Header = ({ name, order, image, type }) => {
  const colorByType = getColorByPokemonType(type);
  const stylesBackgroundType = {
    backgroundColor: colorByType,
    ...styles.containerDetailPokemon,
  };
  return (
    <View style={stylesBackgroundType}>
      <View style={styles.containerHeaderTextPokemon}>
        <Text style={styles.textHeaderPokemon}>{name}</Text>
        <Text style={styles.textHeaderPokemon}>
          #{`${order}`.padStart(3, 0)}
        </Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetailPokemon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
  },
  containerHeaderTextPokemon: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeaderPokemon: {
    textTransform: "capitalize",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 80,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
export default Header;
