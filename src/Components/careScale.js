function careScale({scaleValue, careType}){
   const range = [1,2,3];
   const scaleType = careType ==='light'? '🌞' : '💧'  
   
   function indicateur(careType,scaleValue){
      let type ="";
      let quantité ="";
      switch(scaleValue){
        case 1:
            quantité ="peu";
            break;
        
        case 2:
           quantité ="modérament";
           break;
         
         case 3:
            quantité ="trop";
            break;  
         
            default:
               quantité="quelque";
      }
       
      switch(careType){
       case 'water':
           type ="eau";
           break;
       
       case  'light':
          type ="lumière"
          break;
       
       default:
          type="rien";   

      }
    
      return(alert(`Cette plante requiert ${quantité} de ${type}`))
   }
   return(
   <div onClick={() => indicateur(careType, scaleValue)}>
   { range.map((rangeElem) => scaleValue >= rangeElem ? (<span key ={rangeElem.toString()}>{scaleType}</span>):null)}
   </div>

   )


}

export default careScale