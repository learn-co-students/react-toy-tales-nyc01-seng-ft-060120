import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component{
  

  render(){
  let toys = this.props.toys.map(toys => <ToyCard toys={toys} likes={toys.likes} donateGoodWillClick={this.props.donateGoodWillClick} likeClickHandler={this.props.likeClickHandler}/>)

	 return(
     <div id="toy-collection">
       {toys}
     </div>
   );}
}

export default ToyContainer;
