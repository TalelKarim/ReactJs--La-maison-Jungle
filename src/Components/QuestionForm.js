import {useReducer, useState} from 'react'

function QuestionForm(){
   
   const [inputValue,setInputValue] = useState('posez votre question !');
   const isError = inputValue.includes('f');
   function checkInput(value){
     if(!value.includes('f')){
     setInputValue(value);
     }

   }


   return( <form >
    <input type='text' name='my_input' defaultValue='Tapez votre texte'
     onChange={(e) => checkInput(e.target.value)}
    />
    <button type='submit'
    onClick={()=>alert(inputValue)}
    >Entrer</button>
</form>)


}

export default QuestionForm