import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input placeholder="Enter a search term" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;