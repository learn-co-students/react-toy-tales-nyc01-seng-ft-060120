import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  state = {
    newToy: this.props.newToy
  }


  render(){
    
    return(
      <div id="toy-collection">
        {this.props.toyArray.map(toy => <ToyCard clickLike={() => this.props.clickLike(toy.id)} deleteToy={() => this.props.deleteToy(toy.id)} key={toy.id} toyInfo={toy}/>)}
      </div>
    );
  }
}

export default ToyContainer;
