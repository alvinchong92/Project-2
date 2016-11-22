import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
      modalOpen: false,
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
    this.handleWatchingClick = this.handleWatchingClick.bind(this);
    this.handleEditOfContent = this.handleEditOfContent.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    })
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

  handleEditOfContent(e) {
    let newContent = prompt("new test ");
     this.props.handlePublish({
      id: this.props.id,
      content: newContent,
    });
     this.setState({ newContent })
  }

  render() {
    return(
      <div id ="content">
        <div> {this.props.content}
          <div id="button">
          <button className="button" onClick={this.handleDeleteClick}>X</button>
          <button className="button" onClick={this.handleWatchingClick}> Watching </button>
          <button className="button" onClick={this.handleWatchedClick}> Watched </button>
          <button className="button" onClick={this.handleEditOfContent}> Adopt a kiten </button>
          </div>
        </div>
      </div>
    )
  }
}


export default PostItem;
