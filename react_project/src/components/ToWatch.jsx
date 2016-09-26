import React from 'react';
import {Link} from 'react-router'
import firebase from '../../firebase.config.js';
import TodoList from '../components/TodoList.jsx';
import Searchbar from '../components/Searchbar.jsx';

class ToWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [
      {
        id: 1,
        text: "Meeting at Work"
      },
      {
        id: 2,
        text: "Bring kids to school"
      },

      {
        id: 3,
        text: "asdsasad"
      }

      ]
    }
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }

  handleTodoAdd(text) {
    let newToDo = {
      id: this.state.todos.length + 1,
      text: text
    }

    let rootRef = firebase.database().ref().child('movie')
    let  d= rootRef.push(newToDo)

    this.setState({todos: this.state.todos.concat(newToDo)})
  }

  render() {
    return (
      <div id="todoList">
        <Searchbar onTodoAdd ={this.handleTodoAdd}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default ToWatch;
