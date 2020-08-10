import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
    likes: 0
  }

  changeHandler = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
        name: "",
        image: "",
        likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.changeHandler}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.changeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
