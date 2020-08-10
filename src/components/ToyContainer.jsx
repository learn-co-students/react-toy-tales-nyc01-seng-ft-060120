import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  render(){
    let toys = this.props.toys.map(toyObj => <ToyCard key={toyObj.id} toy={toyObj} appDeleteHandler={this.props.appDeleteHandler}/>)
    return(
      <div id="toy-collection">
        {toys}
      </div>
    );
}
}

export default ToyContainer;
