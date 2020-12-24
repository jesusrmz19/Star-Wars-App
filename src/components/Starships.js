import React from 'react';

class Starships extends React.Component {
    render() {
        return(
        <div className="starships--container">
            <h1>Starships</h1>
            <div className="starships">
                <div className="starship">
                    <div className="back"></div>
                    <div className="front">
                        <img className="front--img" src="/images/starships/CR90_PNG.png" alt="starship"></img>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Starships;