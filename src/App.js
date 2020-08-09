import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

//import data from './data'

const toysUrl = `http://localhost:3000/toys/`

class App extends React.Component{
  
  state = {
    display: false,
    toys: []
  }

  componentDidMount = async () => {
    await this.fetchToys()
  }

  fetchToys = () => {
    fetch(toysUrl)
    .then(resp=>resp.json())
    .then(data=> this.setState({toys: data}))
  }

  updateToy = (toyId, likes) => {
    fetch(toysUrl + toyId, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'content': 'application/json'
      },
      body: JSON.stringify({likes: likes})
    })
    .then(resp=>resp.json())
    .then(this.fetchToys())
  }

  submitHandler = async(toy) => {
     await fetch(toysUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(toy => this.setState({toys: [...this.state.toys, toy]}))
  }

  likesHandler = (props) => {
    console.log(props.toy.id, props.toy.likes)
    this.updateToy(props.toy.id, props.toy.likes)
  }

  donateToy = (toyId) => {
    fetch(toysUrl + toyId, {
      method: 'DELETE'
    })
    let newToys = this.state.toys.filter(toy => toy.id !== toyId)
    this.setState({toys: newToys})
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
          <ToyForm submitHandler={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer donateHandler={this.donateToy} likesHandler={this.likesHandler} toys={this.state.toys} />
      </>
    );
  }

}

export default App;
