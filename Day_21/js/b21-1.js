var arr = [5, 6, 1, 3, 9]
max = 0;
min = arr[0];
for (var index of arr) { 
    if (max < index) {
        max = index;
    }
    else if (min > index) { 
        min = index;
    }
}

console.log(`Số Lớn nhất trong mảng là: ${max}`);
console.log(`Số Nhỏ nhất trong mảng là: ${min}`);
