import {
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import capturePokemon from "../assets/capturePokemon.jpeg";


const Favorite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={capturePokemon}
        resizeMode="cover"
        style={styles.image}
      >

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
    justifyContent: "center",
  },
  
});

export default Favorite;
