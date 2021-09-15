/* INDEX */

// BASIC VARAIBLE ASSIGNMENT
// BASIC MATH
// BASIC STRINGS
// BASIC ARRAYS
// BASIC FUNCTIONS
// BASIC CONDITIONS
// BASIC OBJECTS
// BASIC LOOPS





// This is a one line comment

/* This is 
a multi-line
comment */

/* BASIC VARIABLE ASSIGNMENT */
var myName;                 // Create variables the old way
let ourName;                // The New way

var a;                      // Asign a variable a value after creation
a = 7;

var b;                      // Asign a variable value to other variables
b = a;

var c = 12;                 // Create a variable with a value already in it

var d;                      // Variables without a value are UNDEFINED // d id Undefined

var someVariable;           // Variable names must follow a defined standard
var anotherVariableName;

/* BASIC MATH */
var aa = 10 + 34;   // Addition
var ab = 34 - 12;   // Substraction
var ac = 12 * 2;    // Multiplication
var ad = 30 / 3;    // Division

aa++;               // Self addition by 1
ab--;               // Self substraction by 1

aa += 5;            // Self addition
ab -= 6;            // Self substraction
ac *= 2;            // Self multiplication
ad /= 2;            // Self division

var ae = 3.4;       // Decimals

var remainder = 11 % 3; // Remainder of a division

/* BASIC STRINGS */
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";    // escaping literal quotes in string
var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';    // Single quoted string

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

/* 

\'	single quote                cat:
\"	double quote                        FirstLine
\\	backslash                               \SecondLine
\n	newline                             ThirdLine
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/

var myStr4 = "This is the start." + " " + "This is the end.";   // Concatenating strings

var myStr5 = "This is the first sentence. ";                    // Self Concatenating
myStr5 += "This is the second sentence.";

var myName2 = "David";
var myStr6 = "My name is " + myName + " and I am well!";        // Construction strings with variables

var someAdjective = "izi";                                      // Appending variables to strings
var myStr7 = "Learning to code is ";

myStr7 += someAdjective;

myStr.length                // Returns integer with a string's length

myStr[0]                    // Returns a character of a specific position. 0 to length-1
myStr[myStr.length - 1]     // Returns the last character of a string

//myStr[0] = "D";           // A string is immutable, so you cant change only a part of it, it has to be the hole of it
myStr = "Hello World."

/* BASIC ARRAYS */

var array1 = ["string", 43];                    // Array with a string and a number
var array2 = [["string1", 1],["string2", 2]]    // Nested arrays

var array3 = array1[0];                         // Access array data with indexes
array1[1] = 12;                                 // Modify data of array with indexes
array2[1][1];                                   // Access multi-dimentinal data with indexes

array1.push(["dog",3]);                         // Inserts an element into the last position of the array
array1.unshift(["Paul", 35]);                   // Inserts an element into the first position of the array
bruh = array1.pop();                            // Removes the last element from the array
bruh = array1.shift();                          // Removes the first element from the array

/* BASIC FUNCTIONS */

function functionName () {                      // Basic Parameterless Function Statement
    console.log("Hello World!");
}

functionName();                                 // Basic Parameterless Function Calling



function functionWithArgs (param1, param2) {    
    console.log(param1 + param2);
}

functionWithArgs(1, 2);




var global = 1;
function f1() {
    global = 5;                                     // Declaring a variable without var, let or const makes the variable a global one
}
// It changes the value of the outer one

var clothes = "pants";
function f2(){
    var clothes = "globes";                         // Declaring a variable like this will only change the inner one
}



function returningFunction(argument){               // Basic returning function Statement
    return argument * 2;
}

value = returningFunction(2);                       // Basic returning function Calling



function returnless() {
    global += 1;
}
returnless();   //undefined                         // Functions without return, return a undefined value


/* BASIC CONDITIONS */

if (someVariable == true) {                                    // Basic IF statement
    
}

// =    asignment
// ==   equal comparision
// !=   inequal comparison
// ===  strict equal comparison
// !==  strict inequal comparison

// >    over
// <    under
// >=   over or equal
// <=   under or equal

// &&   and
// ||   or

if (condition) {                                    // Basic IF-ELSE statement
    
} else {
    
}

if (condition) {                                    // Basic IF-ELSE IF-ELSE statement
    
} else if (condition) {
    
} else {
    
}

switch (someVariable){                              // Basic switch statement
    case 1:
    case 2:
    case 3:
        console.log("someVariable is integer 1, 2 or 3");
        break;
    case "a":
        console.log("someVariable is string \"a\"");
        break;
    case 45:
        console.log("someVariable is integer 45");
        break;
    case true:
        console.log("someVariable is boolean true");
        break;
    default:
        console.log("Hello World");
        break;
}

/* BASIC OBJECT */

var object = {                                      // Basic Object Statement
    name: "Roberto",
    age: 23,
    lives: true,
    dicks:  ["Big", "Bigger"],
    "guata": "Super Gorda"
};

objectName = object.name;                           // Access an object atribute, used when atribute name is known

panza = object["guata"];                            // Access an object atribute, used when unknown

a = "guata";
panza = object[a];


object.age = 12;                                    // Set an objects atribute value
object["age"] = 12;

object.lazy = "full";                               // Add an atribute to an object
object["lazy"] = "full";

delete object.lazy;                                 // Delete an atribute of an object
delete object["lazy"];

//----------------------------------------------------------

function phoneticLookup(val) {
    var result = "";

    var lookup = {
      "alpha":    "Adams",
      "bravo":    "Boston",
      "charlie":  "Chicago",
      "delta":    "Denver",
      "echo":     "Easy",
      "foxtrot":  "Frank"
    };
  
    result = lookup[val];
    return result;
  }

//------------------------------------------------------------

object.hasOwnProperty(atributeName);                // Verifies if an object has a determined atribute

var myMusic = [                                     // An array with 2 objects inside
    {
        "artist":       "Billy Joel",
        "title":        "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, 
    {
        "artist":       "Rhapsody",
        "title":        "Dawn of Victory",
        "release_year": 2000,
        "formats":  [
            "CD",
            "LP"
        ]
    }
];

//----------------------------------------------------------------------------

var myStorage = {                                   // Nested objects
    "car": {
        "inside": {
            "glove box": "maps",                        // This atribute to extract
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//--------------------------------------------------------------------------------

var myPlants = [                                    // Nested Arrays and objects
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",                                     // This element to extract
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

//----------------------------------------------------------------------------

// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};  

function updateRecords(records, id, prop, value) {
    if (value != ""){
        if(prop != "tracks"){
            records[id][prop] = value;
        } else{
            if(records[id].hasOwnProperty("tracks")){
                records[id][prop].push(value);
            } else{
                records[id][prop] = [value];
            }
        }
    } else{
        delete records[id][prop];
    }
    return records;
}
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/* BASIC LOOPS */

var i = 5;
while (i >= 0) {                                            // Basic WHILE statement
    array1.push(i);
    i--;
}

for(var i = 1; i <= 5; i++){                                // Basic FOR statement
    array2.push(i);
}

do {                                                        // Basic DO-WHILE statement
    array3.push(i);
} while (i < 0);

/* COMMON METHODS AND FUNCTIONS */

let num = Math.random();                                    // Random number [0,1)

Math.floor();                                               

parseInt("23");                                             // Transforms a string to a integer
parseInt("1001101",2);                                      // Transforms a string to a integer, with different number base

function f11 (){
    return a >= b ? "a is greater than b" : "a is not greater than b";  // Simple way to do a IF-ELSE stetement
}

function f12(){                                                         // IF-ELSEIF-ELSE
    return (num > 0) ? "positive"
    :   (num < 0) ? "negative"
    :   "zero";
}

