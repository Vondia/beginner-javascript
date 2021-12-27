// Function Definition
function calculateBill() {
        // This is the function body
        console.log('Running Calculate Bill!!!');
        const total = 100 * 1.13;
        return total;
}

// Function call. or **run**
const myTotal = calculateBill();

console.log(`Your total is $${Math.ceil(myTotal)}`);
