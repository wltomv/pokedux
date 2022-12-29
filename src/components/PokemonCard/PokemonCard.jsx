import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { background } from "../../utils/colorsByType";
import styled from "styled-components";

import "./PokemonCard.css";

const Card = styled.div`
    &:before {
        background: ${(props) => props.customColor};
    }
`;

const PokemonCard = ({ name, imagesrc, type }) => {
    const backgroundSelected = background[type];

    return (
        <Card className="card" customColor={backgroundSelected}>
            <button onClick={() => alert("Settings page")} className="star">
                <BsFillStarFill />
            </button>
            <div className="contentBox">
                <img src={imagesrc} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className="footer">
                <h3 className="stats">40</h3>
                <span className="type">fire</span>
            </div>
        </Card>
    );
};

export default PokemonCard;
