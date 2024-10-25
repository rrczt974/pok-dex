import { useEffect } from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}


function NavBar({pokemonList, setPokemonIndex, pokemonIndex} : NavBarProps) {
  const handleClick = (index:number) => 
    {setPokemonIndex(index)};
  
     useEffect(() => { 
      if (pokemonIndex === 3) {
        alert("pika pikachu !!!");
      } else {
        alert("hello pokemon trainer :)");
      }
    }, [pokemonIndex]); 
    
    
	return (
		<>
          {pokemonList.map((pokemon,index)=> 
          {return (
                  <button key={pokemon.name} type="button"  onClick={() => handleClick(index)} > {pokemon.name}  </button>
                
                )})}
            
		</>
	);
}

export default NavBar;