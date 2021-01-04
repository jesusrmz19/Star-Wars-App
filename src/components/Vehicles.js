import React from 'react';
import Vehicle from './Vehicle';

class Vehicles extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        vehicles: [],
        vehiclesArr: [7,8,14,16,18,19,26,30,33,35],
        index: 0,
        page: null
    };

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchVehicle(8);
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

    prevVehicle = async() => {
        if(this.state.index - 1 < 0) {
            return;
        } else {
            await this.setState({
                index: this.state.index - 1
            });
            let prevPage = this.state.vehiclesArr[this.state.index];
            this.fetchVehicle(prevPage);
        }
    }

    nextVehicle = async() => {
        if((this.state.index + 1) > (this.state.vehiclesArr.length - 1)) {
            return;
        }else{
            await this.setState({
                index: this.state.index + 1
            });
            let nextPage = this.state.vehiclesArr[this.state.index];
            this.fetchVehicle(nextPage);
        }
    };

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
                        <button className="vehicles--btn btnV--prev" onClick={this.prevVehicle}></button>
                        <Vehicle
                            details = {vehicles}
                        />
                        <button className="vehicles--btn btnV--next" onClick={this.nextVehicle}></button>
                    </div>
                </div>
            );
        }
    }
}

export default Vehicles;