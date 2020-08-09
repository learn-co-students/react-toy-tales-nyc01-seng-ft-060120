import React, { Component } from 'react';


class ToyForm extends Component {
  
  state = {
    name: "",
    image: ""
  }
  
  handleChange = (e) => {
    let t = e.target
    this.setState({
      [t.name]: t.value
    })
  }

  handleSubmit = (e) => {
    const { appSubmitHandler } = this.props
    e.preventDefault()
    appSubmitHandler(this.state)
    this.setState({
      name: "",
      image: ""
    })
  }

  render() {
    const { name, image } = this.state 
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
              type="text" 
              name="name" 
              placeholder="Enter a toy's name..." 
              className="input-text"
              value={name}
              onChange={this.handleChange}
          />
          <br/>
          <input 
              type="text" 
              name="image" 
              placeholder="Enter a toy's image URL..." 
              className="input-text"
              value={image}
              onChange={this.handleChange}
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
