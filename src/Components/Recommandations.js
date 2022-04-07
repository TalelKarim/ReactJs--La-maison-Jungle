function Recommandation(){
    const currentMonth = new Date().getMonth;
    console.log(currentMonth);
    const isSpring = (currentMonth > 2 && currentMonth < 5);

    if(!isSpring){
        return (<div>Ce n'est pas le moment de rempotez</div>)
    }
}

export default Recommandation