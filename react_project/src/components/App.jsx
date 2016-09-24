import React from 'react';
import {Link,hashHistory} from 'react-router';
import request from 'superagent';
import Searchbar from '../components/Searchbar.jsx';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   movie: '',
  //   },
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleEditOfMovie = this.handleEditOfMovie.bind(this);
  // }

  // handleSubmit(e) {
  //   e.preventDefault;
  //   this.httpPostMovie({
  //     m: this.state.movie,
  //   });
  // }

  // handleEditOfMovie(e) {
  //   const movie = e.target.value;
  //   this.setState({ movie })
  // }
}


  componentDidMount() {
    this.httpGetMovies();
  }
  httpGetMovies() {
    const url = 'https://project-2-36511.firebaseio.com/movies.json'
    request.get(url).then((response) => {
      console.log(response)
      const movies = response.body;
    });
  }

  httpPostMovie(data) {
    const url = 'https://project-2-36511.firebaseio.com/movies.json';
    request.post(url).send(data).then(() => {
      this.httpGetMovies();
    });
  }

  httpDeleteMovie(id) {
    const url = `https://project-2-36511.firebaseio.com/${id}`
    request.del(url)
            .then(() => {
              this.httpGetMovies()
            });
  }

  render() {
    return(
      <div>
        <Searchbar />
          <div id="watch-list">
             <div className="container">
               <ul>
                 <ol><Link to="/towatch">To Watch</Link></ol>
                 <ol><Link to="/watching">Watching</Link></ol>
                 <ol><Link to="/watched">Watched</Link></ol>
                </ul>
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
