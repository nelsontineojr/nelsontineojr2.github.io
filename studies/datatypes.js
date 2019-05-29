/*
* 1. Numbers: Any numerical value. Positive, negative, or with decimal points.
* Like regular numbers, we can add, subtract, divide and multiple them.

* 2. Strings: A collection of characters surrounded by quotes. We can access individual
* characters in a string with a bracked notation. Can be combined using the + operator.

* 3. Booleans: A true or false value. You can almost think of them similar to on/off
* switches. Typically used in condition statements. Can be created with boolean
* expressions using comparison operators.

* 4. Array: A complex data type that is used to store multiple data types. Every value
* in the list has an index - the number position of the value in the list. Can contain
* references to any data type, this includes: strings, numbers, booleans, other arrays
* objects and even functions.

* 5. Objects: A complex data type that is used to store data. Usually a collection of
* data relating to a single object/identity stored in a curly braces { }. Similar to
* arrays, but instead of using indices, values are stored at keys. Can contain
* references as same as arrays.

* 6. Functions: Reusable blocks of code that accept inputs, process those inputs and
* returns a new data value. There are four parts to a function declaration: name,
* parameters/arguments, function body { } and the return statement.

* 7. Undefined: This property indicated that a variable has not been assigned a value
* yet or not declared at all.

* 8. Null: This is not an identifier for a property of the global object, like undefined.
* Instead, null expresses a lack of identification, indicating that a variable points
* to no object.

* 9. NaN: This represents "Not-a-Number" value. This property indicated that a value
* is not a legal number.

* 10. Infinity and -Infinity: Infinity is a numeric value that represents positive
* infinity. -Infinity is a numeric value that represents negative infinity.

* 11. Primitive/Complex: The fundamental difference between them is that primitives
* are immutable and non-primitives are mutable. Another difference is that primitives
* are copied value and complex are copied by reference. 

* 12. Reference/Value: The basic difference is that primitive variables store the
* actual values, whereas reference variables store the addresses of the objects they
* refer to. For example: if you pass an object to a function, the "value" is really
* a reference to that object, so the function can modify that object's properties.
*/

//Examples:

//Number:
var number = 5;

//String:
var string = 'I am a string!';

//Boolean:
var boolean = false;

//Array:
var array = ['I', 'am', 'an', 'array'];

//Object:
var object = {name: 'Nelson', gender: 'male', age: 26};

//Function:
function add(num1, num2) {
    console.log(num1 + num2);
}

//Undefined:
var notDefined;
console.log(notDefined);

//Null:
var nothing = null;
console.log(nothing);

//NaN:
function notNumber(input) {
    console.log(input * 5);
}

//Primitive:
var favColor = 'black'

//Complex:
var animals = {name: 'Garfield', species: 'cat', age: 2};

//Copy by value:
var favColor = 'black'
var car = favColor;

//Copy by reference:
var animals = {name: 'Garfield', species: 'cat', age: 2};
var name = animals.name;