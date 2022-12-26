import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import Searcher from "./components/Searcher/Searcher";

function App() {
    return (
        <div className="App">
            <div className="title">
                <h1>POKEDUX</h1>
            </div>
            <Searcher />
            <PokemonGrid></PokemonGrid>
        </div>
    );
}

export default App;
