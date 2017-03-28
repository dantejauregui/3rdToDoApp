import React, { Component } from 'react';

import TodosList from './components/todos-list.js';
import CreateTodo from './components/create-todo.js';
import './App.css';


const initialBD = [
  {
    task: 'make react tutorial',
    isCompleted: false
  },

  {
    task: 'eat dinner',
    isCompleted: true
  }
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: initialBD,

    };

    this.funcionDante=this.funcionDante.bind(this);
  }



  funcionDante(data) {
    let grupo = this.state.todos.concat({task: data, isCompleted: false});

    this.setState({

      todos: grupo,

    })
    
  }


  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo funcion={this.funcionDante}/>
        <br/>  
        <TodosList todos={ this.state.todos }/>
      </div>
    );
  }
}

export default App;
