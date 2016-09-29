import React from 'react';
import {Link,hashHistory} from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends React.Component {
  render() {
    return(
      <div>
          <div id="watch-list">
             <div className="container">
               <ul id="links">
                 <ol><Link to="/towatch"> Poop </Link></ol>
                 <ol><Link to="/watching">Watching Poop </Link></ol>
                 <ol><Link to="/watched">Watched Poop </Link></ol>
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
