import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const ModalPokemon = ({
  modalVisible,
  setModalVisible,
  isCapturedPokemon,
  setClosePokeball,
  setGoCapture,
}) => {
  const navigation = useNavigation();
  console.log(isCapturedPokemon);
  const handleCloseModal = () => {
    setModalVisible(false);
    setClosePokeball(false);
    setGoCapture(false);
    if (isCapturedPokemon) navigation.navigate("Favorite");
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              style={styles.imageBackground}
              source={{
                uri: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-for-desktop.png",
              }}
            >
              {isCapturedPokemon ? (
                <Text style={styles.modalText}>Atrapado exitosamente!</Text>
              ) : (
                <View style={styles.containerImage}>
                  <Text style={styles.modalText}>
                    Que lastima el Pokemon ha escapado
                  </Text>
                  <Image
                    style={styles.imageEscPokemon}
                    source={{
                      uri: "https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif",
                    }}
                  />
                </View>
              )}

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleCloseModal}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imageEscPokemon: {
    width: 80,
    height: 55,
  },
});
export default ModalPokemon;
