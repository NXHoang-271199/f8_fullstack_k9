var price = null;
var km = 121;
if (km > 0) {
    if (km <= 1) {
        price =  15000;
    } else if (km > 1 && km <= 5) {
        price = 15000 + (km - 1) * 13500;
    } else if (km > 5) {
        price = 15000 + 4*13500 + (km - 5)*11000;
    } 
    
    var total = price;
    
    if (km > 120) {
        total =  total * 0.9;
    }
}

console.log(total);
