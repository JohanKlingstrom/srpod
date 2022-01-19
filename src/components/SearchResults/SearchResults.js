import React from 'react';
import './SearchResults.css';
import EpisodeList from '../EpisodeList/EpisodeList'

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Search results:</h2>
                <EpisodeList episodes={this.props.searchResults} 
                onAdd={this.props.onAdd} />
            </div>
        )
    }
}

export default SearchResults;