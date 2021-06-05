import React, {useState} from 'react'

export default function ZooItem(props) {
	const [statusfeed, setStatusfeed] = useState(props.zooitem.fed);
	function feedHandle(currentState){
		// if (currentState === 'not yet'){
		// 	setStatusfeed('done')
		// 	} if (currentState === 'not yet'){
		// 	setStatusfeed('done')
		// 	} else {
		// 	setStatusfeed('ignored')
		// 	}
		currentState === 'not yet' ? setStatusfeed('done') : setStatusfeed('ignored') 
	}
	return(
		<>
		<div>
			{statusfeed === 'not yet' ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IWkxNr2iQXsDmE7JsY-Cvr_haSy-6dIgDxTwTU1jLqHdF6O55Or90E41zxL7Gtf9nag&usqp=CAU" /> : <img src="https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2018/07/12/3775723525.jpg" />}
			Zona: {props.zooitem.zone}, Hewan: {props.zooitem.animal}, Makan: {statusfeed}
			<button onClick={() => feedHandle(statusfeed)}>Feed the animal</button>
		</div>
		</>)
}