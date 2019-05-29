/*
* Variables:

* 0. To hold things in memory in our a program, we can use variables. Variables
* are named identifiers that can point to values of particular type, like number, 
* string, boolean, array, object or another data type. Variables are called so 
* because once created, we can CHANGE the value and the type of the value to which
* they point to.

* 1. To create a variable we use var, let or const followed by a name (id or alias)
* for our variable. If using var or let, the variable can be declared without a 
* value at first. If using const, we have to declare it AND assign a value in the
* same line.

* 2. There are two phases of using variables: declaration and initialization.

* 3. var vs let vs const: var is scoped to the function it's defined in. let is
* scoped to the block it's defined in. const is like let, except you not reassign
* it and you have to assign a value right away.

* 4. Hoisting is a JS mechanism where variables and function declarations are moved
* to the top of their scope before code execution.
*/

// 1. Declaration:
var name;
console.log(name);
// prints undefined because we haven't assigned a value to name yet.

// 2. Initialization or assignment:
name = 'nelson';
console.log(name);
// prints 'nelson' because we assigned the value 'nelson' to the variable name.

// 3. Re-assignment:
name = 'antonio';
console.log(name);
// prints 'antonio' because we re-assigned the value 'antonio' to the variable name.
let favColor = 'blue';
favColor = 'black';
console.log(favColor); 
// prints 'black' because with let we can re-assign a value like we did with var.

// With const we have to declare AND assign a value to the variable on the same line
// const city; // error because no value is assigned.
// console.log(city); // prints => an error because no value was assigned.
// city = 'New York';
// console.log(city);
// prints => returns an error because no value was assigned when the variable was declared.
const state = 'Louisiana';
console.log(state); // prints => Louisiana


/*
Hoisting:
this function would print: 'Hi nelson, today is undefined'; because I tried to
access a variable with no value yet.
*/
function welcomeMessage (name) {
    let day;
    console.log('Hi ' + name + ',' + 'today is ' + day);
    day = 'Friday';
}

/*
this function would return an error: 'day is not defined' because I tried to
access a variable that wasn't declared yet.
*/
function welcomeMessage(name) {
    console.log('Hi ' + name + ',' + 'today is ' + day);
    let day = 'Friday';
}




