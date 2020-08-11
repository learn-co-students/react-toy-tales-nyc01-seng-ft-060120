import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    inputName: "",
    inputImage: ""
  }

  submitToy = (e) => {
    e.preventDefault()
    this.props.submitToy(this.state)
    this.setState({
      inputName: "",
    inputImage: ""
    })
  }
  
  toyName = (e) =>{
   this.setState({inputName: e.target.value }) 
  }

  toyImage = (e) =>{
    this.setState({inputImage: e.target.value }) 
   }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitToy} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.toyName} value={this.state.inputName} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.toyImage} value={this.state.inputImage} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
