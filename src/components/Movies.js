import React from 'react';
import Movie from './Movie';
//import movies from '../sample-movies';

class Movies extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        movies: [],
        activeIndex: 0,
        prevIndex: null,
        nextIndex: null
    };
    
    componentDidMount() {
        this.fetchMovies();
    };

    fetchMovies = async() => {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            const movies = data.results;
            const length = data.results.length;
            const prevIndex = data.results.length - 1;
            this.setState({
                isLoaded: true,
                movies, 
                length,
                prevIndex
            });
        }catch(error){
            this.setState({
                isLoaded: true,
                error
            });
        }
        this.setState({
            nextIndex: this.state.activeIndex + 1
        });
    };


    prevButton = () => {
        if(this.state.activeIndex === 0) {
            this.setState({
                activeIndex: this.state.length - 1,
                prevIndex: this.state.length - 2,
                nextIndex: 0
            });
        } else if (this.state.nextIndex === 0){
            this.setState({
                activeIndex: this.state.activeIndex - 1,
                prevIndex: this.state.prevIndex - 1,
                nextIndex: this.state.length - 1
            });
        } else if (this.state.prevIndex === 0){
                this.setState({
                    activeIndex: this.state.activeIndex - 1,
                    prevIndex: this.state.length - 1,
                    nextIndex: this.state.nextIndex - 1
                });
        } else {
            this.setState({
                activeIndex: this.state.activeIndex - 1,
                prevIndex: this.state.prevIndex - 1,
                nextIndex: this.state.nextIndex -1
            });
        }
    }

    nextButton = () => {
        if(this.state.activeIndex === 0) {
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                prevIndex: 0,
                nextIndex: this.state.nextIndex + 1
            });
        } else if (this.state.nextIndex === (this.state.length - 1)){
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                prevIndex: this.state.prevIndex + 1,
                nextIndex: 0
            })
        } else if (this.state.activeIndex === (this.state.length - 1)) {
            this.setState({
                activeIndex: 0,
                prevIndex: this.state.length - 1,
                nextIndex: 1
            });
        } else {
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                prevIndex: this.state.prevIndex + 1,
                nextIndex: this.state.nextIndex + 1
            });
        }
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
                    <div className="carousel--wrapper">
                        <button className="carousel--btn btn--prev" onClick={this.prevButton}></button>
                        <div className="movies carousel">
                            {movies.map((movie,index) => (
                                <Movie 
                                    active={this.state.activeIndex}
                                    prev={this.state.prevIndex}
                                    next={this.state.nextIndex} 
                                    key={index} 
                                    details={movie}
                                    index={index}
                                />
                            ))}
                        </div>
                        <button className="carousel--btn btn--next" onClick={this.nextButton}></button>
                    </div>
                </div>
            )
        }
    }
}

export default Movies;