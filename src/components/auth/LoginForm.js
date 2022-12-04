import { View, Text, StyleSheet, Button, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { user, useDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";
const LoginForm = () => {
  const [dataUser, setDataUser] = useState({ name: "", contraseña: "" });
  const { login } = useAuth();
  const handleChange = (name, text) => {
    setDataUser({ ...dataUser, [name]: text });
  };
  console.log(useAuth());
  const handleSubmit = () => {
    const { name, contraseña } = dataUser;
    if (user.name !== name || user.contraseña !== contraseña)
      ToastAndroid.show(
        "El usuario o contraseña son incorrectos",
        ToastAndroid.SHORT
      );
    else login(useDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <Text>user: difer11 </Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        value={dataUser.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <Text>paswoord: 123456</Text>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        value={dataUser.contraseña}
        onChangeText={(text) => handleChange("contraseña", text)}
      />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default LoginForm;
