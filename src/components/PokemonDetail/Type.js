import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getColorByPokemonType } from "../../utils/constans";

const Type = ({ types }) => {
  return (
    <View style={styles.content}>
      {types.length &&
        types.map((type) => (
          <Text
            style={{
              ...styles.textType,
              backgroundColor: getColorByPokemonType(type.type.name),
            }}
            key={type.slot}
          >
            {type.type.name}
          </Text>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textType: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    textTransform: "capitalize",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#000000",
  },
});

export default Type;
