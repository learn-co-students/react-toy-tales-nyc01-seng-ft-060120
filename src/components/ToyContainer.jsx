import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard toy={toy} key={toy.id} handleDonation={props.handleDonation} handleLike={props.handleLike}/>)}
    </div>
  );
}

export default ToyContainer;
