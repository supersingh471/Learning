//Call back
/*function sum(num1, num2, fntoCall) {
    let result = num1 + num2;
    fntoCall(result);
}


function displayResult(data) {
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum result is : " + data);
}

const ans = sum(2, 2, displayResult);
*/
//Call back funtion in a parameter
function calculateArithmetic(a, b, arithmeticFuntion) {
    const ans = arithmeticFuntion(a, b);
    return ans;
}
function sum(a, b) {
    return a + b;
}
const value = calculateArithmetic(2, 2, sum);
console.log(value);

