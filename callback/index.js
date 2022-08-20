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
console.log(calc(3, 4, (a, b) => {return `El primer número es ${a}, el segundo ${b}`}));

setTimeout(() => {
    console.log("Hello JavaScript");
}, 5000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Julio');