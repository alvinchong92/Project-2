import React from 'react';
import request from 'superagent';
import ToWatchList from '../components/ToWatchList.jsx';
import Post from '../components/Posts.jsx';

class ToWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleWatching = this.handleWatching.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://project-2-36511.firebaseio.com/towatch.json';
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
  handlePublish({ id, content }) {
    if (id) {
      this.httpUpdatePost({ id, content});
    } else {
      this.httpPublishPost({ content });
    }
  }
  httpDeletePost(id) {
    const url = `https://project-2-36511.firebaseio.com/towatch/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content }) {
    const url = `https://project-2-36511.firebaseio.com/towatch/${id}.json`;
    request.patch(url)
           .send({ content })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content }) {
    const url = 'https://project-2-36511.firebaseio.com/towatch.json';
    request.post(url)
           .send({ content })
           .then(() => {
             this.httpGetPosts();
           });
  }

  handleWatched({ content }) {
     const url = 'https://project-2-36511.firebaseio.com/watched.json';
     request.post(url)
           .send({ content })
           .then(() => {
             this.httpGetPosts();
           });
  }

  handleWatching({ content }) {
    const url = 'https://project-2-36511.firebaseio.com/watching.json'
    request.post(url)
           .send({ content })
           .then(() => {
              this.httpGetPosts();
           });
  }

  handleEdit() {
    alert("OOOOPS")
  }

  render() {
    return (
      <div className="container">
         <h1 className="title"> To Watch </h1>
        <ToWatchList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} handleWatched={this.handleWatched}
        handleWatching = {this.handleWatching} posts={this.state.posts} handleEditofContent = {this.handleEdit}/>
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish}/>
      </div>
    );
  }
}


export default ToWatch;
