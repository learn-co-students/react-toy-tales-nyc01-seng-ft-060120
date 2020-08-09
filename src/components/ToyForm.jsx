import React, { Component } from 'react';

const initialState = {  
  name: "",
  image: ""
}

class ToyForm extends Component {

  state = initialState

  changHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createNewToy(this.state)
    this.setState(initialState)
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" onChange={this.changHandler} value={this.state.name} name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" onChange={this.changHandler} value={this.state.image} name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;

