function sum(a, b) {
    return a + b;
}
function rest(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calc(a, b, callback) {
    return callback(a, b);
}
console.log(calc(2, 2, mult));