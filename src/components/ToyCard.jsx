import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.toyInfo.name}</h2>
        <img src={this.props.toyInfo.image} alt={this.props.toyInfo.name} className="toy-avatar" />
        <p>{this.props.toyInfo.likes} Likes </p>
        <button onClick={() => this.props.clickLike(this.props.toyInfo.id)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.deleteToy(this.props.toyInfo.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
