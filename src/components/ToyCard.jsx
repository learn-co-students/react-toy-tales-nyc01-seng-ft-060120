import React, { Component } from 'react';
import { isElementOfType } from 'react-dom/test-utils';

class ToyCard extends Component {

  state = {
    likes: 0
  }

  donateToy = (e) => {
    e.preventDefault()
    console.log('hi')
    this.props.donateHandler(this.props.toy.id)
  }

  likesHandler = (e) => {
    e.preventDefault()
    let newLikes = this.props.toy.likes + 1
    this.setState({ likes: newLikes }, () =>
      this.props.likesHandler({toy: {id: this.props.toy.id, likes: newLikes}})
    );
    
  }

  render() {
    return (
      <div id={this.props.toy.id} className='card'>
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className='toy-avatar' />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={e => this.likesHandler(e)} className='like-btn'>Like {"<3"}</button>
        <button onClick={e => this.donateToy(e)} className='del-btn'>Donate to GoodWill</button>
      </div>
     
    );
  }

}

export default ToyCard;
