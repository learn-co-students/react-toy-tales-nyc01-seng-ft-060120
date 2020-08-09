import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import data from './data'

let baseUrl = "http://localhost:3000/toys"

class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    let url = baseUrl
    fetch(url)
    .then(resp=> resp.json())
    .then(resp => {
      this.setState({toys: resp})
    })
  }

  donateGoodWillClick = (toy) => {
    let newArray = [...this.state.toys]
    let foundObj = newArray.find(toyObj => toyObj.name === toy.name)
    let numIndex = (newArray.indexOf(foundObj))
    newArray.splice(numIndex, 1)
    this.setState({toys: newArray})
    this.deleteToyDatabase(toy.id)
  }

  deleteToyDatabase = (toy) => {
    console.log(toy)
    fetch(`${baseUrl}/${toy}` , {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  likeClickHandler = (obj) => {
    fetch(`${baseUrl}/${obj.id}`,{
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      likes: obj.likes+=1
    })
  })
    .then(resp => resp.json())
    .then(resp => this.setState(resp))
  }


  newToyHandler = (obj) => {
    let newArray = [...this.state.toys, obj]
    this.setState({toys: newArray})

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm newToyHandler={this.newToyHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donateGoodWillClick={this.donateGoodWillClick} likeClickHandler={this.likeClickHandler}/>
      </>
    );
  }

}

export default App;
