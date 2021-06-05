import React, {useState} from 'react'
import ZooItem from './ZooItem'

export default function ZooList(props) {

	return(
		<>
			<div>
				{props.zoodata.map((item) =>{
					return(<ZooItem zooitem={item}/>)
				})}
			</div>
		</>
		)
}