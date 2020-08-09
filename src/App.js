import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


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

  renderNewLikes = (toyObj) => {
    console.log(toyObj)
    let updatedToys = this.state.toys.map(toy => {
      if (toy.id === toyObj.id) {
        return {...toy, likes: toyObj.likes }
      } else {
        return toy
      }
    })
    this.setState({
      toys: updatedToys
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    // .then(toyInfo => console.log(toyInfo))
    .then(toyInfo => {
      this.setState({ toys: toyInfo })
    })
  }

  submitHandler = (obj) => {
    fetch("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: obj.name,
        image: obj.image,
        likes: obj.likes
      })
    })
    .then(resp => resp.json())
    .then(obj => {
      let newToys = [...this.state.toys, obj]
      this.setState({ toys: newToys })
    }) 
  }

  updateLikes = (id, likes) => {
    console.log(likes)
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': "application/json",
        'accept': "application/json"
      },
      body: JSON.stringify({
        likes: likes
    })
  })
    .then(resp => resp.json())
    .then(toyObj => this.renderNewLikes(toyObj))
  }

  donateToy = (obj) => {
    fetch(`http://localhost:3000/toys/${obj.id}`, {
      method: "DELETE"
    })
    let newToys = this.state.toys.filter(toy => toy.id !== obj.id)
    this.setState({
      toys: newToys
    })
  }

  

  render(){

    // console.log(this.state.toys)
    

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
        <ToyContainer toys={this.state.toys} updateLikes={this.updateLikes} donateToy={this.donateToy}/>
      </>
    );
  }

}

export default App;
