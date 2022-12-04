import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import useAuth from "../../hooks/useAuth";
import { countYourPokemons } from "../../api/favoriteApi";

const UserData = () => {
  const { auth, logOut } = useAuth();
  const [countPokemon, setCountPokemon] = useState(0);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const pokemosCounts = await countYourPokemons();
        setCountPokemon(pokemosCounts);
      })();
    }, [])
  );
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text
          style={styles.title}
        >{`Bienvenido ${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title={"Nombre"}
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title={"UserName"} text={auth.name} />
        <ItemMenu title={"Email"} text={auth.email} />
        <ItemMenu title={"Tus Pokemons"} text={`${countPokemon} pokemons`} />
      </View>
      <Button title="Desconectarse" onPress={logOut} />
    </View>
  );
};

function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 50,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});

export default UserData;
