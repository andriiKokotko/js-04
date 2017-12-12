const number = Number(prompt('Enter a number:'));

function fibonacciRec(num) {
    return num <= 1 ? num : fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

let prePrev = 1;
let prev = 1;

function fibonacciLoup(num) {
    for (let i = 3; i <= num; i++) {
        let result = prev + prePrev;
        prePrev = prev;
        prev = result;
    }
    return prev;
}

let fibonacciArr = [1, 1];

function fibArr(num) {
    for (let i = 2; i <= fibonacciArr.length; i++) {
        fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    }
    return fibonacciArr[num - 1];
}

document.write('Fibonacci number: ' + fibonacciRec(number));
document.write('</br>');
document.write('Fibonacci number: ' + fibonacciLoup(number));
document.write('</br>');
document.write('Fibonacci number: ' + fibArr(number));