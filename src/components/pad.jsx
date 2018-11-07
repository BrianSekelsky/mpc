import React, { Component } from 'react';

import kick from '../samples/kick.wav'
import snare from '../samples/snare.wav'
import hat1 from '../samples/hat1.wav'
import hat2 from '../samples/hat2.wav'
import bongo1 from '../samples/bongo1.wav'
import bongo2 from '../samples/bongo2.wav'
import openhat1 from '../samples/openhat1.wav'
import openhat2 from '../samples/openhat2.wav'
import ride from '../samples/ride.wav'
import shake from '../samples/shake.wav'
import texture from '../samples/foley2.wav'
import timbale from '../samples/Timbale.wav'
import fx from '../samples/foley.wav'
import woodblock1 from '../samples/woodblock1.wav'
import woodblock2 from '../samples/woodblock2.wav'
import clap from '../samples/Clap.wav'

class Pad extends Component {

	state={
		currentKey: '',
		last: false,
	};

	handleKeyPress(p) {
		this.setState({currentKey: p.keyCode})
		this.timeoutId = setTimeout(function () {
        	this.setState({currentKey: ''})
    	}.bind(this), 250);
  	}

  	handleClick(dk){
  		this.setState({currentKey: dk})
		this.timeoutId = setTimeout(function () {
        	this.setState({currentKey: ''})
    	}.bind(this), 250);
  	}

	componentDidMount() {
    	document.addEventListener('keydown', this.handleKeyPress)
  	}
  
	componentWillUnmount() {
	    document.removeEventListener('keydown', this.handleKeyPress)
	}

	render(){
		console.log(this.props)

		return(
			<div
				className={this.getClassName()}
				data-key={this.props.dk}
				onClick={() => this.handleClick(this.props.dk)}
				
			>
				{this.handleKeyPress = this.handleKeyPress.bind(this)}
            	<h1>{this.props.name}</h1>
            	<span>{this.props.title}</span>
			</div>
		);
	}

getClassName(){

		if(this.state.currentKey === this.props.dk){
			if(this.props.dk === 90){
				var audio = new Audio(kick)
				audio.play()
			}
			if(this.props.dk === 88){
				var audio = new Audio(snare)
				audio.play()
			}
			if(this.props.dk === 67){
				var audio = new Audio(bongo1)
				audio.play()
			}
			if(this.props.dk === 86){
				var audio = new Audio(bongo2)
				audio.play()
			}
			if(this.props.dk === 65){
				var audio = new Audio(hat1)
				audio.play()
			}
			if(this.props.dk === 83){
				var audio = new Audio(hat2)
				audio.play()
			}
			if(this.props.dk === 68){
				var audio = new Audio(clap)
				audio.play()
			}
			if(this.props.dk === 70){
				var audio = new Audio(timbale)
				audio.play()
			}
			if(this.props.dk === 81){
				var audio = new Audio(openhat1)
				audio.play()
			}
			if(this.props.dk === 87){
				var audio = new Audio(openhat2)
				audio.play()
			}
			if(this.props.dk === 69){
				var audio = new Audio(ride)
				audio.play()
			}
			if(this.props.dk === 82){
				var audio = new Audio(shake)
				audio.play()
			}
			if(this.props.dk === 49){
				var audio = new Audio(woodblock1)
				audio.play()
			}
			if(this.props.dk === 50){
				var audio = new Audio(woodblock2)
				audio.play()
			}
			if(this.props.dk === 51){
				var audio = new Audio(fx)
				audio.play()
			}
			if(this.props.dk === 52){
				var audio = new Audio(texture)
				audio.play()
			}
			
			return "pad playing"
		}

		if(this.state.currentKey === this.props.dk){
			return "pad playing"
		}
		
		else
			return "pad"
	}

}

export default Pad;