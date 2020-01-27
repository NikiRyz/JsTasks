const priceList=[{"10-20":10},{"21-30":20}, {"31-40":30}];
let number = prompt( 'Введите число от 10 до 40', Math.round(10+Math.random()*30));

let price = priceList.map(function (range) {
    for( key in range){
        let rangeMin='';
        let rangeMax='';
        let dash = 0;
        for (let index in key){
            if(key[index]=='-'){
                dash =1;
            }
            if(parseInt(key[index]) || key[index]=='0'){
                if(dash==0){
                    rangeMin += key[index];
                }
                else{
                    rangeMax += key[index];
                }
            }
        }
        if(rangeMin<=number && rangeMax>=number){
            alert('твое число'+ range[key])
        }
    }
})