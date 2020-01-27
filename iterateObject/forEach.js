priceList.forEach(function (range) {
    for( key in range){
        let regMin=/\d*(?=-)/.exec(key);
        let regMax= /-(\d*)$/.exec(key);
        let rangeMin= regMin[0];
        let rangeMax= regMax[1];
        if(rangeMin<=number && rangeMax>=number){
            alert('твое числонайденное с помощью forEach: '+ range[key])
        }
    }
})