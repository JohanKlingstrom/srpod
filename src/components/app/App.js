import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Player from '../Player/Player';
import srApi from '../../util/srApi';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      currentEpisode: {}
    }
    this.search = this.search.bind(this);
    this.addEpisode = this.addEpisode.bind(this);
  }

  search(term) {
    srApi.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  addEpisode(episode) {
    this.setState({currentEpisode: episode});
  }

  render() {
    return (
      <div>
        <a href='/'><h1>sr<span className="highlight">Pod</span></h1></a>
        <div className="App">
          <article className="main-content">
            {this.state.currentEpisode.id > 0 ? (
              <Player currentEpisode={this.state.currentEpisode} />
            ) : (
              <h2>Load in an episode to begin.</h2>
            )}
            
          </article>
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addEpisode} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
