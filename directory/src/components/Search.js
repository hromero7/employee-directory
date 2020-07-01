import React from "react";
import "../App.css";

const SearchBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.onChange} />
            </form>
        </nav>
    )
}

export default SearchBar;