import React, { Component } from 'react';

class ToyCard extends Component {

  deleteClickHandler = (e) => {
    e.preventDefault()
    this.props.appDeleteHandler(this.props.toy.id)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={this.deleteClickHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
