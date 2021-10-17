// Reference and Primitive Types


// Primitive Types
// numbers
// strings
// booleans

const number = 1; // primitive
const num2 = number; // creates a real copy of number

console.log(num2); // 1



// Reference Types
// objects
// arrays

const person = { name: 'Max'};

const secondPerson = person; // secondPerson equals the same variable in memory

const thirdPerson = { // copy person
    ...person // this is not referencing person, it simply spread out
              // all properties of person
}

console.log(secondPerson); // { name: 'Max' }
console.log(thirdPerson); // { name: 'Max' }

person.name = 'Manu';

console.log(secondPerson) // { name: 'Manu' }
console.log(thirdPerson) // { name: 'Max' }

