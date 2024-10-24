import { useState } from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<>
			<button
				onClick={() => {
					if (pokemonIndex > 0) {
						setPokemonIndex(pokemonIndex - 1);
					}
				}}
			>
				PRECEDENT
			</button>

			<button
				onClick={() => {
					if (pokemonIndex < pokemonList.length - 1) {
						setPokemonIndex(pokemonIndex + 1);
					}
				}}
			>
				SUIVANT
			</button>
		</>
	);
}

export default NavBar;


