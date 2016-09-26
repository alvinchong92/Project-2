import React from 'react';

class TodoList extends React.Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(todo) {
    console.log(todo)
  }

  render() {
    return(
      <ul>
      {
        this.props.todos.map(todo => {
          return <li todo={todo} key={todo.id}>{todo.text} <a onClick ={this.handleDelete}> X </a></li>
        })
      }
      </ul>
    )
  }
}

export default TodoList;
