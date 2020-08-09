import React from 'react';
import ToyCard from './ToyCard'


class ToyContainer extends React.Component {



  render() {
    let allToys = this.props.toys.map(toy => <ToyCard toy={toy} deleteToy={this.props.deleteToy} increaseLikes={this.props.increaseLikes}/>)
    return(
      <div id="toy-collection">
        {allToys}

      </div>
    );
  }
}
export default ToyContainer;
