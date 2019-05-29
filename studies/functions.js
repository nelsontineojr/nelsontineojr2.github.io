/*
Functions are just reusable blocks of code that accept inputs, process those inputs,
and returns a new data value. A task we want our program to perform for us.

There are four parts to a function declaration:
-Name
-Parameters/arguments
-Function body (where the code runs)
-Return statement

Example:

function name(parameter) {
    function body
    return statement
}

Parameters/arguments: Parameters are just placeholders for arguments that are later
"passed" or given to the function at call time.

Return statement: The return statement will give value to a function call. They can
only be used in a function body.

Function call: We call a function by its name, followed by parenthesis ( )
Calling a function runs the code in the function body. Calling functions and 
defining a function are two different things.

IMPORTANT
-console.log and return are NOT the same thing.
-return statements inside a function body returns a value or data.
-console.log does not return, giving you undefined.
*/

// Examples:

// building the function and passing two parameters, num1 and num2
function add(num1, num2) {
    console.log(num1 + num2); // prints the result of adding num1 and num2
}

add(2, 5); // calling the function with 2 and 5 as arguments


/*
Closures: Where an inner (second) function has access to the outer 
(main) function's variables.
*/
function main() {
    var num1 = 2;
function second() {
    var num2 = 5;
    console.log(num1 + num2);
}
    return second;
}

//Scope: The context on which values and expressions are available to reference or access.
function scope() {
    let cannotUse = 'Im inside a function, duh!';
}

/*
console.log(cannotUse); I would get an error because I dont have access 
to the variable outside the function.
*/