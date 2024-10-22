function PokemonCard() {
    const pokemon = pokemonList[1];
    
    return <figure>
        <img src={pokemon.imgSrc !== "" ? pokemon.imgSrc : "pas de source"}
             alt={pokemon.imgSrc === true ? pokemon.name : "???" } />
          
          <figcaption>{pokemon.name}</figcaption>
          </figure>
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


export default PokemonCard;

// Modifie ton code pour afficher l'image du Pokémon seulement si pokemon.imgSrc est défini. 
// Si l'image est disponible, utilise une balise <img> pour l'afficher. Sinon, affiche un paragraphe <p> avec "???" en texte. Utilise l'opérateur ternaire ?: pour cela.