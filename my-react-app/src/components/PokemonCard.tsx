// interface props
interface PokemonProps {
	imgSrc? : string;
	name : string;
}

// ma fonction pokemonCards
function PokemonCard({pokemon} : PokemonProps) {
	
	return (
		<figure>
			<img
				src={pokemon.imgSrc ? pokemon.imgSrc : ""} 
				alt={pokemon.imgSrc ? pokemon.name : "???"}
				/>
			<figcaption> {pokemon.name} </figcaption>
		</figure>
	);
}

export default PokemonCard;
// 
				
//={pokemon[1].imgSrc} // = true ? pokemon[0].name : "???"}
