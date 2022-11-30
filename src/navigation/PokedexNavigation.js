import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";
import CapturePokemon from "../components/capturePokemon/CapturePokemon";
const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokedexNavigation" component={Pokedex} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="CapturePokemon"
        component={CapturePokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
