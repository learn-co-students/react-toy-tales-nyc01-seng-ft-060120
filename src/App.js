import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

class App extends React.Component{

  state = {
    display: false,
    toys: [],
    name: "", 
    image: ""
  }

  componentDidMount() {
    this.apiGet();
  }

  apiGet() {
    fetch('http://localhost:3000/toys')
      .then(resp => resp.json())
      .then(json => this.setState({toys: json}))
      .catch(error => console.log(error))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.apiPost(this.submitFetchBody())
    e.target.reset()
  }

  apiPost = (newInfo) => {
    fetch('http://localhost:3000/toys', newInfo)
      .then(resp => resp.json())
      .then(json => {
        let newList = [...this.state.toys]
        newList.push(json)
        this.setState({
          toys: newList, 
          display: false
        })
      })
      .catch(error => console.log(error))
  }

  submitFetchBody() {
    let formData = {
      name: this.state.name,
      image: this.state.image,
      likes: 0
    }
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    return configObj
  }

  handleDonation = (id) => {
    this.apiDelete(id, this.deleteFetchBody())
  }

  apiDelete = (id, deleteObj) => {
    fetch('http://localhost:3000/toys/' + id, deleteObj )
      .catch(error => console.log(error))
    this.removeDeletedToy(id)
  }

  deleteFetchBody = () => {
    let configObj = {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }
    }
    return configObj
  }

  removeDeletedToy = (id) => {
    let newList = [...this.state.toys]
    newList.splice(id - 1, 1)
    this.setState({toys: newList})
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler} changeHandler={this.handleChange}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDonation={this.handleDonation} handleLike={this.handleLike}/>
      </>
    );
  }

}

export default App;
