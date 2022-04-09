import Banner from "./Banner";
import Cart from "./Cart";
import React, { useEffect, useState } from "react";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import '../styles/Layout.css'
import logo from '../assets/logo.png'

function App(){
   
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState([])


   return(<React.Fragment>
          
           <Banner> 
             <img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				     <h1 className='lmj-title'>La maison jungle</h1>
           </Banner>

           <div className='lmj-layout-inner'>
				      <Cart cart={cart} updateCart={updateCart} />
				      <ShoppingList cart={cart} updateCart={updateCart} />
			    </div>

           <Footer />
         </React.Fragment> )
}

export default App