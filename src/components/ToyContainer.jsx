import React from 'react';
import ToyCard from './ToyCard'

export default class ToyContainer extends React.Component {
  render() {
    // console.log(this.props.stateArray)
    // console.log(this.props.clickHandler)
    let toyCard = this.props.stateArray.map(toy => <ToyCard toy={toy} key={toy.id} clickHandler={this.props.clickHandler}/>)
    return(
      <div id="toy-collection">
        {toyCard}
      </div>
    )
  }
  
}

