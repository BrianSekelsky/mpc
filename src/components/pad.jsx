import React, { Component } from 'react';
import soundfile1 from '../samples/kick.wav'
import soundfile2 from '../samples/snare.wav'
import soundfile3 from '../samples/hat1.wav'
import soundfile4 from '../samples/hat2.wav'
import soundfile5 from '../samples/clap.wav'
import soundfile6 from '../samples/crash.wav'
import soundfile7 from '../samples/hat1.wav'
import soundfile8 from '../samples/hat2.wav'
import soundfile9 from '../samples/clap.wav'
import soundfile10 from '../samples/crash.wav'
import soundfile11 from '../samples/hat1.wav'
import soundfile12 from '../samples/hat2.wav'
import soundfile13 from '../samples/clap.wav'
import soundfile14 from '../samples/1.wav'
import soundfile15 from '../samples/2.wav'
import soundfile16 from '../samples/3.wav'

class Pad extends Component {

	state={
		currentKey: '',
		last: false
	};

	handleKeyPress(e) {
		this.setState({currentKey: e.keyCode})
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
			>
				{this.handleKeyPress = this.handleKeyPress.bind(this)}
				{this.props.name}
			</div>
		);
	}

	getClassName(){

		if(this.state.currentKey === this.props.dk){
			if(this.props.dk === 90){
				var audio = new Audio(soundfile1)
				audio.play()
			}
			if(this.props.dk === 88){
				var audio = new Audio(soundfile2)
				audio.play()
			}
			if(this.props.dk === 65){
				var audio = new Audio(soundfile3)
				audio.play()
			}
			if(this.props.dk === 83){
				var audio = new Audio(soundfile4)
				audio.play()
			}
			if(this.props.dk === 68){
				var audio = new Audio(soundfile6)
				audio.play()
			}
			if(this.props.dk === 67){
				var audio = new Audio(soundfile5)
				audio.play()
			}
			if(this.props.dk === 49){
				var audio = new Audio(soundfile14)
				audio.play()
			}
			if(this.props.dk === 50){
				var audio = new Audio(soundfile15)
				audio.play()
			}
			if(this.props.dk === 51){
				var audio = new Audio(soundfile16)
				audio.play()
			}
			return "pad playing"
		}
		
		else
			return "pad"
	}

}

export default Pad;