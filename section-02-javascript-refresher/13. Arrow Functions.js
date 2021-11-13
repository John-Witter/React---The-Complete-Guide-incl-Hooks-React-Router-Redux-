// ARROW FUNCTIONS

// syntax to create functions
// different than function declaration syntax

/* EXAMPLE */
// function myFnc() {

// } 

// const myFunc = () => {

// }


// No more issues with the ** this ** keyword!

/* USING ** this ** INSIDE AN ARROW FUNCTION */
// always keeps it's context to the fn

// function printMyName(name) {
//     console.log(name);
// }
// const printMyName = (name) => {
//     console.log(name);
// }
const printMyName = name => { // if there is 1 param, no parentheses needed
    console.log(name);
}


const double = num => num * 2; // one-liners denote implicit returns


printMyName('Mr Butthole');