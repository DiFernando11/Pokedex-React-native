import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constans";

//import {} from
export async function getPokemonsFavorites() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const responseJSON = JSON.parse(response);
    return responseJSON ? responseJSON : [];
  } catch (error) {
    throw error;
  }
}
export async function addPokemonFavorite(id, image, name, type) {
  try {
    //const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const pokemonsExisted = await getPokemonsFavorites();
    const somePokemon = pokemonsExisted.some((pokemon) => pokemon.id === id);
    if (!somePokemon) {
      const idFavorite = pokemonsExisted.length
        ? Math.max(...pokemonsExisted.map((i) => i.idFavorite)) + 1
        : 1;

      const favorites = [
        ...pokemonsExisted,
        { id, idFavorite, image, name, type },
      ];
      await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }
  } catch (error) {
    throw error;
  }
}
export async function deletePokemonFavorite(id) {
  try {
    const pokemonsExisted = await getPokemonsFavorites();
    const favorites = pokemonsExisted.filter(
      (pokemon) => pokemon.idFavorite !== id
    );
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (exception) {
    return false;
  }
}

export async function removeItemValue() {
  try {
    await AsyncStorage.removeItem(FAVORITE_STORAGE);
    return true;
  } catch (exception) {
    return false;
  }
}
export async function isCapturedPokemon(id) {
  try {
    const pokemonsExisted = await getPokemonsFavorites();
    const somePokemon = pokemonsExisted.some((pokemon) => pokemon.id === id);
    return somePokemon;
  } catch (exception) {
    return false;
  }
}
export async function countYourPokemons() {
  try {
    const pokemonsExisted = await getPokemonsFavorites();
    return pokemonsExisted.length;
  } catch (exception) {
    return false;
  }
}
