import React from 'react';
import Character from './Character';

class Characters extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        webPage: 'https://swapi.dev/api/people/?page=',
        pageNumber: 1,
        characters: [],
    };

    _isMounted = false; // This method resolves the mounted problem. Now you don't see the warning in the console

    componentDidMount() {
        this._isMounted = true;
        this.fetchHero(0);
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    fetchHero = async(nextOrPrev) => {
        let pageNum = this.state.pageNumber + nextOrPrev;
        try {
            const response = await fetch(this.state.webPage +  pageNum);
            const data = await response.json();
            const characters = data.results;
            if(this._isMounted){
                this.setState({
                    pageNumber: pageNum,
                    characters,
                    isLoaded: true
                });
            }
        }catch(error){
            this.setState({
                pageNumber: pageNum,
                isLoaded: true,
                error,
            });
        }
    };

    getNextPage = () => {
        if(this.state.pageNumber < 9) {
            this.fetchHero(1);
        }
    };

    getPrevPage = () => {
        if(this.state.pageNumber > 1) {
            this.fetchHero(-1);
        }
    };

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