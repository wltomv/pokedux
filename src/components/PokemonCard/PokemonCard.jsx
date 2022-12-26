import React from "react";
import "./PokemonCard.css";

const PokemonCard = () => {
    return (
        <div className="card">
            <div className="contentBox">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                    alt=""
                />
                <h2>Charizard</h2>
            </div>
            <div className="footer">
                <h3 className="stats">40</h3>
                <span className="type">fire</span>
            </div>
        </div>
    );
};

export default PokemonCard;
