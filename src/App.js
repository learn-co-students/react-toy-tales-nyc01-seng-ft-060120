import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

const API = "http://localhost:3000/toys"


class App extends React.Component{

  state = {
    display: false,
    toyArray: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  fetchToys = () => {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ toyArray:data }))
  }

  componentDidMount(){
    this.fetchToys()
  }

  submitHandler = (obj) => {
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        application: 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => this.fetchToys())
  }

  deleteHandler = (id) => {
    fetch(`${API}/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        application: 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => this.fetchToys())
  }

  likeHandler = (id, newLikes) => {
    fetch(`${API}/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        application: 'application/json'
      },
      body: JSON.stringify({ likes:newLikes })
    })
    .then(response => response.json())
    .then(data => this.fetchToys())
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
        <ToyContainer toyArray={this.state.toyArray} deleteHandler={this.deleteHandler}  likeHandler={this.likeHandler} />
      </>
    );
  }

}

export default App;
