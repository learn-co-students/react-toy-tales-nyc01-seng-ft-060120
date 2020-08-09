import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: "",
    likes: 0
  }

  nameChangeHandler = (e) => {
    this.setState({name: e.target.value})
  }

  imageChangeHandler = (e) => {
    this.setState({image: e.target.value})
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <form onSubmit = {(e) => {
          e.preventDefault()
          this.props.newToyHandler(this.state)
        }} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.nameChangeHandler}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.imageChangeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
