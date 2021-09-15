/* ES6 */

/* INDEX */

// LET AND CONST VARIABLES
// ARROW FUNCTION
// DINAMIC FUNCTION ARGUMENTS
// DESTRUCTURING
// TEMPLATE LIBERALS
// CLASSES
// EXPORT AND IMPORT
// PROMISES

/* LET AND CONST VARIABLES */

let variable = 12;          // if declared inside IF's, FOR's etc... outside of them they will not exist

const SENTENCE = "ligma, ligma what?, ligmadic";    // const are read only once created

const array = [1, 2, 3];    // you can only modify each element of an const array, not reassign it for other thing;
array[0] = 12;
array = [1];                // WRONG

const MATH_CONSTANTS = {            // just using const on an object doesn't make them unmutable,
    PI: 3.14,                       // using Object.freeze(); does
    ONE: 1
};

Object.freeze(MATH_CONSTANTS);

/* ARROW FUNCTION */

const myFunc = function() {         // Assigning a function to a variable
    const myVar = "value";
    return myVar;
}

const myFunc = () => {              // Assigning a function to a variable, using arrow functions
    const myVar = "value";
    return myVar;
} 


const myFunc = (arguments) => arguments * "value";       // The same as the above, use this only when the body of the function is only a return
const myFunc2 = (num = 3) => num * 2;                    // With default parameters values

/* DINAMIC FUNCTION ARGUMENTS */

function howManyArgs(...args){                                  // This parameters allows you to pass a dinamic number of arguments
    return "You have passed " + args.length + " arguments."     // in side the function is identifeid as an unpacked array
}

// array => [1,2,3,4,5]     Normal
// ..array => 1,2,3,4,5     Unpacked

/* DESTRUCTURING */

const {PI, ONE} = MATH_CONSTANTS;                       // Extract an objects atributes values by DESTRUCTURING
const {PI: piNumber, ONE: numberOne} = MATH_CONSTANTS;  // Assign variables from objects by DESTRUCTURING

//----------------------------------------------------

const AIRCRAFTS = {
    plane: {
        movesUsing: "turbines",
        speed: "high"
    },
    helicopter: {
        movesUsing: "helices",
        speed: "low"
    },
    rocket: {
        movesUsing: "rockets",
        speed: "ultra"
    }
};

const {helicopter: {movesUsing: heliMovesBy, heliSpeed}} = AIRCRAFTS;  // // Assign variables from multiple objects by DESTRUCTURING

//----------------------------------------------------------

let a = 1, b = 2;               // Swaping a and b values by DESTRUCTURING
const [a, b] = [b, a];

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Assigning 3 to 10 to arr using DESTRUCTURING
const [a, b, ...arr] = list;

//-----------------------------------------------------------

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
  
const half = ({max, min}) => (max + min) / 2.0;     // Destructuring an object to use as function atributes

/* TEMPLATE LIBERALS */

const texto = `The best aircraft is the ${AIRCRAFTS[2]}`;   // An example of TEMPALTE LIBERALS, must be created using `, not " or '.

const objeto = {                                            // Creating a function inside an object
    name: "Alex",
    funName: function(){    //funName(){}                       // Can be also done this way
        return `Hola! Mi nombre es ${this.name}`;
    }
};

/* CLASSES */

class className {                                           // Basic way to declare a CLASS
    constructor(construcArg){                                   // a CLASS Constructor
        this.atribut = construcArg;
    }
}

new className ("Pera");                                     // Class declaration

class Thermostat{
    constructor(F){
      this.F = F;
    }
  
    get temperature(){                                      // get data of object
      return 5/9 * (this.F - 32);
    }
  
    set temperature(C){                                     // set data into object
      this.F = C * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/* EXPORT AND IMPORT */

export const uppercaseString = (string) => {                // Export functions using method 1
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase()
}
  
export {lowercaseString};                                   // Export functions using method 2

import {add, substract} from './import_file.js';            // Import especific funtions
import * as mathFunctions from './import_file.js';          // Import all 

export default function add(x, y){                          // Default function to be exported, only one can use default
    return x + y;
}

import add2 from './import_file.js';                        // Import the default function, doesn't use {} and add2 is a just a modifable name to be used in the file


// HTML - <script type="module" src="index.js"></script>            // import JavaScript code into HTML 

/* PROMISES */ 

const myPromise = new Promise((resolve, reject) => {});     // Basic Promise statement

// It has 3 states
//  pending
//  fulfilled
//  rejected

const myPromise2 = new Promise((resolve, reject) => {
    let booleano;

    if (booleano) {
        resolve("Si men, ta nois");
    } else {
        reject("No man, gg");
    }
});

myPromise2.then(result => {             // How to handdle a promise's resolve
    console.log(result);
});

myPromise2.catch(error => {             // How to handdle a promise's reject
    console.log(error);
})
