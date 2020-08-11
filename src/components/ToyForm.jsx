import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name:"",
    image:"",
  }

  changeHandler = (event) => {
    // console.log(event.target.value)
    // console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
  }
  submitHandler = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state);
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" value={this.state.name} placeholder="Enter a toy's name..." className="input-text" onChange={this.changeHandler}/>
          <br/>
          <input type="text" name="image" value={this.state.image} placeholder="Enter a toy's image URL..." className="input-text" onChange={this.changeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
