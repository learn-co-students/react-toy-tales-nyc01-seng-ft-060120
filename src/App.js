import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


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

  fetchToys = () => {
    fetch('http://localhost:4000/toys')
    .then(resp => resp.json())
    .then(data => this.setState({toys: data}))
  }

  
  addToy = (toy) => {
    fetch('http://localhost:4000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(() => {
      this.fetchToys();
      this.handleClick();
    })
  }

  likeToy = (id) => {
    fetch(`http://localhost:4000/toys/${id}`)
    .then(resp => resp.json())
    .then(data => this.addLike(id, data.likes))
  }

  addLike = (id, likes) => {
    fetch(`http://localhost:4000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({likes: ++likes})
    })
    .then(resp => resp.json())
    .then(() => {this.fetchToys()})
  }

  deleteToy = (id) => {
    fetch(`http://localhost:4000/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {this.fetchToys()})
  }
  
  componentDidMount() {
    this.fetchToys()
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} likeToy={this.likeToy} deleteToy={this.deleteToy}/>
      </>
    );
  }

}

export default App;
