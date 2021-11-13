// Destructuring
    // Easily extract array elements or object properties   
    // and store them as variables  

    // pull single elements / properties and store them as variables


// Array Destructuring
 [a, b] = ['Hello', 'Max'];
 console.log(a); // Hello
 console.log(b); // Max


 const numbers = [1, 2, 3];
 [num1, , num3] = numbers;
 console.log(num1, num3)

 // Object Destructuring

 const { name } = { name: 'Max', age: 28 }
 console.log(name) // Max
 console.log(age)  // undefined