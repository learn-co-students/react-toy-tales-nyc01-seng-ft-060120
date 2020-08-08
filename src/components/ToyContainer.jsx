import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let toys = props.toys.map(toyObj => <ToyCard toy={toyObj} key={toyObj.id} deleteHandler={props.deleteHandler} likeHandler={props.likeHandler}/>)
  return(
    <div id="toy-collection">
      {toys}
    </div>
  );
}

export default ToyContainer;
