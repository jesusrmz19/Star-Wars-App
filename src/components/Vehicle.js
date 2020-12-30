import React from 'react';

class Vehicle extends React.Component {
    render() {
        return(
            <div className="vehicle">
                <div className="back empire">
                    <img className="back--img" src="/images/starships/starwars_light.svg" alt="starwars-logo"></img>
                </div>
                <div className="front">
                    <img className="front--img" src="#" alt="test"></img>
                    <div className="front--txt--wrapper">
                        <p className="name"></p>
                        <p className="cost">cred.</p>
                        <p className="charac">MAX SPEED<span>10</span></p>
                        <p className="charac">HYPERDRIVE RATING<span>10</span></p>
                        <p className="charac">CREW<span>10</span></p>
                        <p className="charac">PASSENGERS<span>10</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicle;