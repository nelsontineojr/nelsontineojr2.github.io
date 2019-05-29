/*
* 1. -While loops: A while loop is a control flow statement that allows code to
* be executed repeatedly based on a given boolean condition. The while loop be
* thought of as a repeating if statement.

* -For loops: Unlike while loops, a for statement consumes the initialization,
* condition and increment/decrement in one line thereby providing a shorter, easy
* to debug structure of looping.

* -For in loops: Used to iterate through the elements of an array or through the
* properties of an object.

* So in conclusion, loops are used to repeatedly run a block of code until a
* certain condition is met.
*/

// 2. Loop any number of times, forward up to some limit:
for(let i = 0; i < 6; i++) {
    console.log(i);
}

// Backward down to 0:
for(let i = 5; i >= 0; i--) {
    console.log(i);
}

// While loop:
let hour = 6;
// Initiate while loop to run until hour reaches 9:
while(hour < 10) {
    // add one hour for each iteration:
    hour++;
    console.log('Sorry, Im in class');
}

// 3. Loop over an array, forwards:
var numbers = [1, 'two', 3, 'four', 5];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Loop over an array, backwards:
var numbers = [1, 'two', 3, 'four', 5];
for(let i = numbers.length - 1; i >= 0 ; i--) {
    console.log(numbers[i]);
}

// 4. Loop over an object:
var animals = {name: 'Garfield', species: 'cat', age: 2};
for(var key in animals) {
    console.log(animals[key]);
}