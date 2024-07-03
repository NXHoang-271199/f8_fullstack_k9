var arr = [1, 7, 8, 9, -10, 43, 2];

var total = 0;
var count = 0;
function isPrime(num) {

        if (num <= 1 || num % 1 !== 0) {
            return false;
        } else {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
        }
    // }
    return true;
    
}


for (var index of arr) { 
    if (isPrime(index)) { 
        total += index;
        count++;
    }
}


if (count > 0) {
    var average = total / count;
    console.log(`Tổng giá trị các số nguyên tố trong mảng là: ${total}`)
    console.log('Số lượng SNT có trong mảng là: '+ count)
    console.log(`Trung bình số nguyên tố của mảng là: ${average}`);
} else {
    console.log("Mảng không có số nguyên tố")
}
