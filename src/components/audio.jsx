import {Howl, Howler} from 'howler';

class Audio extends Component{

	render(){
		return(
			<div>
			  <div id="waveform"></div>

			  <div class="sprites">
			    <div id="sprite0" class="sprite">
			      <div class="sprite-label">one</div>
			    </div>
			    <div id="sprite1" class="sprite">
			      <div class="sprite-label">two</div>
			    </div>
			    <div id="sprite2" class="sprite">
			      <div class="sprite-label">three</div>
			    </div>
			    <div id="sprite3" class="sprite">
			      <div class="sprite-label">four</div>
			    </div>
			    <div id="sprite4" class="sprite">
			      <div class="sprite-label">five</div>
			    </div>
			    <div id="sprite5" class="sprite">
			      <div class="sprite-label">beat</div>
			    </div>
			  </div>
			</div>
		);
	}

}

export default Audio;