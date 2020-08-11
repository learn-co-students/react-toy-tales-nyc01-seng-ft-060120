import React, { Component } from 'react';

class ToyCard extends Component {

  deleteHandler = () => {
    this.props.deleteHandler(this.props.toy.id)
  }

  likeHandler = () => {
    let newLikes = parseInt(this.props.toy.likes, 10) + 1
    this.props.likeHandler(this.props.toy.id, newLikes)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.likeHandler} >Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteHandler} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
