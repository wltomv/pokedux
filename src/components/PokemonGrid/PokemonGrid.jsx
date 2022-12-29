import PokemonCard from "../PokemonCard/PokemonCard";

import "./PokemonGrid.css";

const PokemonGrid = ({ pokemons }) => {
    return (
        <div className="container">
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        name={pokemon.name}
                        imagesrc={
                            pokemon.sprites.other.dream_world.front_default
                        }
                        type={pokemon.types[0].type.name}
                    />
                );
            })}
        </div>
    );
};

export default PokemonGrid;
