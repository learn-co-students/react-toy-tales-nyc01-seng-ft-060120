import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const toys = props.toys.map(toy => {
    return (
      <ToyCard donateHandler={props.donateHandler} likesHandler={props.likesHandler} key={toy.id} toy={toy}/>
    )
  })
  return <div id='toy-collection'>{toys}</div>;
}

export default ToyContainer;
