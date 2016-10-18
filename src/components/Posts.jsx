import React from 'react';

const propTypes = {
  content: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleMove: React.PropTypes.func,
  id: React.PropTypes.string,
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
    };
    this.handleEditOfContent = this.handleEditOfContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localContent: nextProps.content || '',
    });
  }

  handleEditOfContent(e) {
    const newContent = e.target.value;
    this.setState({
      localContent: newContent,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      content: this.state.localContent,
    });
    this.setState({ saved: true });
  }

  isSaved() {
    return this.props.content === this.state.localContent;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons">
          <button onClick={this.handleDeleteClick}>x</button>
          <button onClick={this.handleWatchingClick}> Watching </button>
          <button onClick={this.handleWatchedClick}> Watched </button>
        </div>
      );
    }
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <form className="post-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            value={this.state.localContent}
            onChange={this.handleEditOfContent}
            placeholder="Whatcha watching?"
          />
        </form>
        {activeButtons}
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default Post;
