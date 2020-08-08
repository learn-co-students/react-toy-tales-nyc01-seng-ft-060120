import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{


  state = {
    display: false,
    toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  deleteHandler = (id) => {
    let array = [...this.state.toys]
    array.splice(id-1, 1)
      this.setState({
        toys: array
      })
    
    }

  likeHandler = (e) => {
    let id = e.target.parentElement.id
    let objToFind = this.state.toys.find(toy => toy.id == id)
    objToFind.likes += 1
    console.log(objToFind.likes)
    this.setState({toys: this.state.toys})
    }
  

  submitHandler = (e) => {
    e.preventDefault()
    let obj = {
      name: e.target.children[1].value,
      image: e.target.children[3].value,
    }
    let newArray = [obj,...this.state.toys]
    this.setState({toys: newArray})

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
        <ToyContainer deleteHandler={this.deleteHandler} toys={this.state.toys} likeHandler={this.likeHandler}/>
      </>
    );
  }

}

export default App;
