import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component{
  

  render(){

    let toy = this.props.toys.map(toy => <ToyCard key={toy.id} toy={toy} updateLikes={this.props.updateLikes} donateToy={this.props.donateToy}/>)
    
    return(
      <div id="toy-collection">
        {toy}
      </div>
    );
  }
}

export default ToyContainer;
