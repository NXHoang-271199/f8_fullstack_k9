n = 13;

function isPrime(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    } else {
        for (var i = 2; i < n; i++) { 
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}

function isPalindrome(n) {
    str = n.toString();
    newStr = str.split('').reverse().join('');
    return str === newStr;
}

function findPrimePalindrome(n) { 
    while(true){
        if (isPrime(n) && isPalindrome(n)) {
            return n;
        }
        n++;
    }
    
}

console.log(findPrimePalindrome(n));