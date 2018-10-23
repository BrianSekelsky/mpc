import React, { Component } from 'react';

class Pad extends Component {



	render(){
		console.log(this.props)

		return(
			<div
				className={this.getClassName()}
				data-key={this.props.dk}
			>
				{this.props.name}
			</div>
		);
	}

	getClassName(){

		var audio = new Audio('../samples/guitar1.mp3')

		if(this.props.currentKey == this.props.dk)
			return "pad playing"
		
		else
			return "pad"

		audio.play()
	}

	playAudioSample(){

	}

}

export default Pad;