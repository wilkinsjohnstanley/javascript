var purchase = {
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calculation = this.shoes*this.stateTax;
        console.log('Total price: ', calculation);
    }
}
//functions inside objects are methods

purchase.totalPrice()