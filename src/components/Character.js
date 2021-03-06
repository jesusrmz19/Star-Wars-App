import React from 'react';
import ReactDOM from "react-dom";
import characters from '../sample-characters';

class Character extends React.Component {
    state = {
        isLoaded: false,
        planet: null,
        movies: [],
        error: null
    };

    componentDidMount() {
            // Fetch la información del homeworld, una vez que carga el componente
            fetch(this.props.details.homeworld)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        planet: data.name
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );
            // Fetch la información de cada link que está dentro del array de films
            this.props.details.films.forEach(link => {
                fetch(link)
                .then(res => res.json())
                .then(
                    (data) => {
                        this.setState({
                            isLoaded: true,
                            movies: [...this.state.movies, data.title] // Spread cada título en el state movie
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: error
                        });
                    }
                );
            });
    }

    handleMore = () => {
        let characterDOM = ReactDOM.findDOMNode(this);
        characterDOM.querySelector('.character--card').classList.toggle('active');
        let characterBtn = characterDOM.querySelector('.character--btn');
        characterBtn.classList.toggle('active');
        (characterBtn.classList.contains('active')) ? characterBtn.innerHTML = 'see less' : characterBtn.innerHTML = 'see more';
    }

    render () {
        const {name, height, mass, gender, birth_year} = this.props.details;
        return(
            <li className="character">
                <div className="character--card">
                    <div className="character--front">
                        <img src={characters[name] ? characters[name].image : '#' } alt={name}></img>
                    </div>
                    <div className="character--back">
                        <div className="charact">
                            <p className="charact--type">Height</p>
                            <p className="charact--value">{height}cm</p>
                        </div>
                        <div className="charact">
                            <p className="charact--type">Mass</p>
                            <p className="charact--value">{mass}kg</p>
                        </div>
                        <div className="charact">
                            <p className="charact--type">Gender</p>
                            <p className="charact--value">{gender}</p>
                        </div>
                        <div className="charact">
                            <p className="charact--type">Year of Birth</p>
                            <p className="charact--value">{birth_year}</p>
                        </div>
                        <div className="charact">
                            <p className="charact--type">Planet</p>
                            <p className="charact--value">{this.state.planet}</p>
                        </div>
                        <div className="charact charact--film">
                            <p className="charact--type">Films</p>
                            <p className="charact--value--films">{this.state.movies.map(movie => <span>{movie}</span>)}</p>
                        </div>
                    </div>
                </div>
                <p className="character--name">{name}</p>
                <button className="character--btn" onClick={this.handleMore}>see more</button>
            </li>
        );
    }
}

export default Character;