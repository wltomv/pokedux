import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import Searcher from "./components/Searcher/Searcher";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            setPokemons(pokemonsRes);
        };

        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <div className="title">
                <h1>POKEDUX</h1>
            </div>
            <Searcher />
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
