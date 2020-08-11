import React from 'react';

export default class ToyCard extends React.Component {

  render() {
    // console.log(this.props.clickHandler)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.clickHandler(this.props.toy.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}
