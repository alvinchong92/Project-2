import React, {Component} from 'react';
import {Link} from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
}

class Front extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !=null),
        });
      });
    }, 200);
  }

  render(){
    return(
      <div>
        <div id="front-nav">
          <h1> This is the front page </h1>
        </div>
        <div id="front-content">
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default Front;
