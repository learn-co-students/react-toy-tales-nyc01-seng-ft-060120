import React, { Component } from 'react';

class ToyCard extends Component {

  clickLike = (e) => {
    let newLikes = this.props.toy.likes + 1
    this.props.updateLikes(this.props.toy.id, newLikes)
  }

  handleDelete = () => {
    this.props.donateToy(this.props.toy.id)
  }

  render() {
    return (
      <div className="card" id={this.props.toy.id}> 
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt="" className="toy-avatar" />
        <p> {this.props.toy.likes} Likes </p>
        <button onClick={this.clickLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete}className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
