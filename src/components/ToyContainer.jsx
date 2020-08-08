import React from 'react';
import ToyCard from './ToyCard'

function ToyContainer(props) {
  return(
    <div id="toy-collection">
      {props.toyData.map(tD => <ToyCard key={tD.id} likeHandler={props.likeHandler} deleteToy={props.deleteToy} toy={tD}/>)}
    </div>
  );
}

export default ToyContainer;
