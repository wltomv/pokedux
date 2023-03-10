import { useEffect, useState } from "react";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import Searcher from "./components/Searcher/Searcher";
import { getPokemons, getPokemonDetails } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./components/Loader/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            const pokemonsDetailed = await Promise.all(
                pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
            );
            dispatch(setPokemons(pokemonsDetailed));
            setIsLoading(false);
        };
        setIsLoading(true);
        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <div className="title">
                <h1>POKEDUX</h1>
            </div>
            <Searcher />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <PokemonGrid pokemons={pokemons} />
            )}
        </div>
    );
}

export default App;
