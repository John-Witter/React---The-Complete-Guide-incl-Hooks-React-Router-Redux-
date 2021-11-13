// Properties are like "variables attached to classes / objects"
// Methods are like "functions attached to classes / objects"

/* ES6 */
// es6 has the constructor method
// constructor () { this.myProperty = 'value' }
// myMethod() { ... }



/* ES7 */
// myProperty = 'value'
// now properties may be assigned directly in your class without a constructor
// a method is now a property which stores a function as a value
// myMethod = () => { ... }
// 'this' is bound to the method


/* ES7 */
class Human {
    gender = 'male'; // get rid of constructor and 'this'

    printGender = () => {
        console.log(this.gender); // still uses 'this'
    }
}

class Person extends Human {
        name = 'Max'; // get rid of constructor, super, 'this'
        gender = 'female'; //   

    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender(); 