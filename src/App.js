import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

const url = "http://localhost:3000/toys"

class App extends React.Component{

  

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  removeFromToys = (toyId) => {
    const newToys = this.state.toys.filter(toy => toy.id!==toyId)
    this.setState({toys: newToys})
  }

  deleteHandler = (toyId) => {
    fetch(`${url}/${toyId}`, {method: "DELETE"})
    .then (this.removeFromToys(toyId))
  }

  replaceWithUpdatedLikes = (newToy) => {
    const newToys = [...this.state.toys]
    const foundToyIndex = newToys.findIndex(toy => toy.id===newToy.id)
    newToys[foundToyIndex] = newToy
    this.setState({toys: newToys})
  }


  updateLikes = (newToy) => {
    newToy.likes++
    const configObj = {
      headers: {"Content-Type":"application/json"},
      method: "PATCH",
      body: JSON.stringify(newToy)
    }
    fetch(`${url}/${newToy.id}`, configObj)
    .then( res => res.json())
    .then( json => this.replaceWithUpdatedLikes(json))
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({toys: json}))
  }

  submitHandler = (newToy) => {
    const configObj = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(newToy)
    }
    fetch(url, configObj)
    .then(res => res.json())
    .then(json => {
      const newToyAr = [...this.state.toys, json]
      this.setState({toys: newToyAr})
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
        <ToyContainer likeAddHandler={this.updateLikes} deleteHandler={this.deleteHandler} toys={this.state.toys}/>
      </>
    );
  }

}

export {url}
export default App;
