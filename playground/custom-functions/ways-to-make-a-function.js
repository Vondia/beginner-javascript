// function doctorize(firstName) {
// return `DR. ${firstName}`
// }

// Anon Function
// function (firstName) {
//     return `DR. ${firstName}`
// }

// Function Expression
// const doctorize = function (firstName) {
//         return `DR. ${firstName}`;
// };

// Arrow functions - First lets write a function and make it shorter to write each time
// function inchToCM(inches) {
//         const cm = inches * 2.54;
//         return cm;
// }

// function inchToCM(inches) {
//     return inches * 2.54;
// }

/* eslint-disable */
const inchToCM =  (inches) =>  inches * 2.54;

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) => a + b;

//returning an object

// function makeABaby(first, last) {
//     const baby= {
//         name: `${first} ${last}`,
//         age: 0,
//     }
//     return baby;
// }

// const makeABaby =  (first, last) =>  ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

// (function(age) {
//     console.log('Running the Anon function');
//     return `You are cool ${age}`;
// })(10);

// Methods!!!
const wes = {
    name: 'Wes Bos',
    // Method!
    sayHi: function() {
        console.log(this);
        console.log('Hey Wes')
        return 'Hey Wes';
    },
    // Short hand Method
    yellHi() {
        console.log('HEY WESSSS');
    },
    // Arrow function
    wisperHi: () => {
        console.log('hii wesss im a mouse');
    }
}

// callback Functions
// click callback
const button = document.querySelector('.clickMe');

function handleClick(){
    console.log('Great clicking!!');
}
button.addEventListener('click', handleClick);

// Timer callback
setTimeout(() => {
    console.log('Done! time to drink!');
}, 1000);