import React from 'react';
import './App.css';
import fetcher from './fetcher'
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
    this.setState({ display: newBoolean })
  }

  componentDidMount() {
    fetcher("http://localhost:3000/toys", this.initialStateSet)
  }

  initialStateSet = (data) => {
    this.setState({toyData: data})
  }

  handleNewToySubmit = ({name, image}) => {
    const newToy = { name, image, likes: 0}
    fetcher("http://localhost:3000/toys", this.displayAddedToy, {method: "POST", body: newToy})
  }

  displayAddedToy = (newToy) => {
    const newToyData = [...this.state.toyData].concat(newToy)
    this.setState({ toyData: newToyData })
  }

  likeToy = (id, likes) => {
      let data = {likes: likes}
      fetcher("http://localhost:3000/toys/"+id, this.updateToyLikes, {method: "PATCH", body: data})
  }

  updateToyLikes = ({id, likes}) => {
    let newToyData = [...this.state.toyData]
    let toy = newToyData.find( toy => toy.id === id )
    toy.likes = likes
    this.setState({ toyData: newToyData })
  }

  deleteToy = (id)  => {
    fetch("http://localhost:3000/toys/"+id, {method: "DELETE" })
    .then(response => {
      if (response.ok) {
        this.deleteToyCard(id)
      } else {
        console.log("not ok! ", response);
      }
    })
  }

  deleteToyCard = (id) => {
    let newToyData = [...this.state.toyData].filter( toy => toy.id !== id)
    this.setState({toyData: newToyData})
  }

  render(){
    let { toyData } = this.state
    return (
      <>
        <Header/>
        { this.state.display ?
          <ToyForm appSubmitHandler={this.handleNewToySubmit}/> : null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
            toyData={toyData} 
            cardCallbacks={{
              appDeleteHandler: this.deleteToy,
              appLikeHandler: this.likeToy
            }}
        />
      </>
    );
  }

}

export default App;
