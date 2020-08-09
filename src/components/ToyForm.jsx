import React, { Component } from 'react';

class ToyForm extends Component {
  refreshState = {name:"", image:"", likes:0}
  state = {...this.refreshState}

  changeHandler = (e) => {
    const newState = { [e.target.name]: e.target.value }
    this.setState(newState)
  }

  formSubmitHandler = (e) => {
    e.preventDefault()
    const newToy = {...this.state}
    this.setState(this.refreshState)
    this.props.submitHandler(newToy)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.formSubmitHandler}>
          <h3>Create a toy!</h3>
          <input onChange={this.changeHandler} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.changeHandler} value={this.state.image} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input onChange={this.changeHandler} type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
