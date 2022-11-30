import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Shiny = ({ id, image }) => {
  const navigation = useNavigation();
  const goToCapture = () => {
    navigation.navigate("CapturePokemon", { id, image });
  };
  return (
    <View style={styles.containerImageText}>
      <TouchableOpacity style={styles.buttonCapture} onPress={goToCapture}>
        <Text style={styles.textCapture}>ATRAPAR</Text>
        <Image
          style={styles.imageCapture}
          source={{
            uri: "https://m.media-amazon.com/images/I/71EWLJFu5CL.png",
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerImageText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 180,
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
