import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    console.log("clicked")
  }


  render() {
    return(
      <ul>
      {
        this.props.todos.map(todo => {
          return <li todo={todo} key={todo.id} > {todo.text} <button onClick ={this.onDelete} > X </button></li>
        })
      }
      </ul>
    )
  }
}

export default TodoList;
