var arrS = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
var newArray = [];
var isSame = true
for (var arr of arrS) { 
    isSame = false;
    for (var newArr of newArray) { 
        if (arr === newArr) { 
            isSame = true;
            break; 
        }
    }
    if (!isSame) {
        newArray[newArray.length] = arr;
    }
}

console.log(newArray);