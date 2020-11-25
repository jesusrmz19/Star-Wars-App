import React from 'react';

class Movie extends React.Component {
    render() {
        const {image, name, duration, rating} = this.props.details;

        return (
        <li className="movie">
            <img src={image} alt={name}></img>
            <p className="movie--name movie-txt">{name}</p>
            <p className="movie--duration movie-txt">{duration}</p>
            <div className="movie--rating">
                <p className="movie-txt">{rating}</p>
                <img src="/images/imdb.png"></img>
            </div>
            <button className="movie--btn">more info</button>
        </li>
        );
    }
}

export default Movie;