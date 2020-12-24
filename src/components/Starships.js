import React from 'react';
import Starship from './Starship';

class Starships extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        starships: [],
        index: 2
    };

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchShip();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchShip = async() => {
        try {
            const response = await fetch('https://swapi.dev/api/starships/' + this.state.index + '/');
            const data = await response.json();
            const starships = data;
            if(this._isMounted){
                this.setState({
                    starships,
                    isLoaded: true
                });
            }
        }catch(error){
            if(!this._isMounted){
                this.setState({
                    isLoaded: true,
                    error,
                });
            }
        }
    }

    render() {
        const { starships, error, isLoaded } = this.state;
        if(error) {
            return (<div className="starships--container"><div className="loading">Error</div></div>);
        } else if (!isLoaded) {
            return (<div className="starships--container"><div className="loading">Loading...</div></div>);
        } else {
            return(
                <div className="starships--container">
                    <h1>Starships</h1>
                    <div className="starships">
                        <button className="starships--btn btnS--prev"></button>
                        <Starship
                            details = {starships}
                        />
                        <button className="starships--btn btnS--next"></button>
                    </div>
                </div>
            );
        }
    }
}

export default Starships;