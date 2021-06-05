import TrafficColor from './TrafficColor'
import React, {useState} from 'react';


export default function TrafficJam(props) {
	const [color, setColor] = useState('merah');
	function gantiwarna(currentColor) {
		if (currentColor === 'merah'){
			setColor('kuning')
		} else if (currentColor === 'kuning'){
			setColor('hijau')
		} else setColor('merah')
	}
	return(
		<>
		<div> 
			<TrafficColor trafficcolor={color}/>
			
			<button onClick={() => gantiwarna(color)}>ganti</button>
		</div>
		</>
		)
}