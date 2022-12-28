import React from "react";
import "./PokemonCard.css";
import { BsFillStarFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";

const PokemonCard = ({ name, imagesrc }) => {
    return (
        <div className="card">
            <button onClick={() => alert("Settings page")} className="star">
                <BsFillStarFill />
            </button>
            <div className="contentBox">
                <img
                    src={imagesrc}
                    alt=""
                />
                <h2>{name}</h2>
            </div>
            <div className="footer">
                <h3 className="stats">40</h3>
                <span className="type">fire</span>
            </div>
        </div>
    );
};

export default PokemonCard;
