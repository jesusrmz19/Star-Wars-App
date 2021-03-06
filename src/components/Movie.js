import React from 'react';
import movies from '../sample-movies';

class Movie extends React.Component {
    render() {
        const {title, episode_id} = this.props.details;
        const movieEpisode = "movie" + episode_id;

        return (
        <li className={(() => {
            switch(this.props.index) {
                case this.props.active: return "movie carousel--elem active";
                case this.props.next:   return "movie carousel--elem next";
                case this.props.prev:   return "movie carousel--elem prev";
                default:                return "movie carousel--elem";
            }
        })()}>
            <img src={movies[movieEpisode].image} alt={title}></img>
            <p className="movie--episode">episode {movies[movieEpisode].romanEpisode}:</p>
            <p className="movie--name">{title}</p>
            <p className="movie--duration movie-txt">{movies[movieEpisode].duration}</p>
            <div className="movie--rating">
                <p className="movie-txt">{movies[movieEpisode].rating}</p>
                <img src="/images/imdb.png" alt="imdb-logo"></img>
            </div>
            <a href={movies[movieEpisode].link} target="_blank" rel="noreferrer" className="movie--btn">more info</a>   
        </li>
        );
    }
}

export default Movie;