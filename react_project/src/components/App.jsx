// To have all my ajax request here and links to other forms.

import React from 'react';
import {Link,hashHistory} from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditOfMovie = this.handleEditOfMovie.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.httpPostMovie({
      m: this.state.movie,
    });
  }

  handleEditOfMovie(e) {
    const movie = e.target.value;
    this.setState({ movie })
  }


  componentDidMount() {
    this.httpGetMovies();
  }
  httpGetMovies() {
    const url = 'https://project-2-13dac.firebaseio.com/movies.json'
    request.get(url).then((response) => {
      console.log(response)
      const movies = response.body;
    });
  }

  httpPostMovie(data) {
    const url = 'https://project-2-13dac.firebaseio.com/movies.json';
    request.post(url).send(data).then(() => {
      this.httpGetMovies();
    });
  }

  httpDeleteMovie(id) {
    const url = `https://project-2-13dac.firebaseio.com/${id}`
    request.del(url)
            .then(() => {
              this.httpGetMovies()
            });
  }

    render() {
      // const childrenWProps = React.cloneElement(this.props.children,{
      //   httpMovie: this.httpGetMovies,
      //   httpDelete: this.httpGetMovies,
      // });
      return(
        <div id="watch-list">
          <div>
            <div id="app-banner">
              <h1> MOooOOOOOoooOvies </h1>
            </div>
            <div id="app-content">
              <p> asdas </p>
              <form>
                <input id="input-field" name="test" value="" onChange={this.handleEditOfMovie}/>
                <input type="submit"/>
              </form>
              <div className="container">
                <ul>
                  <ol><Link to="/towatch">To Watch</Link></ol>
                  <ol><Link to="/watching">Watching</Link></ol>
                  <ol><Link to="/watched">Watched</Link></ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

App.propTypes = propTypes;

export default App;
