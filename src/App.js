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
    let name = this.refs["name"].value;
    let joinning = this.state.inicio.concat(name);

    this.setState({ inicio:  joinning}); 

  }

  render() {
    console.log(this.state.inicio);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Just Adding Tasks</h2>
          <input ref="name" type="text" placeholder="escribe una tarea" />
          <button onClick={this.create}>Create Task</button>
          
        </div>
        
        <div className="App-body">
          {this.state.inicio.map( (item, i) => {return <Tags key={i} items={item} />} )
          }
        </div>
      </div>
    );
  }
}

export default App;
