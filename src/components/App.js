import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Movies from './Movies';
import Characters from './Characters';
import Planets from './Planets';


class App extends React.Component {

	render() {
		return (
      <HashRouter>
        <div className="app-container">
          <nav className="app-navbar">
            <Navbar  />
          </nav>
          <main className="app-content">
              <Route exact path="/" component={Main}></Route>
              <Route path="/Movies" component={Movies}></Route>
              <Route path="/Characters" component={Characters}></Route>
              <Route path="/Planets" component={Planets}></Route>
          </main>
        </div>
      </HashRouter>
    );
  }
  
}

export default App;
