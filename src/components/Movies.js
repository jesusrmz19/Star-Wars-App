import React from 'react';
import Movie from './Movie';
//import movies from '../sample-movies';

class Movies extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        movies: []
    };
    
    componentDidMount() {
        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        movies: data.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, movies } = this.state;
        if(error) {
            return (<div className="movies--container"><div className="loading">Error</div></div>)
        } else if (!isLoaded) {
            return (<div className="movies--container"><div className="loading">Loading...</div></div>)
        } else {
            return (
                <div className="movies--container">
                    <h1>Movies</h1>
                    <ul className="movies">
                        {movies.map(movie => (
                            <Movie details={movie}/>
                        ))}
                    </ul>
                </div>
            )
            

/*             <div className="movies--container">
                <h1>Movies</h1>
                <ul className="movies">
                    {Object.keys(this.state.movies).map(key => (
                        <Movie
                            key={key}
                            details={this.state.movies[key]}
                        />
                    ))}
                </ul>
            </div> */
       // ); 
        }
    }
}

export default Movies;