/* ES6 */

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

//-----------------------------------------------------------------------

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

function howManyArgs(...args){                                  // This parameters allows you to pass a dinamic number of arguments
    return "You have passed " + args.length + " arguments."     // in side the function is identifeid as an unpacked array
}

// array => [1,2,3,4,5]     Normal
// ..array => 1,2,3,4,5     Unpacked

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

//----------------------------------------------------------


const texto = `The best aircraft is the ${AIRCRAFTS[2]}`;   // An example of TEMPALTE LIBERALS, must be created using `, not " or '.

const objeto = {                                            // Creating a function inside an object
    name: "Alex",
    funName: function(){    //funName(){}                       // Can be also done this way
        return `Hola! Mi nombre es ${this.name}`;
    }
};

//-----------------------------------------------------------

class className {                                           // Basic way to declare a CLASS
    constructor(construcArg){                                   // a CLASS Constructor
        this.atribut = construcArg;
    }
}

new className ("Pera");                                     // Class declaration

