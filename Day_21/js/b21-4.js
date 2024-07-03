var arr = [9,1,2,3,45,56,7,8];
var element = 4;
for (var i = 0; i < arr.length-1; i++){
    for (var j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[i]) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);

var insertIndex = arr.length;

for (var index in arr) {
    if (element < arr[index]) {
        insertIndex = index;
        break;
    }
    
}

for (var i = arr.length; i > insertIndex; i--) { 
    arr[i] = arr[i - 1];
}

arr[insertIndex] = element
console.log(arr);