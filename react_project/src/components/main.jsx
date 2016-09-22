// To have all my ajax request here and links to other forms.

import React from 'react';
import {Link,hashHistory} from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  httpGetMovies() {
    const url = 'https://project-2-13dac.firebaseio.com/movies.json'
    requset.get(url).then((response) => {
      const movies = reponse.body;
      this.setState({ cars });
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
      const childrenWProps = React.cloneElement(this.props.children,{
        httpMovie: this.httpGetMovies,
        httpDelete: this.httpGetMovies,
      });
    return(
      <div>
        <div id="main-nav">
          <h1>Main Page </h1>
            {this.props.children}
        </div>
        <div id="main-content">
          <p> asdas </p>
          <form>
            <input name="test" value="#" onChange="#"/>
            <input type="submit"/>
          </form>
          <div className="container">
            <ul>
              <li><Link to="/towatch">To Watch</Link></li>
              <li><Link to="/watching">Watching</Link></li>
              <li><Link to="/watched">Watched</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
