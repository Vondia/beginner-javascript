// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
        // This is the function body
        console.log('Running Calculate Bill!!!!');
        const total = billAmount + billAmount * taxRate + billAmount * tipRate;
        return total;
}

// Function call. or **run**
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Pim');
// console.log(greeting);

function doctorize(name) {
        return `Dr. ${name}`;
}

function yell(name) {
        return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
