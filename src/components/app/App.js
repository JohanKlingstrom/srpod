import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Player from '../Player/Player';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [{title: 'title1', podName: 'podName1', id: '1'}
    , {title: 'title2', podName: 'podName2', id: '2'}
    , {title: 'title3', podName: 'podName3', id: '3'}]
    }
  }

  render() {
    return (
      <div>
        <h1>sr<span className="highlight">Pod</span></h1>
        <div className="App">
          <article className="main-content">
            <Player />
          </article>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
