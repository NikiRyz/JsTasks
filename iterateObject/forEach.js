const priceList=[{"10-20":10},{"21-30":20}, {"31-40":30}];
let number = prompt( 'Введите число от 10 до 40', Math.round(10+Math.random()*30));

let price = priceList.forEach(function (range) {
    for( key in range){
        let regMin=/\d*(?=-)/.exec(key);
        let regMax= /-(\d*)$/.exec(key);
        let rangeMin= regMin[0];
        let rangeMax= regMax[1];
        if(rangeMin<=number && rangeMax>=number){
            alert('твое число'+ range[key])
        }
    }
})