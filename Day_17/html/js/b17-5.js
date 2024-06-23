// Vẽ tam giác số

var n = 6;
var number = 1;
var result = '';
if (n > 0) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) { 
            result += number + '';  
            number++;
        }
        result += "<br>"
    }
    document.write(result);
}