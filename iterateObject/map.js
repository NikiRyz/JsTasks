priceList.map(function (range) {
    for( key in range){
        let rangeMin='';
        let rangeMax='';
        let dash = 0;
        for (let index in key){
            if(key[index]=='-'){
                dash =1;
            }
            if(parseInt(key[index]) || key[index]=='0'){
                if(!dash){
                    rangeMin += key[index];
                }
                else{
                    rangeMax += key[index];
                }
            }
        }
        if(rangeMin<=number && rangeMax>=number){
            alert('твое число, найденное с помощью map: '+ range[key])
        }
    }
})