import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Searcher.css";

const Searcher = () => {
    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search"
                className="textfield"
                name="search"
            />
            <button type="button" className="btnSearch">
                <BiSearchAlt></BiSearchAlt>
            </button>
        </div>
    );
};

export default Searcher;
