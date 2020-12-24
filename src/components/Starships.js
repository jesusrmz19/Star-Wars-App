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
        const { starships } = this.state;
        return(
        <div className="starships--container">
            <h1>Starships</h1>
            <div className="starships">
                <Starship
                    details = {starships}
                />
            </div>
        </div>
        );
    }
}

export default Starships;