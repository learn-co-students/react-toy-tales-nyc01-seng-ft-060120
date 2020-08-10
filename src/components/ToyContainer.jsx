import React from 'react';
import ToyCard from './ToyCard'


class ToyContainer extends React.Component {
  state = {
    toys: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
        .then(resp => resp.json())
        .then(data => this.setState({ toys: data }))    
  }
  
  likeToy = (obj, likes) => {
    fetch(`http://localhost:3000/toys/${obj.id}`, {
      method: "PATCH",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: likes
      })
    })
    .then(response => response.json())
  }

  deleteToy = (obj) => {
    fetch(`http://localhost:3000/toys/${obj.id}`, {
      method: "DELETE"
    })
    let newToys = this.state.toys.filter(toy => toy.id !== obj.id)
    this.setState({
      toys: newToys
    })
  }

  showNewToy = () => {
    let toysArray = [...this.state.toys, this.props.newToy]
      this.setState({
        toys: toysArray
      })
  }

  
  render(){
    let toys = this.state.toys.map(toyObj => <ToyCard key={toyObj.id} 
      toy={toyObj} likeToy={this.likeToy} deleteToy={this.deleteToy} /> )
    return(
      <div id="toy-collection">
      {toys}
      </div>
    );
  }
}

export default ToyContainer;
