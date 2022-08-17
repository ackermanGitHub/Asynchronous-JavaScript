const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    })
}

const otherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!')
}

console.log('Before');
otherFn();
console.log('After');