import React, { Component } from 'react';


class CreateTodo extends Component {
  constructor(props){
    super(props);

    this.state = {dante: this.props.todos}

    this.dante = this.dante.bind(this);
  }

  dante() {
    let name = this.refs["name"].value;
    let joinning = this.state.dante.concat({task: name,
        isCompleted: false,});

    this.setState ({dante: joinning});
    
  }
  

  render() {
    return (
      <div>
        <input ref="name" type="text" placeholder="crea tarea"/>
        <button onClick={this.dante}>Crear</button>
      </div> 
      
        
      
    );
  }
}

export default CreateTodo;