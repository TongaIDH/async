// Callbacks
function addition(num1, num2) {
    return num1 + num2
}

function substraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calculator(16, 4, addition))
console.log(calculator(16, 4, substraction))
console.log(calculator(16, 4, multiplication))
console.log(calculator(16, 4, division))

//setTimeout
setTimeout(() => {
    console.log("Log Post Timeout")
}, 5000)

function logInfo(time) {
    console.log(`El log se imprimio ${time} segundos luego del llamado al setTimeout`)
}

setTimeout(logInfo, 1000, 5);