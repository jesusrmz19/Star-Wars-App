import React from 'react';
import Starship from './Starship';

class Starships extends React.Component {
    render() {
        return(
        <div className="starships--container">
            <h1>Starships</h1>
            <div className="starships">
                <Starship />
            </div>
        </div>
        );
    }
}

export default Starships;