/*
* 1. If statements: Using the keyword if to check for a specific condition.
* Runs the code wrapped in curly braces { } only if a condition is true.
* The condition is any boolean value (true / false) or any boolean expression.
* The condition being checked must be inside parentheses ( ).

* 2. Else-if statements: Using the keyword else if to check for a specific condition.
* Just like if statements, it runs the code wrapped in curly braces { } only if
* a condition is true. But only if the initial if statement is false.

* 3. Else statements: Using the keyword else that runs a block of code if all other
* donations are false. So if all other conditions are false, that means this is the
* default. Since else statements are defaults, there is NO condition to check for.
* The only thing that follows the keyword else is a code block { }.

* 4. Switch: The switch expression is evaluated once. The value of the expression
* is compared with the values of each case. If there is a match, the associated
* block of code is executed.

* Control flow: is the order that the instructions, statements or functions are
* executed. For example, with an if statement, whats inside the parenthesis will run
* first and if that comes back as true, the code inside the curly braces will run.

* In the next example, if your age is at least 21 and not older than 65, you're allowed
* to drink. If you're 65 or older, you get a free drink, else (meaning you're under 21)
* you're NOT allowed to drink.
*/

var age = 18;
if(age >= 21 && age < 65) { // if this condition is met,
    console.log('You are allowed to drink!') // this will print to the console.
} else if(age >= 65) {
    //if the first condition is not met, the function will test this condition,
    console.log('You get a free drink!') // and print this if it comes back true.
} else {
    //if none of the first two conditions are met,
    console.log('Go home!') //this will print to the console.
}

//same as the above example, swtich works similar as if, else if and else statements.
var age = 18;
switch(age) {
    case age >= 21 && age < 65: //if this condition is met,
        console.log('You are allowed to drink!'); // this will print to the console.
        break;
    case age >= 65: 
    // if the first condition is not met, the function will test this condition,
      console.log('You get a free drink!'); // and print this to the console.
      break;
    default: //if none of the first two conditions are met,
        console.log('Go home!'); // this will print to the console.
}