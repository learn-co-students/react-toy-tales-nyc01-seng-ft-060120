import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


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

  submitHandler = (obj) => {
    fetch("http://localhost:3000/toys/", {
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
        <ToyContainer newToy={this.state.toyData}/>
      </>
    );
  }

}

export default App;
