import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  handleLike = () => {
    this.apiLike(this.apiBuildLike())
  }

  apiBuildLike() {
    let formData = {
      likes: this.state.likes + 1
    }
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    return configObj
  }

  apiLike(call) {
    fetch('http://localhost:3000/toys/' + this.props.toy.id, call)
      .then(resp => resp.json())
      .then(json => this.setState({likes: json.likes}))
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.props.handleDonation(this.props.toy.id)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
