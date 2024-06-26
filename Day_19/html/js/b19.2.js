function reverseNumber(n) {
    
    let numStr = n.toString();
    
    let reverseStr = numStr.split('').reverse().join('');

    let reverseNum = Number(reverseStr);

    return reverseNum;
}
console.log(reverseNumber(12345))