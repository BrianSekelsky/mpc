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
		currentKey: new Set(),
		last: false,
	};

	handleKeyPress(p) {
		var temp = this.state.currentKey
  		temp.add(p.keyCode)

		this.setState({currentKey: temp})
		this.timeoutId = setTimeout(function () {
        	this.setState({currentKey: new Set()})
    	}.bind(this), 250);
  	}

  	handleClick(dk){
  		var temp = this.state.currentKey
  		temp.add(dk)

  		this.setState({currentKey: temp})
		this.timeoutId = setTimeout(function () {
        	this.setState({currentKey: new Set()})
    	}.bind(this), 250);
  	}

	componentDidMount() {
    	document.addEventListener('keydown', this.handleKeyPress)
  	}
  
	componentWillUnmount() {
	    document.removeEventListener('keydown', this.handleKeyPress)
	}

	render(){

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
		const keyMap = {90: kick,
						88: snare,
						67: bongo1,
						86: bongo2,
						65: hat1,
						83: hat2,
						68: clap,
						70: timbale,
						81: openhat1,
						87: openhat2,
						69: ride,
						82: shake,
						49: woodblock1,
						50: woodblock2,
						51: fx,
						52: texture,
		}
		const dk = this.props.dk
		if (this.state.currentKey.has(this.props.dk)){
				const audioKey = keyMap[this.props.dk]
			    let audio = new Audio(audioKey)
				audio.play()
				return 'pad playing'
		}
		else {
			return 'pad'
		}
	}
}

export default Pad;