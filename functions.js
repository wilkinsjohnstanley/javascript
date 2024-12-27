var shoes = 100;
var stateTax = 1.1;
function totalPrice(price, tax){
    return price*tax
}

var toPay = totalPrice(shoes, stateTax);
console.log("Please pay this many: ", toPay)