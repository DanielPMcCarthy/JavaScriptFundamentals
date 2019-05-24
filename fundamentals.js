/*                        JAVASCRIPT LANGUAGE FUNDAMENTALS

                          // LECTURE #1: USING THE CONSOLE


// ALERTS [alerts were used to 'test' code prior to Dev Tools]
alert("Hello!");

// THE CONSOLE [Chrome Dev Tools]
console.log("Hello World");
console.log(123);
console.log(true);

console.table({a:1, b:2}); // Show An Object And It's Values In A Table
console.error('This Is Some Error'); // Gives You An Error Message
console.clear(); // Clears The Console
console.warn('This Is A Warning'); // Same As Alert Except Warn Is 'Yellow'

console.time('Begin'); // Starts The Timer (Any Word Can Be Used In Paranthesis)
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
console.timeEnd('End'); // Gives You Time It Takes To Load The Content Below It

*/

                          // LECTURE #2: VARIABLES
/* 
// LET

let name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith';
console.log(name); // Steve Smith

// ...can also declare variables with let as 'undefined' and later give a value

let name;
name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith';
console.log(name); // Steve Smith

// CONST

// Important! 'const'- must assign a value upon delclaration and CANNOT reassign it

const name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith';
console.log(name); // Error Message 'Assignment To Constant Variable'


// However!  You can change the properties within an object (and other instances)

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sarah';
person.age = 32;

console.log(person); // { name: "Sarah", age: 32 }

// Another example with an Array

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

*/


                            // LECTURE #3: DATA TYPES IN JS

/* 
  
Primitive Data Types
  - Stored directly in the location the variable accesses
  - Stored on the stack
      
      Types:
      * Strings
      * Numbers
      * Boolean - true or false
      * Null - an intentional empty value
      * Undefined - variable that has not been assigned a value
      * Symbols - 

  Reference Data Types
  - Accessed by reference
  - Objects that are stored on the heap
  - A pointer to a location in memory

      Types:  
      * Arrays
      * Object Literals
      * Functons
      * Dates
      * Anything Else...
  
  - Types are associated with values not ariables
  - The same variable can hold multiple types
  - We do not need to specify types
  - Most other languages are statically typed (Java, C#, C++)
  - There are supersets of JS and addons to allow static typing (TypeScript, Flow)

  
// PRIMITIVE

// String
const name = 'Saul Hudson'; 

// Number
const age = 53;

// Boolean
const hasKids = true; 

// Null 
const car = null; 

//Undefined
let test; 

//Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects

// Array
const hobbies = ['heavy metal', 'rock & roll'];

// Object Literal
const address = {
  city: 'Los Angeles', 
  state: 'CA'
}

const today = new Date();

console.log(today);
console.log(typeof today);

*/

                          // LECTURE #4: TYPE CONVERSIONS
/*

let val;

// Number To String
val = String(555); 
val = String(4+4); 

// Boolean To String
val = String(true);

// Date To String
val = String(new Date());

// Array To String
val = String([1,2,3,4,5]);

// .toString()
val = (5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);



// String To Number
val = '5'; 
val = Number(true); // 1 (or true in Boolean)
val = Number(false); // 0
val = Number(null); // 0
val = Number('Hello'); // NaN
val = Number([1,2,3,4,5]);

// .parseInt() (the Number equivalent of the .toString() Method)

val = parseInt('100.30'); // 100 - Same as Number() except returns a whole integer
val = parseFloat('100.30'); // 100.3 Same as Number() except returns number + decimals

console.log(val);
console.log(typeof val);
console.log(val.toFixed()); // .toFixed() allows us specify decimal places


// Type Coercion 

let val1 = 5;
let val2 = 6; 
let sum = val1 + val2;

console.log(sum); // 11
console.log(typeof sum); // number

// What output would be generated if val1 were converted to a String & val2 a #?

val1 = String(5);
val2 = 6; 
sum = val1 + val2;

console.log(sum); // 56
console.log(typeof sum); // string

                      // LECTURE #5: NUMBERS & THE MATH OBJECT

// MATH OBJECT

let val; // Set a 'val' variable to manipulate for demonstration

val = Math.PI; // 3.14...
val = Math.E; // 2.71...
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8,2); // 64
val = Math.min(2,33,4,1,55,6,3,-2); // -2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // 55
val = Math.random();

val = Math.floor(Math.random() * 20 + 1); // a random # b/t 1 - 20


console.log(val);

                  // LECTURE #6: STRING METHODS & CONCATENATIONS

// STRINGS

const firstName = 'Tom';
const lastName = 'Gabel';
const age = 35;
const str = 'Hello there my name is Tom'; 
const tags = 'web design,web development,programming';


let val; 

val = firstName + lastName; // TomGabel

// Concatenation
val = firstName + " " + lastName; // Tom Gabel

// Append
val = 'Brian'; // Brian
//val += ' Fallon'; // Brian Fallon

val = 'Hello, my name is ' + firstName + ' and I am ' + age; // full sentence

// Escaping  
val = 'That\'s awesome, I can\'t wait'; 

// Length

val = firstName.length; // 7

// concat
val = firstName.concat(' ', lastName); // Tom Gabel

// Change Case

val = firstName.toUpperCase(); // TOM
val = lastName.toLowerCase(); // gabel

val = firstName[2]; // m (The third letter in 'Tom')

// indexOf()
val = firstName.indexOf('T'); // 0
val = lastName.indexOf('b'); // 2

// charAt()
val = firstName.charAt('2'); // m

// Get Last Character
val = firstName.charAt(firstName.length -1); // m

// substring()
val = lastName.substring(0, 4); // Gabe

// slice()
val = lastName.slice(0,4); // Gabe

// split()
val = str.split(' '); // ['Hello', 'there', 'my', 'name', 'is', 'Tom']
val = tags.split(','); // ["web design", "web development", "programming"];

// replace()
val = str.replace('Tom', 'Brian'); // Hello there my name is Brian

// includes() - gives true/false value based on what's in String
val = str.includes('foo'); // false
val = str.includes('Hello'); // true


console.log(val);


                       // LECTURE #7: TEMPLATE LITERALS

const name = 'Dan';
const age = 32;
const job = 'Web Developer';
const city = 'Albany';

let html;

// Without Template Strings (ES5) - The Old Method

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: '+ city +' </li></ul>';

// Without Template Literals (ES5) - The Cleaner Old Method
html = '<ul>' +
       '<li>Name: ' + name + '</li>' + 
       '<li>Age: ' + age + '</li>' + 
       '<li>Job: ' + job + '</li>' + 
       '<li>City: ' + city + '</li>';

document.body.innerHTML = html; // creates a <ul> with name, age, job, city

// WITH Template Literals (ES6)- The New And Far More Efficient Method

function hell(){
  return 'hello';
} // this is for demonstration of an <li> below

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${name}</li>
    <li>Job: ${job}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 'Over 30' : 'Under 30'}</li>
`;



                     // LECTURE #8: ARRAYS & ARRAY METHODS

// Create Random Arrays To Demonstrate With
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val; 

// Array length
val = numbers.length; // 7

// Check If It's An Array
val = Array.isArray(numbers); // true

// Get A Value From An Array
val = numbers[3]; // 23
val = numbers[0]; // 43

// Insert A Value Into An Array
numbers[2] = 100; // '100' is now in the [2] index position of 'numbers' Array

// Find The Index Of A Value
val = numbers.indexOf(36); // 5

// MUTATING ARRAYS

// Add On To End Of An Array
numbers.push(250); // '250' is now at the end of 'numbers' Array

// Add On To Beginning Of An Array
numbers.unshift(120); // '120' is now at the beginning of 'numbers' Array

// Take Off From The End Of An Array
numbers.pop(); // '250' is now taken off the end after being added above

// Take Off From The Front Of An Array
numbers.shift(); // '120' is now taken off the beginning

// Splice Off Values
numbers.splice(1,3); // 56 & 23 taken off from 'numbers' Array

// Reverse An Array
numbers.reverse();

// Concatenate An Array
val = numbers.concat(numbers2);

// Sorting An Array Alphabetically
val = fruit.sort();

// Sorting An Array Numerically
val = numbers.sort(function(x, y){
  return x - y;
});

// Sorting Then Reversing An Array Numerically
val = numbers.sort(function(x, y){
  return y - x;
});

// Find A Specific Value In An Array
function under50(num){
  return num < 50;
}

val = numbers.find(under50); // 44 (original Array has been sorted & reversed)


console.log(numbers);
console.log(val);



                         // LECTURE #9: OBJECT LITERALS

const person = {
  firstName: 'Zakk', 
  lastName: 'Wylde',
  age: 52,
  email: 'zakk@aol.com',
  hobbies: ['Heavy Metal', 'New York Mets'], 
  address: {
    city: 'Bayonne',
    state: 'New Jersey'
  }, 
  getBirthYear: function(){
    return 2019 - this.age;
  }
}

let val;

val = person;

// Get A Specific Value
val = person.firstName; // Zakk
val = person['lastName']; // Wylde
val = person.age; // 52
val = person.hobbies[1]; // New York Mets
val = person.address.state; // New Jersey
val = person.address['city']; // Bayonne
val = person.getBirthYear(); // 1967

console.log(val);

// Creating An Object Literal & Printing Values
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}



                         // LECTURE #10: DATES & TIMES

let val; 

const today = new Date();
val = today;

let birthday = new Date('9-10-1981');
birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');

val = birthday; 

val = today.getMonth(); // 4 (The month is May - date is also 0 based)
val = today.getDate(); // 21 (The day is 21st of May, 2019 as of this writing)
val = today.getDay(); // 2 (Today is Tuesday - Day of Week is also 0 based)
val = today.getFullYear(); // 2019
val = today.getHours(); // 12 (Time is currently 12:30pm )
val = today.getHours(); // 12
val = today.getMinutes(); // 33 (Time is currently 12:33pm now)
val = today.getSeconds(); // Changes by the second
val = today.getMilliseconds();
val = today.getTime(); // Gives you time stamp 

birthday.setMonth(2); // March 10 1981
birthday.setDate(12); // March 12 1981
birthday.setFullYear(1985); // March 12 1985
birthday.setHours(3); // Sets time to 3:00:00
birthday.setMinutes(30); // Sets time to 3:30:00
birthday.setSeconds(25); // Sets time to 3:30:25


console.log(val); 
console.log(birthday);



              // LECTURE #11: IF STATEMENTS & COMPARISON OPERATORS

const id = 100; 

// EQUAL TO (2 ==)

if(id == 100){
  console.log("Correct");
} else {
  console.log("Incorrect");
}// Correct

// NOT EQUAL TO (2 ==)
if(id != 101){
  console.log("Correct");
} else {
  console.log("Incorrect");
} // Correct

// EQUAL TO VALUE & TYPE (3 ===)
if(id === 100){
  console.log("Correct");
} else {
  console.log("Incorrect");
}// Correct- if 100 were a string '100' this would return 'Incorrect'

// Test If Variable Is Undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Greater Than Or Less Than
if(id <= 100){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue') {
  console.log('Color is blue');
} else if(color === 'orange'){
  console.log('Color is orange');
} else {
  console.log('Color is not red, blue or orange');
} // Color is not red, blue or orange

const name = 'Nikki Sixx'; 
const age = 20;

if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is am adult`);
}

// OR
if(age < 16 || age > 65){
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}



// TERNARY OPERATOR

const id = 100;
console.log(id === 100 ? 'Correct' : 'Incorrect');



                          // LEC TURE #12: SWITCHES

// Using switch() to change colors

const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
    default:
    console.log('Color is not red or blue');
    break;
}


// Using switch() to change days in date

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
    case 1:
    day = 'Monday';
    break;
    case 2:
    day = 'Tuesday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 4:
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`); // Today is Tuesday (it was when I wrote this)



                // LECTURE #13: FUNCTION DECLARATIONS & EXPRESSIONS

// Simple function
function greet(){
  return 'Hello';
}

console.log(greet()); // Hello undefined


// Simple function with parameter
function greet(firstName){
  return `This is the story of ${firstName}`;
}

console.log(greet('Johnny')); // Hello Johnny Rotten


// Simple function parameters and conditionals
function greet(firstName = 'Johnny', lastName = 'Rotten'){
  return `This is the story of a ${firstName} ${lastName}`;
}

console.log(greet('Johnny', 'Rotten'));



// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x;
};

console.log(square(3)); // 9



// IFFE's (Immediately Invokable Function Expressions)

(function(){
  console.log('The IIFE Ran...')
})(); // The IIFE Ran

(function(name){
  console.log('Hello ' + name)
})('Brad'); // Hello Brad



// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add a task');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...')
}

todo.add(); // Add a task
todo.edit(22); // Edit todo 22
todo.delete();




                // LECTURE #14: GENERAL LOOPS

// Basic FOR loops

for(let i = 0; i < 10; i++){
  console.log(i);
} // Outputs 1-9 in vertical order



// Skipping An Iteration (continue)
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue; // replaces 'Number 2' with '2 is my favorite number'
  }
    console.log('Number ' + i);
}


// Stopping An Iteration (break)
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue; 
  }
  if(i === 5){
    break;
  } // Stops the iteration once 'Number 4' has printed to the console
    console.log('Number ' + i);
}



// WHILE LOOP

let i = 0;

while(i < 10){
  console.log('Number ' + i)
  i++;
} // Number 0 to Number 9


// DO WHILE LOOP 

let i = 100; // intentionally setting it outside of 'while' parameters below

do {
  console.log('Number ' + i);
  i++
}

while(i < 10); // Number 100 (DO WHILE loops always run at least once)



// LOOPING THROUGH ARRAYS WITH HIGHER ORDER FUNCTIONS

// Printing Array Values Using A FOR LOOP
const cars = ['Ford', 'Chevy', 'Dodge', 'Cadillac', 'Tesla'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
} // Prints all the car companies vertically starting with Ford



// Printing Array Values Using forEach LOOP

cars.forEach(function(car){
  console.log(car);
}); // Does the exact same as the above



// MAP (a built in function basically used to return a new Array)

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Karen'}
];

//....now let's return the id's ordered in their own new Array
const ids = users.map(function(user){
  return user.id;
});

//...print it to the console to view it
console.log(ids);



// FOR IN LOOP - typically used on Objects

const user = {
  firstName: 'Neil',
  lastName: 'Young',
  age: 73
}

for(let x in user){
  console.log(x); // Prints the 'keys' to console (firstName, lastName, age)
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
} // Prints the entire Object (keys + values)



                // LECTURE #15: A LOOK AT THE WINDOW OBJECT

// WINDOW METHODS / OBJECTS / PROPERTIES

window.console.log(123); // (we're already in the 'window' so its unnecessary to write 'window.' before console.log)

// Alert
alert('Hello World');

// Prompt
const input = prompt(); // input box pops up like an alert
alert(input); // alert pops up like any alert, not sure why 'prompt' did here


// Confirm
if(confirm('Are you sure')){
  console.log('Yes');
} else {
  console.log('No');
} // box pops up, once I click "Ok", 'Yes' prints to the console


let val;

// Outter height and width
val = window.outerHeight;
console.log(val); // 748 (size of window in pixels prints to console)

val = window.outerWidth;
console.log(val); // 661 (size of window in pixels prints to console)

// Outter Height And Width Of Window
val = window.outerHeight;
console.log(val); // 748 (size of window in pixels prints to console)
val = window.outerWidth;
console.log(val); // 661 (size of window in pixels prints to console)


// Inner Height And Width Of Window
val = window.innerHeight;
console.log(val); // 311 (size of window in pixels prints to console)
val = window.innerWidth;
console.log(val); // 661 (size of window in pixels prints to console)

// Scroll Points
val = window.scrollY;
console.log(val); // 

val = window.scrollX;
console.log(val);



// Location Object

val = window.location;
console.log(val); // gives you a lot of underlying details about site

val = window.location.hostname;
console.log(val); // 127.0.0.1 (the url for the site on a live server)

val = window.location.port;
console.log(val); // 5500

val = window.location.href;
console.log(val); // http://127.0.0.1:5500/

val = window.location.search; 
console.log(val);

// Redirect
window.location.href = 'http://google.com' // redirects page to Google.com

// Reload
window.location.reload();

window.history.go();

// Navigator Object
val = window.navigator; // Netscape + other details
val = window.navigator.appName; // Netscape

val = window.navigator.appVersion; // 5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36

val = window.navigator.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36

val = window.navigator.platform; // MacIntel
val = window.navigator.vendor; // Google Inc.
val = window.navigator.language; // en-US

console.log(val);


                // LECTURE #16: SCOPE


// Example #1
var a = 1; 
let b = 2; 
const c = 3;

function test(){
  var a = 4; 
  let b = 5; 
  const c = 6; 
  console.log('Function Scope: ', a, b, c);
}

test();

console.log('Global Scope: ', a, b, c,); // OUTPUT BELOW 
  // Function Scope: 4 5 6 
  // Global Scope: 1 2 3 


// The variables within the function are not affected by those outside, both printed to the console


// Example #2
var a = 1; 
let b = 2; 
const c = 3;

if(true) {
  var a = 4; 
  let b = 5; 
  const c = 6; 
  console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c,); // OUTPUT BELOW
// If Scope: 4 5 6 
// Global Scope: 4 2 3


// Example #3
var a = 1;
let b = 2; 
const c = 3;

for(let a = 0; a < 10; a++){ // toggle between 'let' and 'var' to see diff
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

*/