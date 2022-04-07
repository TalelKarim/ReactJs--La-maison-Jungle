import CareScale from "./careScale"
import '../styles/plantItem.css'

function PlantItem({name, cover,id,light,water}){
    
   

   return( 
       <li key={id} className='lmj-plant-item' >
            <img  className='lmj-plant-item-cover' src={cover}/>
            {name}
                    <div>
                  <CareScale careType='water' scaleValue={water} />
                  <CareScale careType='light' scaleValue={light}/>
                    </div>


       </li>)
}

export default PlantItem