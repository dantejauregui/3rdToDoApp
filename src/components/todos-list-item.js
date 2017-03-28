import React, { Component } from 'react';


class TodosListItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false
    };

    this.onEditClick = this.onEditClick.bind(this);
  }


  rendering() {
    if (this.state.isEditing) {
      return( <td>
                <button>Confirmar</button>
                <button onClick={this.onEditClick}>Cancelar</button>
              </td>
            ); 
    }else{
      return( <td>
                <button onClick={this.onEditClick}>Editar</button>
                <button>Borrar</button>
              </td> 
            );
    }
  }


  onEditClick() {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    }else{
      this.setState({ isEditing: true });
    }


  }


  render() {
    return (
      <tr>
        <td>{this.props.task}</td>   
        {this.rendering()} 
      </tr>
      
        
      
    );
  }
}

export default TodosListItem;