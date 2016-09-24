import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return(
      <div>
        <div id="toWatchForm">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="movie" />
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}
export default Searchbar;
