import {
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video } from "expo-av";
import capturePokemon from "../../assets/capturePokemon.jpeg";
import ModalPokemon from "../ModalPokemon/ModalPokemon";
import { addPokemonFavorite, isCapturedPokemon } from "../../api/favoriteApi";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const CapturePokemon = ({ route: { params } }) => {
  const navigation = useNavigation();
  const [pokemonExisted, setPokemonExisted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [goCapture, setGoCapture] = useState(false);
  const [closePokeball, setClosePokeball] = useState(false);
  const [isCapturedPokemons, setIsCapturedPokemon] = useState(false);

  const handleGoCapture = () => {
    const isCaptured = Math.floor(Math.random() * 3 + 1);
    if (isCaptured === 1) setIsCapturedPokemon(false);
    else {
      addPokemonFavorite(params.id, params.image, params.name, params.type);
      setIsCapturedPokemon(true);
    }
    setGoCapture(!goCapture);
    setTimeout(() => setClosePokeball(true), 3400);
    setTimeout(() => setModalVisible(true), 7000);
  };
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const pokemosDetailFavorites = await isCapturedPokemon(params.id);
        if (pokemosDetailFavorites) navigation.navigate("Pokemon");
      })();
    }, [])
  );

  const elementsSectionCapturedPokemon = () => {
    return (
      <>
        {!closePokeball && (
          <View style={styles.image}>
            <Image source={{ uri: params.image }} style={styles.imagePokemon} />
          </View>
        )}
        {!goCapture && (
          <TouchableOpacity
            style={styles.buttonCapture}
            onPress={handleGoCapture}
          >
            <Text style={styles.textCapture}>LANZAR</Text>
            <Image
              style={styles.imageCapture}
              source={{
                uri: "https://m.media-amazon.com/images/I/71EWLJFu5CL.png",
              }}
            ></Image>
          </TouchableOpacity>
          // <TouchableOpacity onPress={handleGoCapture} style={styles.goCapture}>
          //   <Text> PressMe</Text>
          // </TouchableOpacity>
        )}

        {modalVisible && (
          <ModalPokemon
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            isCapturedPokemon={isCapturedPokemons}
            setClosePokeball={setClosePokeball}
            setGoCapture={setGoCapture}
          />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!goCapture ? (
        <ImageBackground style={styles.image} source={capturePokemon}>
          {elementsSectionCapturedPokemon()}
        </ImageBackground>
      ) : (
        <>
          <Video
            source={require("../../assets/capturedPokemonv3.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.backgroundVideo}
          />

          {elementsSectionCapturedPokemon()}
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "120%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePokemon: {
    width: 450,
    height: 450,
    marginBottom: 50,
  },

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonCapture: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: "#696969",
    marginBottom: 100,
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
export default CapturePokemon;
