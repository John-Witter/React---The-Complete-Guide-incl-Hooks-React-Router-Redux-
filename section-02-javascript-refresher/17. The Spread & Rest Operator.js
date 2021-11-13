// Spread & Rest Operators are both three dots
// ...


// Spread

    // Used to split up array elements or object properties
    // EXAMPLE 
    /*
        const newArray = [...oldArray, 1, 2] // add all elements from oldArray,
                                             // as well as 1, 2 to newArray
        
        const newObject = { ...oldObject, newProp:5 } // add all of the     
                                // properites as key:values pairs in newObject
                                // if oldObject had newProp property, then it
                                // would be overridden here
    */



const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers) // [1, 2, 3, 4, 5, 6]

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson); // { name: 'Max', age: 28 }





// Rest    

    // Used to merge a list of function arguments into an array
    // used in a function argument list
    // EXAMPLE
    /*
        function sortArgs(...args) { // sortArgs recieves a variable number of 
            return args.sort()       // arguments
        }
    */


const filter = (...args) => {
     return args.filter(el => el === 1); // return all args that equal 1
}

console.log(filter(1, 2, 3)); // [1]