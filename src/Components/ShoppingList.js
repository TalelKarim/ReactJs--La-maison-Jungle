import { plantList } from '../datas/plantList'
import '../styles/shoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({cart,updateCart}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price){
       const currentPlantSaved = cart.find((plant) => plant.name === name)
        if(currentPlantSaved){
            const cartFilteredCurrentPlant = cart.filter((plant)=> plant.name !== name)
            updateCart([...cartFilteredCurrentPlant,
			 {name,price, amount: currentPlantSaved.amount + 1}])
		}
		else{
			updateCart([...cart,{name, price, amount:1}])
		}
	}

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<div key={plant.id}>
						<PlantItem
                          id = {plant.id} 
                          name={plant.name} 
                         cover= {plant.cover}
                         water={plant.water}
                         light={plant.light}
                         
                    />
					<button onClick={() => addToCart(plant.name, plant.price)}> Ajouter</button>
					</div>
                    
 				))} 
			</ul>
		</div>
	)

}

export default ShoppingList