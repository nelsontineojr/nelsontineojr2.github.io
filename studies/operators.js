/*
* 1. Assignment: Assigns a value to its left operand based on the value of its
* right operand. The simple assignment operator is equal ( = )
* Example: var x = y assigns the value of y to x.

* 2. Arithmetic: Takes numerical values as their operands and returns a single
* numerical value. The standard arithmetic operators are addition +, subtraction -,
* multiplication * and division /.

* 3. Comparision: A comparison operator compares its operands and returns a logical
* value based on whether the comparison is true. The operands can be numerical,
* string, logical or object values. Example: 10 === 7 returns false.

* 4. Logical: These are tipically used with boolean (logical) values; when used,
* they return a boolean value.
* Example: if(num > 10 && num < 20) the && operand is used to state that the number 
* needs to be greather than 10 AND less than 20 to return as true.

* 5. Unary: This is an operation with only one operand. This operand comes either
* before or after the operator. Example: delete objectName.property; The delete
* operand deletes an object's property.

* 6. Conditional (ternary): This operator is the only JS operator that takes three
* operands. The operator can have one of two values based on a condition.
* Example: condition ? value1 : value2. If the condition is true, the operator has
* the value of value1. Otherwise it has the value of value2. You can use the conditional
* operator anywhere you would use a standard operator.

*In conclusion an operator simply performs some operation on one or more operands
* and produces a result.
*/

// Examples:
var num1 = 2; // Assignment operator ( = )

console.log(num1 + 8); // Arithmetic operator ( + )

console.log(num1 < 10); // Comparison operator ( < )

console.log(num1 > 10 && num1 < 20); // Logical operator ( && )

function time(hour) {
    if(hour < 7) {
        hour++; // Unary operator ( ++ )
    }
}

let age = 26;
age >=21 ? 'You can drink!' : 'Go home!'; // Conditional operator ( ? )