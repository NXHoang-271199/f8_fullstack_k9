function numberToWords(number) {
    const ones = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const teens = ['mười', 'mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu', 'mười bảy', 'mười tám', 'mười chín'];
    const tens = ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];
    const hundreds = ['', 'một trăm', 'hai trăm', 'ba trăm', 'bốn trăm', 'năm trăm', 'sáu trăm', 'bảy trăm', 'tám trăm', 'chín trăm'];
    const thousands = ['', 'một nghìn', 'hai nghìn', 'ba nghìn', 'bốn nghìn', 'năm nghìn', 'sáu nghìn', 'bảy nghìn', 'tám nghìn', 'chín nghìn'];

    if (number === 0) {
        return 'Không';
    }

    let result = '';
    let digitThousands = Math.floor(number / 1000);
    let digitHundreds = Math.floor((number % 1000)/100);
    let digitTens = Math.floor((number % 100) / 10);
    let digitOnes = number % 10;

    if (digitThousands > 0) {
        result += thousands[digitThousands] + ' ';
    }

    if (digitHundreds > 0) { 
        result += hundreds[digitHundreds] + ' ';
    }

    if (digitTens > 2) { 
        result += tens[digitTens] + ' ';
        if(digitOnes > 0){
            result += ones[digitOnes];
        }
    } else if (digitTens === 1) {
        result += teens[digitOnes];
    } else if (digitOnes > 0) {
        result += ones[digitOnes];
    }

    return result.trim();
}
console.log(numberToWords(4298));
console.log(numberToWords(7));
console.log(numberToWords(10));
console.log(numberToWords(19));