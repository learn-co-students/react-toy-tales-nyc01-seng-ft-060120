import React, { Component } from 'react';



class ToyCard extends Component {


  render() {
    let { id, name, image, likes } = this.props.toy
    let { appDeleteHandler, appLikeHandler } = this.props.cardCallbacks
     return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button 
            className="like-btn"
            onClick={() => appLikeHandler(id, likes+1)}
        >Like {'<3'}</button>
        <button 
            className="del-btn"
            onClick={() => appDeleteHandler(id)}
        >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
