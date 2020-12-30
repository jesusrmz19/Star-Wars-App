import React from 'react';
import Vehicle from './Vehicle';

class Vehicles extends React.Component {
    render() {
        return(
            <div className="vehicles--container">
                <h1>Vehicles</h1>
                <div className="vehicles">
                    <button className="vehicles--btn btnV--prev"></button>
                    <Vehicle />
                    <button className="vehicles--btn btnV--next"></button>
                </div>
            </div>
        );
    }
}

export default Vehicles;