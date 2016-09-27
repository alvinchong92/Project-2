import React from 'react';
import request from 'superagent';
import ToWatchList from '../components/ToWatchList.jsx';
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
                   content: individualPostData.content,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, }) {
    if (id) {
      this.httpUpdatePost({ id, content });
    } else {
      this.httpPublishPost({ content});
    }
  }
  httpDeletePost(id) {
    const url = `https://project-2-36511.firebaseio.com/watched/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content }) {
    const url = `https://project-2-36511.firebaseio.com/watched/${id}.json`;
    request.patch(url)
           .send({ content })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content }) {
    const url = 'https://project-2-36511.firebaseio.com/watched.json';
    request.post(url)
           .send({ content })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div className="container">
        <ToWatchList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default Watched;
