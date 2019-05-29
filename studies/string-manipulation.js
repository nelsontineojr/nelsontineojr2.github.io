/*
String manipulation: Since strings are objects, we can manipulate strings with
methods but also, we can manipulate them with operators. By manipulate, I mean
we can modify a string into our needs. What it does it takes an instruction we
give to the program and creates an effect on the string and gives us back the new,
modified string. We would want to manipulate a string because of many reasons like
getting the length of it, needing to uppercase or replacing a letter within the
string and many more. We can manipulate strings with methods like toUppercase(),
slice(), replace(), etc...
*/

//toUpperCase(): Turns the string to upper case.
var name = 'nelson';
console.log(name.toUpperCase()); // NELSON

//toLowerCase(): Turns the string to lower case.
console.log(name.toLowerCase()); // nelson

//length: Returns the length of the string as a number.
console.log(name.length); // 6

//split(): Turns a string into an array separated by what you put inside ( ).
console.log(name.split('')); // [n, e, l, s, o, n]

//indexOf(): Returns the index number by the first instance of a character.
console.log(name.indexOf('n')); // 0; because the first 'n' is at index 0

//lastIndexOf(): Returns the index number by the last instance of a character.
console.log(name.lastIndexOf('n')); // 5; because the last 'n' is at index 5

//slice(): Returns the characters between two index numbers.
console.log(name.slice(0, 2)) 
// nel; because is printing between index 0 (the first 'n') and index 2 ('l')

//Strings can alse be manipulated with operators like +
var sentence = 'My name is ';
console.log(sentence + name); // My name is nelson