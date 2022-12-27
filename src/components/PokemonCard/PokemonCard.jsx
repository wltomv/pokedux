import React from "react";
import "./PokemonCard.css";
import { BsFillStarFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";

const PokemonCard = () => {
    return (
        <div className="card">
            <button onClick={() => alert("Settings page")} className="star">
                <BsFillStarFill />
            </button>
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
