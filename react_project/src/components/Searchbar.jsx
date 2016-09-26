import React from 'react';
import firebase from '../../firebase.config.js';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const a = {};
    const b = e.target.name;
    a[b] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.refs.text.value;
    console.log(text)
    this.props.onTodoAdd(text);
    this.refs.text.value = '';
  }

  handleDelete(todo) {
    this.props.toDelete(todo);
  }


  render() {
    return(
      <div>
        <div id="toWatchForm">
        <h1>{this.state.text}</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
            <label> asdasd </label>
              <input ref="text" type="text" onChange={this.handleChange} placeholder="movie" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Searchbar;
