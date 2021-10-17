// Classes are blueprints for objects

// Classes are created w/ the 'class' keyword
// 
// Classes can have both properties and methods
    // methods are functions attached to classes, where properties are 
        // variables attached to the class

/* EXAMPLE */
// class Person {
//     name = 'Max'                //property
//     call = () => { /* ... */ }  // method
// }

// INSTANTIATE A CLASS WITH THE 'new' KEYWORD

// const myPerson = new Person()  // instantiate a class
// myPerson.call()
// console.log(myPerson.name)


// CLASSES SUPPORT INHERITANCE WITH THE 'extends' KEYWORD
    // when another class takes properties and methods from a super class
    // like prototypes
// class Person extends Parent // inheritance



/* EXAMPLE */

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() { // default method that is executed upon instantiation
        super(); 
        // super:
        // executes the parent constructor, which initializes the parent class
        // this is need to access variable w/in the parent

        this.name = 'Max'; // access instance variables with the 'this' keyword
        this.gender = 'female'; // override the parent
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender(); 