Array.prototype.filter2 = function (callback) {
    var result = [];
    
    for (var i = 0; i < this.length; i++) { 
        if (callback(this[i], i, this)) {
            result[result.length] = this[i];
        }
    }
    return result;
}

var array = [1, 2, 3, 4, 5, 6];
var newArr = array.filter2((value) => {
    return value % 2 === 0;
})

console.log(newArr);