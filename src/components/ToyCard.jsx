import React, { Component } from 'react';

class ToyCard extends Component {

  state ={
    name: this.props.toy.name,
    image: this.props.toy.image,
    likes: this.props.toy.likes
  }

  likeHandler = (e) => {
    e.preventDefault()

    this.setState(previousState => {
      return {
      likes: previousState.likes + 1
      }
    }, 
      () => {this.props.likeToy(this.props.toy, this.state.likes)}
    )
  }

  delHandler = (e) => {
    e.preventDefault()

    this.props.deleteToy(this.props.toy)  
  }

  render() {
    return (
      <div className="card">
        <h2>{this.state.name}</h2>
        <img src={this.state.image} alt={this.state.name}  className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button onClick={this.likeHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={this.delHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
