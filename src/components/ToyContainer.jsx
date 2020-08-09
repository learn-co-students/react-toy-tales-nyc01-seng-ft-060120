import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

// console.log(props)

const allToys = props.toys.map(toyObj => <ToyCard key={toyObj.id} toy={toyObj} updateLikes={props.updateLikes} donateToy={props.donateToy}/>)


  return(
    <div id="toy-collection">
      {allToys}
    </div>
  );
}

export default ToyContainer;
