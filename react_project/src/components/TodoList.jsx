import React from 'react';
import PostItem from '../components/PostItem.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  handleMove: React.PropTypes.func,
};

class TodoList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
          <PostItem
            key={idx}
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            handleMove={this.props.handleMove}
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

TodoList.propTypes = propTypes;

export default TodoList;
