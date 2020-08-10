import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(resp => resp.json())
      .then(data => this.setState({
        toys: data
      }))
  }

  submitHandler = (name, image) => {
    fetch("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: name, image: image, likes: 0})
    })
    .then(resp=> resp.json())
    .then(data => this.setState({
      toys: data
    }))
  }

  appDeleteHandler = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE',
    })
    let newToys = this.state.toys.filter(toy => toy.id !== id)
    this.setState({ toys: newToys })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} appDeleteHandler={this.appDeleteHandler}/>
      </>
    );
  }

}

export default App;
