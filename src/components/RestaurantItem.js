import React, {useState} from 'react';

export default function RestaurantItem(props){
	const [statusbuka, setStatusbuka] = useState('tutup');

	function bukaHandle(currentState){
		if (currentState === 'tutup'){
			setStatusbuka('buka')
		} else {
			setStatusbuka('tutup')
		}
	}
	
	return(
			<>
				<div>Nama: {props.mydata.nama}. Status:{statusbuka} <button onClick={() => bukaHandle(statusbuka)}>Buka</button></div>
			</>
		)
}