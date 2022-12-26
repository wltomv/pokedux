import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Searcher from "./components/Searcher/Searcher";

function App() {
    return (
        <div className="App">
            <h1>POKEDUX</h1>
            <Searcher />
            <PokemonCard />
        </div>
    );
}

export default App;
