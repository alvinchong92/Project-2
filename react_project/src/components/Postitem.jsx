import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleMoveClick = this.handleMoveClick.bind(this);
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleMoveClick() {
    this.props.handleMove({
      id: this.props.id,
      content: this.state.localContent,
    });
    this.props.handleDelete(this.props.id);
    this.setState({ id, content });
  }

  render() {
    return(
      <div id ="content">
        <li>
          <div>
          <p>{this.props.content}</p>
            </div>
          <button onClick={this.handleDeleteClick}>X</button>
          <button onClick={this.handleMoveClick}> Watched </button>
          </li>
      </div>
    )
  }
}

export default PostItem;
