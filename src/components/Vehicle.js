import React from 'react';

class Vehicle extends React.Component {
    render() {
        const { name, crew, cost_in_credits, max_atmosphering_speed, passengers, vehicle_class} = this.props.details;
        return(
            <div className="vehicle">
                <div className="back empire">
                    <img className="back--img" src="/images/starships/starwars_light.svg" alt="starwars-logo"></img>
                </div>
                <div className="front">
                    <img className="front--img" src="#" alt={name}></img>
                    <div className="front--txt--wrapper">
                        <p className="name">{name}</p>
                        <p className="cost">{cost_in_credits} cred.</p>
                        <p className="charac">MAX SPEED<span>{max_atmosphering_speed}</span></p>
                        <p className="charac">VEHICLE CLASS<span>{vehicle_class}</span></p>
                        <p className="charac">CREW<span>{crew}</span></p>
                        <p className="charac">PASSENGERS<span>{passengers}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicle;