import React from 'react';
import './Player.css';

class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>Episode Name</h2>
                <p className="episode-description">
                Load an episode to start.</p>
            </div>
        )
    }
}

export default Player;