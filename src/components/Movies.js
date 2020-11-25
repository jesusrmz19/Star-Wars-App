import React from 'react';
import Movie from './Movie';
import movies from '../sample-movies';

class Movies extends React.Component {
    state = {
        movies: movies
    };

    render() {
        return (
            <div className="movies--container">
                <h1>Movies</h1>
                <ul className="movies">
                    {Object.keys(this.state.movies).map(key => (
                        <Movie
                            key={key}
                            details={this.state.movies[key]}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Movies;