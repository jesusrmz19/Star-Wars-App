import React from 'react';
import vehicles from '../sample-vehicles';

class Vehicle extends React.Component {
    render() {
        const { name, crew, max_atmosphering_speed, passengers, vehicle_class, cargo_capacity} = this.props.details;
        return(
            <div className="vehicle">
                <div className={ vehicles[name].side === 'empire' ? 'back empire' : 'back light' }>
                    <img className="back--img" src="/images/starships/starwars_light.svg" alt="starwars-logo"></img>
                </div>
                <div className="front">
                    <img className="front--img" src={ vehicles[name] ? vehicles[name].image : '#'} alt={name}></img>
                    <div className="front--txt--wrapper">
                        <p className="name">{name}</p>
                        <p className="charac">MAX SPEED<span>{max_atmosphering_speed}</span></p>
                        <p className="charac">CREW<span>{crew}</span></p>
                        <p className="charac">PASSENGERS<span>{passengers}</span></p>
                        <p className="charac">CARGO CAPACITY <span>{cargo_capacity}</span></p>
                        <p className="charac check">VEHICLE CLASS{"\n"}<span>{vehicle_class}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicle;