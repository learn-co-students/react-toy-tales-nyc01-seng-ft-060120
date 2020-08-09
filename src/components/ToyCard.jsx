import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    name: this.props.toy.name,
    image: this.props.toy.image,
    likes: this.props.toy.likes
  }
  
  likeClicker = (e) => {
    e.preventDefault()
  
    this.setState(previousState => {
      return {
        likes: previousState.likes + 1
      }
    }, () => {this.props.updateLikes(this.props.toy.id, this.state.likes)})
    
  }

  deleteHandler = (e) => {
    e.preventDefault()
    this.props.donateToy(this.props.toy)
  }

  render() {

    // console.log(this.props)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.likeClicker} className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteHandler}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
