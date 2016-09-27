import React from 'react';
import request from 'superagent';
import TodoList from '../components/TodoList.jsx';
import Post from '../components/Posts.jsx';

class Watched extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://project-2-36511.firebaseio.com/watched.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   author: individualPostData.author,
                   content: individualPostData.content,
                   likeCount: individualPostData.likeCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, author, likeCount }) {
    if (id) {
      this.httpUpdatePost({ id, content, author, likeCount });
    } else {
      this.httpPublishPost({ content, author, likeCount });
    }
  }
  httpDeletePost(id) {
    const url = `https://project-2-36511.firebaseio.com/watched/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content, author, likeCount }) {
    const url = `https://project-2-36511.firebaseio.com/watched/${id}.json`;
    request.patch(url)
           .send({ content, author, likeCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content, author }) {
    const url = 'https://project-2-36511.firebaseio.com/watched.json';
    request.post(url)
           .send({ content, author, likeCount: 0 })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div className="container">
        <TodoList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default Watched;
