import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Movies from './Movies';
import Characters from './Characters';
import Starships from './Starships';
import Vehicles from './Vehicles';


class App extends React.Component {
  state = {
    active: false
  };

  openMenu = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
    console.log('open the menu');
  };

	render() {
		return (
      <HashRouter>
        <div className="app-container">
          <button className="mobile-menu--btn" onClick={this.openMenu}>
            <span className={this.state.active ? "bar open" : "bar"}></span>
          </button>
          <div className={this.state.active ? "opacity--overlay open" : "opacity--overlay"}></div>
          <nav className={this.state.active ? "app-navbar open" : "app-navbar"}>
            <Navbar  />
          </nav>
          <main className="app-content">
              <Route exact path="/" component={Main}></Route>
              <Route path="/Movies" component={Movies}></Route>
              <Route path="/Characters" component={Characters}></Route>
              <Route path="/Starships" component={Starships}></Route>
              <Route path="/Vehicles" component ={Vehicles}></Route>
          </main>
        </div>
      </HashRouter>
    );
  }
  
}

export default App;
