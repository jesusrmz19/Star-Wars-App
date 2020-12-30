import React from 'react';
import starships from '../sample-starships';

class Starship extends React.Component {
    render() {
        const { name, crew, max_atmosphering_speed, passengers, hyperdrive_rating, cost_in_credits } = this.props.details;
        return(
            <div className="starship">
                <div className={ starships[name].side === 'empire' ? 'back empire' : 'back light'}>
                    <img className="back--img" src="/images/starships/starwars_light.svg" alt="starwars-logo"></img>
                </div>
                <div className="front">
                    <img className="front--img" src={ starships[name] ? starships[name].image : '#' } alt={name}></img>
                    <div className="front--txt--wrapper">
                        <p className="name">{name}</p>
                        <p className="cost">{cost_in_credits} cred.</p>
                        <p className="charac">MAX SPEED<span>{max_atmosphering_speed}</span></p>
                        <p className="charac">HYPERDRIVE RATING<span>{hyperdrive_rating}</span></p>
                        <p className="charac">CREW<span>{crew}</span></p>
                        <p className="charac">PASSENGERS<span>{passengers}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Starship;