import CareScale from "./careScale"
import '../styles/plantItem.css'

function PlantItem({name, cover,id,light,water,price}){
    
   

   return( 
       <li key={id} className='lmj-plant-item' >
            			<span className='lmj-plant-item-price'>{price}€</span>
            <img  className='lmj-plant-item-cover' src={cover}/>
            {name}
                    <div>
                  <CareScale careType='water' scaleValue={water} />
                  <CareScale careType='light' scaleValue={light}/>
                    </div>


       </li>)
}

export default PlantItem