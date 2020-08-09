import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'
let baseUrl = 'http://localhost:3000/toys/'

class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(toys => this.setState({toys: toys}))
  }
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitHandler = (obj) => {
    fetch(baseUrl, {
      method: "POST", 
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: obj.name,
        image: obj.image,
        likes: obj.likes
      })
    })
    .then(response => response.json())
    .then(obj => {
      let newToys = [...this.state.toys, obj]
      this.setState({
        toys: newToys
      })
    })
  }

  deleteToy = (obj) => {
    fetch(baseUrl + obj.id, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(toy => {
      let newToys = this.state.toys.filter(toy => obj.id !== toy.id)
      this.setState({
        toys: newToys
      })
    })
  }

  increaseLikes = (obj, likes) => {
    fetch(baseUrl + obj.id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: likes
      })
    })
  } 


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} increaseLikes={this.increaseLikes}/>
      </>
    );
  } 

}

export default App;
