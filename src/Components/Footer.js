import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    
	function verifier(value){
       if(!value.includes('@')){
			 alert('veuillez saisir une adresse mail valide');
		 }
	    else{alert(value)}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form>
			  <input  type="text" placeholder="saisir votre mail" className ="input-lj"
		     	onChange={(e) =>setInputValue(e.target.value)}
			  />
			  <button type='submit' className='button-ij' 
			  onClick={(e) =>{
				e.preventDefault();  
				verifier(inputValue)}}
			  > Submit</button>
			</form>
			
		</footer>
	)
}

export default Footer