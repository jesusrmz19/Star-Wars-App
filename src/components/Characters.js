import React from 'react';
import Character from './Character';

class Characters extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        characters: []
    };
    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        characters: data.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );
    }
    render () {
        const { error, isLoaded, characters } =  this.state;
        if(error) {
            return (<div className="charact--container"><div className="loading">Error</div></div>)
        } else if (!isLoaded) {
            return (<div className="charact--container"><div className="loading">Loading...</div></div>)
        } else {
            return(
                <div className="charact--container">
                    <h1>Characters</h1>
                    <ul className="characters">
                        {characters.map(character => (
                                <Character details={character} />
                            ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Characters;