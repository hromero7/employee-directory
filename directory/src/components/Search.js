import React from "react";
import "../App.css";

const SearchBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </nav>
    )
}

export default SearchBar;