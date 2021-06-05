import RestaurantItem from './RestaurantItem'
export default function RestaurantList(props){

	return(
		<div>
			{props.mydata.map((item) => {
				return <RestaurantItem mydata={item}/>
			})}
		</div>
	)
}