import React from 'react';

class Movie extends React.Component {
    render() {
        const {image, name} = this.props.details;

        return (
        <li className="movie">
            <img src={image} alt={name}></img>
            <p>{name}</p>
        </li>
        );
    }
}

export default Movie;