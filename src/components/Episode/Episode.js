import React from 'react';
import './Episode.css';

class Episode extends React.Component {
    render() {
        return (
            <div className="Episode">
                <div className="Episode-info">
                    <h3>{this.props.episode.title}</h3>
                    <p>{this.props.episode.podName}</p>
                </div>
                <button className="Episode-action">Choose</button>
            </div>
        )
    }
}

export default Episode;