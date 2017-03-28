import React, { Component } from 'react';

import TodosListHeader from './todos-list-header.js';
import TodosListItem from './todos-list-item.js';


class TodosList extends Component {
  
  renderItems() {
    return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} />)
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          
            {this.renderItems()}

          
          </tbody>
      </table>
    );
  }
}

export default TodosList;
