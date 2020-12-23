import React from 'react';
import characters from '../sample-characters';
import Character from './Character';

class Characters extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        webPage: 'https://swapi.dev/api/people/?page=',
        searchPage: 'https://swapi.dev/api/people/?search=',
        inputValue: '',
        pageNumber: 1,
        characters: [],
        showAll: false
    };

    _isMounted = false; // This method resolves the mounted problem. Now you don't see the warning in the console

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
            if(!this._isMounted){
                this.setState({
                    pageNumber: pageNum,
                    isLoaded: true,
                    error,
                });
            }
        }
    };

    displayAll = () => {
        this.setState({
            showAll: true
        });
        this.fetchHero(0);
        this._isMounted = true;
    }

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

    handleSearch = async(e) => {
        if(e.target.value !== ''){
            await this.setState({
                searchPage: 'https://swapi.dev/api/people/?search=' + e.target.value,
                inputValue: e.target.value
            });
            this.fetchSingle();
            this._isMounted = true;
        }else{
            await this.setState({
                searchPage: 'https://swapi.dev/api/people/?search=',
                inputValue: '',
                characters: []
            });
            this._isMounted = false;
        }
        console.log(e.target.value);
    };

    fetchSingle = async() => {
        try {
            const response = await fetch(this.state.searchPage);
            const data = await response.json();
            const characters = data.results;
            if(this._isMounted){
                this.setState({
                    characters,
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

    render () {
        const showAll = this.state.showAll;
        const { characters } =  this.state;
        let displayCharacters;
        let displaySearch;
        if(showAll) {
            displayCharacters = (
                <React.Fragment>
                    <button className="charact--container--btn" onClick={this.getPrevPage}>Prev Page</button>
                    <button className="charact--container--btn" onClick={this.getNextPage}>Next Page</button>
                    <ul className="characters">
                        {characters.map((character,index) => (
                            <Character
                                details={character}
                                key={character.name}
                                index={index}
                            />
                        ))}
                    </ul>
                </React.Fragment>
            );
            displaySearch = null;
        }else{
            displaySearch = (
                <React.Fragment>
                    <div className="search">
                        <label className="search--label">Search: </label>
                        <input
                            type="text"
                            id="charactSearch"
                            class="search--input"
                            onChange={this.handleSearch}
                            value={this.state.inputValue}>
                        </input>
                    </div>
                    <button className="charact--container--btn" onClick={this.displayAll}>Display All Characters</button>
                </React.Fragment>
            );
            displayCharacters = (
                <React.Fragment>
                    <ul className="characters">
                        {characters.map((character,index) => (
                            <Character
                                details={character}
                                key={character.name}
                                index={index}
                            />
                        ))}
                    </ul>
                </React.Fragment>
            );
        }
        return(
            <div className="charact--container--loaded">
                <h1>Characters</h1>
                {displaySearch}
                <div className="main--content">{displayCharacters}</div>
            </div>
        );

    }
}

export default Characters;