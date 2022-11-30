export const API_HOST = "https://pokeapi.co/api/v2";
export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

export const getColorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export const POKEMON_TYPE_BACKGROUND = {
  normal:
    "https://pokemongohub.net/wp-content/uploads/2019/05/Normal-Types.jpg",
  fighting: "https://wallpapercave.com/wp/wp7600795.jpg",
  flying: "https://wallpaperaccess.com/full/4186766.jpg",
  poison: "https://wallpaperaccess.com/full/3588322.jpg",
  ground:
    "https://pokemongohub.net/wp-content/uploads/2019/01/Ground-Types.jpg",
  rock: "https://pokemon-go.name/wp-content/uploads/2020/04/ground-type-pokemon-in-pokemon-go.jpg",
  bug: "https://pokemongohub.net/wp-content/uploads/2019/01/Bug-Types.jpg",
  ghost:
    "https://pm1.narvii.com/7243/1932c3243860328e1f1cd07d65e02649672380ecr1-700-444v2_hq.jpg",
  steel: "https://i.ytimg.com/vi/IK9TxCgn7IM/maxresdefault.jpg",
  fire: "https://wallpaperaccess.com/full/437732.jpg",
  water: "https://i.ytimg.com/vi/9pyp6BXqcDM/maxresdefault.jpg",
  grass:
    "https://static.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png/revision/latest/scale-to-width-down/250?cb=20171026003722",
  electric:
    "https://pokemongohub.net/wp-content/uploads/2019/01/Electric-Types.jpg",
  psychic:
    "https://pokemongohub.net/wp-content/uploads/2019/01/Psychic-Types.jpg",
  ice: "https://i.pinimg.com/736x/90/6a/22/906a2249a53f89658bdf6b77959d0af0.jpg",
  dragon:
    "https://pokemongohub.net/wp-content/uploads/2019/01/Dragon-Types.jpg",
  dark: "https://i.pinimg.com/originals/8d/99/c9/8d99c9245081fa8de172640efd91fde4.png",
  fairy: "https://wallpaperaccess.com/full/2337167.jpg",
};

export const getBackgroundByPokemonType = (type) =>
  POKEMON_TYPE_BACKGROUND[type.toLowerCase()];
