var electro = 420;
var price;
if (electro>0) {
    if (electro <= 50) {
        price = electro * 1678;
        console.log('Giá điện đạt bậc 1');
    } else if (electro <= 100) {
        price = 1678 * 50 + (electro - 50) * 1734;
        console.log('Giá điện đạt bậc 2');
    } else if (electro <= 200) {
        price = 1678 * 50 + 1734 * 50 + (electro - 100) * 2014
        console.log('Giá điện đạt bậc 3');
    } else if (electro <= 300) {
        price = 1678 * 50 + 1734 * 50 + 2014 * 100 + (electro - 200) * 2536
        console.log('Giá điện đạt bậc 4');
    } else if (electro <= 400) {
        price = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * 100 + (electro - 300) * 2834
        console.log('Giá điện đạt bậc 5');
    } else if (electro >= 401) {
        price = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * 100 + 2834 * 100 + (electro - 400) * 2927
        console.log('Giá điện đạt bậc 6');
    }
    total = price;
}
 console.log(`Số tiền điện bản phải trả là: ${total}`);