import React, { Component } from 'react';

const ToyCard = (props) => {

    return (
      <div className="card">
        <h2>{props.toy.name}</h2>
        <img src={props.toy.image} alt={props.toy.name} className="toy-avatar" />
        <p>{props.toy.likes} Likes </p>
        <button onClick={() => {props.likeToy(parseInt(props.toy.id))}} className="like-btn">Like {'<3'}</button>
        <button onClick={() => {props.deleteToy(parseInt(props.toy.id))}} className="del-btn">Donate to GoodWill</button>
      </div>
    )
}

export default ToyCard;
