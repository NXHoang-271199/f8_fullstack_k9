a = 3;
b = 2;
c = 1;
temp = null;
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
console.log(a, b, c);