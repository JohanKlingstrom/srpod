import React from 'react';
import './SearchResults.css';
import EpisodeList from '../EpisodeList/EpisodeList'

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <EpisodeList episodes={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;