import "../styles/cart.css"
import {useReducer, useState} from 'react'

function Cart(){
const [cart, updateCart] = useState(0)
const [isOpen, setIsopen] = useState(false)
const monsteraPrice = 8

return isOpen? (
  <div className = 'lmj-cart' >
    <button 
    className="lmj-cart-toggle-button"
    onClick={() =>setIsopen(false)}>Fermer</button>
  <h2>Panier</h2>
     <div>
          monsteraPrice : {monsteraPrice}$
          <button 
            className="lmj-cart-add-button"
            onClick={()=>{updateCart(cart + 1)}}>Ajouter</button>

     </div>
     <h3>Total: {monsteraPrice * cart}$</h3>
     <button 
        onClick = {() => updateCart(0)}
      >Vider le panier</button>
  </div>) : (
    <div className="lmj-cart-closed">
           <button 
          className="lmj-cart-toggle-button"
          onClick={() => setIsopen(true) }>Ouvrir le panier</button>

    </div>
 
  )
   

}
export default Cart
