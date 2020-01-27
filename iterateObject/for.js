const priceList=[{"10-20":10},{"21-30":20}, {"31-40":30}];
let number = prompt( 'Введите число от 10 до 40', Math.round(10+Math.random()*30));

for(let i =0; i< priceList.length; i++){
        let key = Object.keys(priceList[i])[0];
        let range=key.split('-');
        if(range[0]<=number && range[1]>=number){
            alert('твое число, найденное с помощью for: '+ priceList[i][key])
        }
}