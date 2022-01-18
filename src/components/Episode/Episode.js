import React from 'react';
import './Episode.css';

class Episode extends React.Component {
    constructor(props) {
        super(props);

        this.addEpisode = this.addEpisode.bind(this);
    }

    addEpisode() {
        this.props.onAdd(this.props.episode);
    }

    render() {
        return (
            <div className="Episode">
                <div className="Episode-info">
                    <h3>{this.props.episode.title}</h3>
                    <p>{this.props.episode.program}</p>
                </div>
                <button className="Episode-action" onClick={this.addEpisode}>Choose</button>
            </div>
        )
    }
}

export default Episode;