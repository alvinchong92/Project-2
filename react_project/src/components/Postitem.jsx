import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleMove(){
    console.log("clicked")
  }
  render() {
    return(
      <div id ="content">
        <li>
          <div>
          <p>{this.props.content}</p>
            </div>
          <button onClick={this.handleDeleteClick}>x</button>
          <button onClick={this.handleMove}> "Move" </button>
          </li>
      </div>
    )
  }
}

export default PostItem;
