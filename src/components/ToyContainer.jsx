import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toyData=[], cardCallbacks={}}) => {
  let toyCards = toyData.map(toy => <ToyCard key={toy.id} toy={toy} cardCallbacks={cardCallbacks}/>)
  return(
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
