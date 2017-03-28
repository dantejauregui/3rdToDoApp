import React, { Component } from 'react';


class CreateTodo extends Component {
  constructor(props) {
    super(props);
    
    this.creandoEvento=this.creandoEvento.bind(this);
  }


  creandoEvento(e) {
    e.preventDefault();
    let name = this.refs.name.value;

    this.props.funcion(name);
    this.refs.name.value = " ";
  }


  render() {
    return (
      <form onSubmit={this.creandoEvento}>
        <input ref="name" type="text" placeholder="crea tarea"/>
        <button>Crear</button>
      </form> 
      
    );
  }
}

export default CreateTodo;