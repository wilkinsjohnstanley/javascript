
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);

//ReferenceError: localVar is not defined