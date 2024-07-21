Array.prototype.push2 = function (...args) {
    // Duyệt qua các phần tử được truyền vào hàm
    for (var i = 0; i < args.length; i++) {
        // Thêm từng phần tử vào cuối mảng
        this[this.length] = args[i];
    }
    return this.length;
 };


var arr = [1, 2, 3];

var newArr = arr.push2(4, 5);
console.log(arr);
console.log(newArr);
