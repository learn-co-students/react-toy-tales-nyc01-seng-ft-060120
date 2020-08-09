import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map( toy => <ToyCard likeAddHandler={props.likeAddHandler} deleteHandler={props.deleteHandler} toy={toy}/>)}
    </div>
  );
}

export default ToyContainer;
