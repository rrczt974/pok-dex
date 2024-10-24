import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

// ma pokemon list 
const pokemonList = [
	{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
  ];
  

// Ma fonction App
function App () {
  const [pokemonIndex, setPokemonIndex] = useState(0);
    
return (
  <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>

      <button onClick= {
        () => { 
          if (pokemonIndex >= 1) {
          setPokemonIndex(pokemonIndex - 1);
        }}
        } >
          PRECEDENT </button>
      
      <button onClick= {
        () => { 
          if (pokemonIndex < pokemonList.length -1 ) {
          setPokemonIndex(pokemonIndex + 1);
        }}
        } >
          SUIVANT </button>

  </>
)
}


export default App;
