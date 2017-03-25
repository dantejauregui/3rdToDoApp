import React, { Component } from 'react';

import Tags from './components/tags.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { inicio: [] };

    this.create = this.create.bind(this);
  }

  create(){
    this.setState({ inicio: ["dante","oliver"] }); 

  }

  render() {
    console.log(this.state.inicio);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Dante BoilerPlate</h2>
          <button onClick={this.create}>Crear</button>
          
        </div>
        
        <div className="App-body">
          {this.state.inicio.map( (item, i) => {<Tags key={i} items={item} />} )
          }
        </div>
      </div>
    );
  }
}

export default App;
