import React from 'react';
import './Player.css';

class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.currentEpisode.title}</h2>
                <p className="episode-description">{this.props.currentEpisode.description}</p>
                <audio className="episode-player" controls src={this.props.currentEpisode.audio}>Your browser does not support the audio element</audio>
            </div>
        )
    }
}

export default Player;