import React, { Component } from 'react';


class TodosListItem extends Component {

  render() {
    console.log(this.props.todos);

    return (
      <tr>
        <td key={this.props.key}>{this.props.task}</td>   
        <button>Ok</button>
        <button>Borrar</button>
      </tr>
      
        
      
    );
  }
}

export default TodosListItem;