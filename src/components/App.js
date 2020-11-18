import React from 'react';

class App extends React.Component {
	render() {
		return (
      <div className="app-container">
        <div className="logo"></div>
        <p className="logo__txt">This is example is possible thanks to the <a href="https://swapi.dev/api/" target="_blank" >Star Wars API</a></p>
      </div>
    );
	}
}

export default App;
