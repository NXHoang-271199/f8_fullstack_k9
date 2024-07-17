function sum(...number) {
    var isNum = number.every(function (paraNum) {
        return typeof paraNum === 'number';
    }); 

    if (!isNum) { 
        return 'Error: All inputs must be numbers';
    }

    var total = number.reduce(function (prev, current) {
        return prev += current;
    }, 0)
    
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1, '2', 3));
console.log(sum(1, 2, 3, 4, 5));