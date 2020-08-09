import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
// import data from './data'

const toysUrl = 'http://localhost:3000/toys'

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
    let updatedToys = this.state.toys.map(toy => {
      if (toy.id === toyObj.id){
        return {...toy, likes: toyObj.likes}
      }else{
        return toy
      }
    })  
    this.setState({
      toys: updatedToys
    }) 
  }

  componentDidMount(){
    fetch(toysUrl)
    .then(resp => resp.json())
    .then(toyData => {
      this.setState({
        toys: toyData
      })
    })
  }

  createNewToy = (newToy) => {
    fetch(toysUrl, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: newToy.name, 
        image: newToy.image,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(newToy => {
      let newToys = [newToy, ...this.state.toys]
      this.setState({
        toys: newToys
      })
    })
  }

  updateLikes = (id, newLikes) => {
    fetch(`${toysUrl}/${id}`,{
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(res => res.json())
    .then(toyObj => this.renderNewLikes(toyObj))
  }

  donateToy = (id) => {
    fetch(`${toysUrl}/${id}`,{
      method: 'DELETE', 
    })
    let newToys = this.state.toys.filter(toy => toy.id !== id)
    this.setState({toys: newToys}, ()=>console.log("toys deleted", this.state.toys))
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createNewToy={this.createNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} 
        updateLikes={this.updateLikes} 
        donateToy={this.donateToy}
        deleteToy={this.deleteToy}/>
      </>
    );
  }

}

export default App;
