var USD = 100;
var JPY = 0;
var exchangeRate = 160;

function convertCurrency(amount, rate){
    return amount*rate
}
JPY = convertCurrency(USD, exchangeRate)
console.log(`${USD} USD is ${JPY} in yen.`)