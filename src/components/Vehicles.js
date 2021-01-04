import React from 'react';
import Vehicle from './Vehicle';

class Vehicles extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        vehicles: [],
        vehiclesArr: [],
        index: 0,
        page: null
    };

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchVehicle(7);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchVehicle = async(page) => {
        this.setState({
            page
        });
        try {
            const response = await fetch(`https://swapi.dev/api/vehicles/${page}/`);
            const data = await response.json();
            const vehicles = data;
            if(this._isMounted) {
                this.setState({
                    vehicles,
                    isLoaded: true
                });
            }
        }catch(error){
            if(!this._isMounted){
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        }
    }

    render() {
        const { vehicles, error, isLoaded } = this.state;
        if(error) {
            return (<div className="vehicles--container"><div className="loading">Error</div></div>);
        } else if (!isLoaded) {
            return (<div className="vehicles--container"><div className="loading">Loading...</div></div>);
        } else {
            return(
                <div className="vehicles--container">
                    <h1>Vehicles</h1>
                    <div className="vehicles">
                        <button className="vehicles--btn btnV--prev"></button>
                        <Vehicle
                            details = {vehicles}
                        />
                        <button className="vehicles--btn btnV--next"></button>
                    </div>
                </div>
            );
        }
    }
}

export default Vehicles;