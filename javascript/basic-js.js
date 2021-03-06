/* data that will appear in the Console tab of the developers tools */
console.log("Hello, World!")

/* Declaring a variable the modern way */
let variable;
variable = "Hola!"
console.log(variable)

/* Declaring a Constant */
const constantVariable = "12.03.1978";

/* A window will pop up with the data inside */
/* alert(variable) */

/* Declare numbers */
let a = 2;
let b = 3;
let c = a + b;
console.log(a," + ", b, " = ", c)

/* fractions are full of zeros, and last digit is imprecise */
let n1 = 0.1;
let n2 = 0.2;
let n3 = n1 + n2;
console.log(n1, " + ", n2, " = ", n3)

/* Adding occurrs from left to right, and adding integers and strings ends up un strings */
let n4 = 10;
let n5 = 30;
let n6 = "20";
let n7 = n4 + n5 + n6;
console.log(n7)

/* Operations with numerics strings are always integers unless is adding */
let n8 = "10";
let n9 = "20";
let n10 = n8 * n9;
console.log(n10)

/* Infinity is represented */
let n11 = Infinity;

/* How to know the type of a variable */
let n12 = 1;
let n13 = "1";
console.log(n12, " is ", typeof n12)
console.log(n13, " is ", typeof n13)

/* --- TheOdinProject Assignment --- */
console.log(11 + 13)
console.log(12 + 43 + 76 + 15 + 47 + 82)
console.log((4 + 6 + 9) / 77)

let va = 10;
console.log(va)
9 * va;
console.log(9 * va)
let vb = 7 * va;
console.log(vb)

const max = 57;
let actual = max - 13;
let percentage = actual / max;
/* Writing the name of a variable in the Console tab of the developers tools will return it's value */

/* It is possible to put the value of variables inside a set string made of ``'s by using ${...} */
let name = "Robert";
console.log(`My name is ${name}`);

/* Integer type */
let varI = 1;
console.log(`varI = 1 is ${typeof varI} type`)

/* String type */
let varS = "1";
console.log(`varS = "1" is ${typeof varS} type`)

/* Boolean type, does not use mayus or caps for true and false */
let varB1 = true;
let varB2 = 1 > 2;
console.log(`varB1 = True is ${typeof varB1} type`)
console.log(`varB2 = 1 > 2 is ${typeof varB2} type`)

/* Conditionals */
/* Regular if */
if (condition){

}

/* If with else */
if (condition) {

}else {

}

/* If with else if and else */
if (condition1) {
    
} else if (condition2) {

} else {
    
}