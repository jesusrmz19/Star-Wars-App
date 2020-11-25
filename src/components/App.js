import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Movies from './Movies';
import Characters from './Characters';
import Planets from './Planets';


class App extends React.Component {

	render() {
		return (
      <HashRouter>
        <div className="app-container">
          <div className="app-navbar">
            <Navbar  />
          </div>
          <div className="app-content">
              <Route path="/Movies" component={Movies}></Route>
              <Route path="/Characters" component={Characters}></Route>
              <Route path="/Planets" component={Planets}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
  
}

export default App;
