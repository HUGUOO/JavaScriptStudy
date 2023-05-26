const calculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    },
}

let result = calculator.add(1,1); 
console.log(result);
result = calculator.minus(4,1) 
console.log(result);
result = calculator.mul(2,54);
console.log(result);
result = calculator.div(4,2);
console.log(result);
