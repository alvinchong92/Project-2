import React from 'react';

const propTypes = {
  likeCount: React.PropTypes.number,
  handleLikeClick: React.PropTypes.func,
};

class LikeButton extends React.Component {
  render() {
    return (
      <div className="like-button">
        <p>{this.props.likeCount}</p>
        <button onClick={this.props.handleLikeClick} >Like</button>
      </div>
    );
  }
}

LikeButton.propTypes = propTypes;

export default LikeButton;
