import PokemonCard from "../PokemonCard/PokemonCard";

import "./PokemonGrid.css";

const pokemonsTemp = Array(10).fill("");
const PokemonGrid = ({ pokemons }) => {
    console.log(pokemons);
    return (
        <div className="container">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} />;
            })}
        </div>
    );
};

export default PokemonGrid;
