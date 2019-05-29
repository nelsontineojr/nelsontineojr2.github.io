/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat',
animal['name'] = 'garfiel',
animal.noises = [];
// console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'ruff-ruff';
noises.push('woof-woof');
noises.unshift('arf-arf');
noises[noises.length] = 'nnn...nnn...nnn';

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('howl');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      bracket and dot notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *      Bracket notation, array methods.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var lion = {
    species: 'lion',
    name: 'mufasa',
    noises: ['roar', 'growl'] };
    animals.push(lion);
var cat = {
    species: 'cat',
    name: 'garfield',
    noises: ['meow', 'purr'] };
var duck = {
    species: 'duck',
    name: 'jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };
    animals.push(cat, duck);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// Using an array because I need a list of just names. 
// If I needed different properties, I would probably use an object.
function getRandom(animals) {
    var random = animals[Math.floor(Math.random() * animals.length)];
    return friends.push(random['name']); }
getRandom(animals);
animal['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
