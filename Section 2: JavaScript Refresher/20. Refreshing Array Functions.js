// sort => sort an array
// map  => return an array w/a function executed on every element
// filter => return an array where each element passes some conditional
// etc.

/* 
    turn numbers into an array where each number is doubled
*/

const numbers = [1, 2, 3]

const doubleNumArray = numbers.map((num) => {
    return num * 2
});

console.log(numbers)
console.log(doubleNumArray)