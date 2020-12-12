import React from 'react';
import Character from './Character';

class Characters extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        webPage: 'https://swapi.dev/api/people/?page=',
        pageNumber: 1,
        characters: []
    };
    componentDidMount() {
        fetch(this.state.webPage + this.state.pageNumber)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        characters: data.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );
    }
    componentDidUpdate(prevState){
        if(this.state.pageNumber !== prevState.pageNumber) {
            const fetchData = async () => {
                const response = await fetch(
                    this.state.webPage + this.state.pageNumber
                );
                const data = await response.json();
                this.setState({ characters: data.results });
              };
        
              fetchData();
        }
    }
    getNextPage = () => {
        if(this.state.pageNumber === 9) {
            return;
        }else{
            this.setState({
                pageNumber: this.state.pageNumber + 1
            });
        }
    };
    getPrevPage = () => {
        if(this.state.pageNumber === 1) {
            return;
        }else{
            this.setState({
                pageNumber: this.state.pageNumber - 1
            });
        }
    }
    render () {
        const { error, isLoaded, characters } =  this.state;
        if(error) {
            return (<div className="charact--container"><div className="loading">Error</div></div>)
        } else if (!isLoaded) {
            return (<div className="charact--container"><div className="loading" >Loading...</div></div>)
        } else {
            return(
                <div className="charact--container--loaded">
                    <h1>Characters</h1>
                    <button onClick={this.getPrevPage}>Prev Page</button>
                    <button onClick={this.getNextPage}>Next Page</button>
                    <ul className="characters">
                        {characters.map((character,index) => (
                                <Character 
                                    details={character} 
                                    key={characters[index].name}
                                    index={index}
                                />
                            ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Characters;