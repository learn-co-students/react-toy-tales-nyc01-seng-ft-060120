import React, { Component } from 'react';

class ToyCard extends Component {

  toyCardClickHandler = (e) => {
    this.props.deleteHandler(e.target.parentElement.id)
  }

  render() {
    return (
      <div id={this.props.toy.id} className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.props.likeHandler}>Like {'<3'}</button>
    <button onClick={this.toyCardClickHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
