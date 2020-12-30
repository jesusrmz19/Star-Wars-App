import React from 'react';
import Starship from './Starship';

class Starships extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        starships: [],
        starshipsArr: [3,2,9,10,11,12,13,21,28,31,32,39,40],
        index: 0,
        page: null
    };

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchShip(3);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchShip = async(page) => {
        this.setState({
            page
        });
        try {
            const response = await fetch('https://swapi.dev/api/starships/' + page + '/');
            const data = await response.json();
            const starships = data;
            if(this._isMounted){
                this.setState({
                    starships,
                    isLoaded: true
                });
            }
        }catch(error){
            if(!this._isMounted){
                this.setState({
                    isLoaded: true,
                    error,
                });
            }
        }
    }

    prevShip = async() => {
        if(this.state.index - 1 < 0) {
            return;
        } else {
            await this.setState({
                index: this.state.index - 1
            });
            let prevPage = this.state.starshipsArr[this.state.index];
            this.fetchShip(prevPage);
        }
    }

    nextShip = async() => {
        if((this.state.index + 1) > (this.state.starshipsArr.length - 1)) {
            return;
        }else{
            await this.setState({
                index: this.state.index + 1
            });
            let nextPage = this.state.starshipsArr[this.state.index];
            this.fetchShip(nextPage);
        }
    };

    render() {
        const { starships, error, isLoaded } = this.state;
        if(error) {
            return (<div className="starships--container"><div className="loading">Error</div></div>);
        } else if (!isLoaded) {
            return (<div className="starships--container"><div className="loading">Loading...</div></div>);
        } else {
            return(
                <div className="starships--container">
                    <h1>Starships</h1>
                    <div className="starships">
                        <button className="starships--btn btnS--prev" onClick={this.prevShip}></button>
                        <Starship
                            details = {starships}
                        />
                        <button className="starships--btn btnS--next" onClick={this.nextShip}></button>
                    </div>
                </div>
            );
        }
    }
}

export default Starships;