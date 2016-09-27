import React from 'react';
import PostItem from '../components/PostItem.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  handleWatched: React.PropTypes.func,
  handleWatching: React.PropTypes.func,
};

class ToWatchList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
          <PostItem
            key={idx}
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            handleWatched={this.props.handleWatched}
            handleWatching={this.props.handleWatching}
            content={post.content}
            id={post.id}
          />
      );
    });
    return (
      <ul>
        {postElements}
      </ul>
    );
  }
}

ToWatchList.propTypes = propTypes;

export default ToWatchList;
