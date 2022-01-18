import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>sr<span className="highlight">Pod</span></h1>
        <div className="App">
          <article className="main-content">
            <h2>Episode Name</h2>
            <p className="episode-description">
              Load an episode to start.
            </p>
          </article>
          <SearchBar />
          <div className="App-playlist">
            {/* <SearchResults /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
