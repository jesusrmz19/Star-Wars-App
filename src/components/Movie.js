import React from 'react';

class Movie extends React.Component {
    render() {
        const {image, name, duration, rating} = this.props.details.movie1;

        return (
        <li className="movie">
            <img src={image} alt={name}></img>
            <p className="movie--name movie-txt">{name}</p>
            <p className="movie--duration movie-txt">{duration}</p>
            <p className="movie--rating movie-txt">{rating}</p>
            <button className="movie--btn">more info</button>
        </li>
        );
    }
}

export default Movie;