import React from 'react';
import './App.css';

import ToyHeader from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

//import toyData from './data'

let baseUrl = `http://localhost:3000/toys`


class App extends React.Component{

  state = {
    display: false,
    toyData: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  likeHandler = (obj, likes) => {
    fetch(`${baseUrl}/${obj.id}`, {
      method: "PATCH",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: likes
      })
    })
    .then(response => response.json())
  }

  // submitHandler = (obj) => {
  //   let toysArray = [...this.state.toyData, obj]
  //   this.setState({
  //     toyData: toysArray
  //   })
  // }

  submitHandler = (obj) => {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        image: obj.image,
        likes: obj.likes
      })
    })
    .then(response => response.json())
    .then(obj => {
      let toysArray = [...this.state.toyData, obj]
      this.setState({
        toyData: toysArray
      })
    })
  }

  deleteToy = (obj) => {
    fetch(`${baseUrl}/${obj.id}`, {
      method: "DELETE"
    })
    let newToys = this.state.toyData.filter(toy => toy.id !== obj.id)
    this.setState({
      toyData: newToys
    })
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(toyFetch => this.setState({
      toyData: toyFetch
    }))
  }

  render(){
    return (
      <>
        <ToyHeader/>
        { this.state.display ? <ToyForm submitHandler={this.submitHandler}/> : null }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyData={this.state.toyData} likeHandler={this.likeHandler} deleteToy={this.deleteToy}/>
      </>
    );
  }

}

export default App;
