import Banner from "./Banner";
import Cart from "./Cart";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App(){

   const [cart, updateCart] = useState([{name:'talel',price :15,amount :3}])
   return(<React.Fragment>
           <Banner/> 
           <Cart cart={cart} updateCart={updateCart}  /> 
           <ShoppingList cart={cart} updateCart={updateCart} /> 
           <Footer />
         </React.Fragment> )
}

export default App