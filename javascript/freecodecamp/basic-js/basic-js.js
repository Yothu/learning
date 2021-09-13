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

