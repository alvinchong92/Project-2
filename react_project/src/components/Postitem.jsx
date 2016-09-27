import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
    this.handleWatchingClick = this.handleWatchingClick.bind(this);
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleWatchingClick() {
    this.props.handleWatching({
      id: this.props.id,
      content: this.state.localContent,
    });
    this.props.handleDelete(this.props.id);
    this.setState({ content });
  }

  handleWatchedClick() {
    this.props.handleWatched({
      id: this.props.id,
      content: this.state.localContent,
    });
    this.props.handleDelete(this.props.id);
    this.setState({ content });
  }

  render() {
    return(
      <div id ="content">
        <li>
          <div>
          <p>{this.props.content}</p>
            </div>
          <button onClick={this.handleDeleteClick}>X</button>
          <button onClick={this.handleWatchingClick}> Watching </button>
          <button onClick={this.handleWatchedClick}> Watched </button>
          </li>
      </div>
    )
  }
}

export default PostItem;
