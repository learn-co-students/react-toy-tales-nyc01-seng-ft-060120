import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let toyArray = props.toyArray.map(toy => {return <ToyCard key={toy.id} toy={toy} deleteHandler={props.deleteHandler} likeHandler={props.likeHandler} />})

  return(
    <div id="toy-collection">
      {toyArray}
    </div>
  );
}

export default ToyContainer;
