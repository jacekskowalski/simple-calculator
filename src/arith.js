
const add = (a, b) => a + b;
const multiplicate = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

function mathOperationDetection(typeOfOperation) {
    let newarr = typeOfOperation.split(new RegExp('[0-9]', 'g'));
    let numbers = typeOfOperation.split(new RegExp('[*+-\]', 'g'));
    if (typeOfOperation.includes("/0"))
        return "Operation forbidden";
    let signs = [];
    for (let j = 0; j < newarr.length; j++) {
         if (newarr[j] === "+" || newarr[j] === "-" || newarr[j] === "*" || newarr[j] === "/") {
            signs.push(newarr[j]);

        }
    }
 
    let total = parseFloat(numbers[0]);
    for (let i = 0; i < newarr.length; i++) {
       
        if (signs[i] === "+") {
            total = add(total, parseFloat(numbers[i + 1]));
        } else if (signs[i] === "-") {
            total = subtract(total, parseFloat(numbers[i + 1]));
        } else if (signs[i] === "*") {
            total = multiplicate(total, parseFloat(numbers[i + 1]));
        } else if (signs[i] === "/") {
            total = divide(total, parseFloat(numbers[i + 1]));
        }
           }
   
    return total;
}


module.exports = { add, multiplicate, subtract, divide, mathOperationDetection };