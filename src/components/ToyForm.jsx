import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
      name: '',
      image: '',
      likes: 0
  }

  clickHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={(e) => this.clickHandler(e)}>
          <h3>Create a toy!</h3>
          <input onChange={e =>this.setState({name: e.target.value})}type="text" name="name" value={this.state.name} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={e =>this.setState({image: e.target.value})}type="text" name="image" value={this.state.image} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
