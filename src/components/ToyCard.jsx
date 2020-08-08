import React, { Component } from 'react';

class ToyCard extends Component {

  state ={
    name: this.props.toy.name,
    image: this.props.toy.image,
    likes: this.props.toy.likes
  }

  likeHandler = event => {
    event.preventDefault()
    this.setState(previousState => {
      return {
      likes: previousState.likes + 1
      }
    }, () => {this.props.likeHandler(this.props.toy, this.state.likes)})
  }
  
  deleteHandler = event => {
    event.preventDefault()
    this.props.deleteToy(this.props.toy)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.state.name}</h2>
        <img src={this.state.image} alt={this.props.toy.name} className="toy-avatar"></img>
        <p>{this.state.likes} Likes</p>
        <button className="like-btn" onClick={this.likeHandler}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteHandler}>Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
