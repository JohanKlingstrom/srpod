import React from 'react';
import './EpisodeList.css';
import Episode from '../Episode/Episode';

class EpisodeList extends React.Component {
    render() {
        return (
            <div className="EpisodeList">
                {
                    this.props.episodes.map(episode => {
                        return <Episode episode={episode}
                         key={episode.id} 
                         onAdd={this.props.onAdd} />
                    })
                }
            </div>
        )
    }
}

export default EpisodeList;