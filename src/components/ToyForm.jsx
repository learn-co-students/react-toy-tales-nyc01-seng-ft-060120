import React, { Component } from 'react';


class ToyForm extends Component {

  state = {
    names: "",
    image: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    this.props.submitHandler(this.state.names, this.state.image)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="names" value={this.state.name} onChange={this.changeHandler} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" value={this.state.name} onChange={this.changeHandler} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
