// Mes props pokemon

// ma fonction pokemonCards
function PokemonCard(props) {
	const {pokemon} = props;
	

	return (
		<figure>
			<img
				src={pokemon.imgSrc !== "" ? pokemon.imgSrc : ""} 
				alt={pokemon.imgSrc !== "" ? "???" : pokemon.name}
				/>
			<figcaption> {pokemon.name} </figcaption>
		</figure>
	);
}

export default PokemonCard;
// 
				
//={pokemon[1].imgSrc} // = true ? pokemon[0].name : "???"}
