
function fibonaci(n, current = 0, next = 1, ...args) {
    if (n <= 1) {
        return args;
    } 
    args.push(current);

    return fibonaci(n-1, next, current + next, ...args);
}

console.log(fibonaci(10))
