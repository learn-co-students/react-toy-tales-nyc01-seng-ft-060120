import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

export default class App extends React.Component{
  state = {
    display: false,
    stateArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys/")
      .then(resp => resp.json())
      .then(toys => this.setState({stateArray: toys}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitHandler = (obj) => {
    // console.log(obj)
    let submitArray = [obj, ...this.state.stateArray]
    this.setState({stateArray: submitArray})

    fetch("http://localhost:3000/toys/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'name': `${obj.name}`,
        'image': `${obj.image}`,
      })
    }) // fetch POST
    .then(resp => resp.json())
    .then(toy => console.log(toy))
  } // .submitHandler

  clickHandler = (id) => {
    // console.log(id)
    let clickArray = [...this.state.stateArray]
    let donateToy = clickArray.filter(toy => toy.id !== id)
    // console.log(donateToy)
    this.setState({stateArray: donateToy})

    fetch(`http://localhost:3000/toys/${id}`, {
    method: "DELETE"
    })
  }
    

  render(){
    // console.log(this.state.stateArray)
    return (
      <>
        <Header/>
        { this.state.display ? <ToyForm submitHandler={this.submitHandler}/> : null }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer stateArray={this.state.stateArray} clickHandler={this.clickHandler}/>
      </>
    );
  }

}
