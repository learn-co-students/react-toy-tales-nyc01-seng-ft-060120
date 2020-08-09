import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'



class App extends React.Component{

  state = {
    toyArray: [],
    display: false,
    newToy: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => this.setState({ toyArray: data}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitToy = (obj) => {
    fetch("http://localhost:3000/toys", {
          method: "POST",
          headers: {
            "content-type":"application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: obj.inputName,
            image: obj.inputImage,
            likes: 0
          })
        })
        .then(resp => resp.json())
        .then(data => this.setState({ toyArray: [...this.state.toyArray,data]}))
  }

  deleteToy = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
      headers: {
        "content-type":"application/json",
        Accept: "application/json"
      }
    })
    let newArray = this.state.toyArray.filter(toy => toy.id !== id)
    this.setState({toyArray : newArray})
  }

clickLike = (id) => {
  let foundToy = this.state.toyArray.filter(toy => toy.id === id)
 
    fetch(`http://localhost:3000/toys/${id}`, {
            method: "PATCH",
            headers: {
              "content-type":"application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              likes: ((foundToy[0].likes) + 1)
            })
          })
          
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => this.setState({ toyArray: data}))
}


  render(){
    return (
      <>
        <Header/>
        { this.state.display ? <ToyForm submitToy={this.submitToy}/> : null }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer clickLike={this.clickLike} deleteToy={this.deleteToy} toyArray={this.state.toyArray} newToy={this.state.newToy}/>
      </>
    );
  }

}

export default App;
