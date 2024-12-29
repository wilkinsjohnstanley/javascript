var purchase = {
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calculation = purchase.shoes*purchase.stateTax;
        console.log('Total price: ', calculation);
    }
}
//functions inside objects are methods

console.log(purchase.totalPrice()); // Call the method
