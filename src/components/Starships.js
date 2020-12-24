import React from 'react';

class Starships extends React.Component {
    render() {
        return(
        <div className="starships--container">
            <h1>Starships</h1>
            <div className="starships">
                <div className="starship">
                    <div className="back">
                        <img className="back--img" src="/images/starships/starwars_light.svg"></img>
                    </div>
                    <div className="front">
                        <img className="front--img" src="/images/starships/CR90_PNG.png" alt="starship"></img>
                        <div className="front--txt--wrapper">
                            <p className="name">CR90 Corvette</p>
                            <p className="cost">3,500,000 cred.</p>
                            <p className="charac">MAX SPEED<span>975</span></p>
                            <p className="charac">HYPERDRIVE RATING<span>2.0</span></p>
                            <p className="charac">CREW<span>30-165</span></p>
                            <p className="charac">PASSENGERS<span>600</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Starships;