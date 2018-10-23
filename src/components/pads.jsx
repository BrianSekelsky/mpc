import React, { Component } from 'react';
import Pad from './pad';

class Pads extends Component {
	
	render(){
		return(
			<table>
				<tbody>
					{this.createTable()}
				</tbody>
			</table>
		);
	}

	createTable(){
	    let table = []

	    // Create 4 x 4 grid from array
	    for (let i = 0; i < 16; i=i+4) {
	      let children = []
	      //Inner loop to create children
	      for (let j = 0; j < 4; j++) {
	        children.push(<td>{
	        	<Pad 
	        		key = {this.props.pads[i+j].key}
	        		name = {this.props.pads[i+j].name}
	        		dk = {this.props.pads[i+j].datakey}

	        		pressed = {this.props.pads[i+j].pressed}

	        		currentKey = {this.props.currentKey}
	        		
	        	/>
	        }</td>)
	      }
	      //Create the parent and add the children
	      table.push(<tr>{children}</tr>)
	    }
	    return table
  	}

}

export default Pads;