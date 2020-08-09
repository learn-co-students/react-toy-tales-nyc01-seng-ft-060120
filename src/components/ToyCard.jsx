import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="card">
        <h2>{this.props.toys.name}</h2>
        <img src={this.props.toys.image} alt={"toy"} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button onClick = {() => {
          this.props.likeClickHandler(this.props.toys)
        }}className="like-btn">Like {'<3'}</button>
        <button onClick={() => {
          this.props.donateGoodWillClick(this.props.toys)
        }}className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
