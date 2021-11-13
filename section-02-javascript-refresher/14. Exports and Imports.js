// Named Exports vs Default Exports 

// modules allow you to split your code across multiple files

// person stores a js object
// it is exported as default
    // can be named anything while importing


// Utility.js exports 2 named exports, 
    //niether of which is a default export
// this means you have to destructure what you want during import
// to name anything use 'as' keyword    
// named exports can be bundled / batch imported by using the '*' and giving 
    // the bundle a name

import person from "./14. person";
import prf from './14. person';

import { baseData } from "./14. Utility"; // {} b/c baseData isn't default
import { clean } from "./14. Utility";
import { clean as Named} from "./14. Utility";
import * as bundled from "./14. Utility";