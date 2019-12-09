function init() {
    
}

init();

//rules of naming convention in js
//1. alphabets, numbers, $ and _ is allowed.
//2. some words are reserved -> reserved words.

//2020 feature, where it can be used for both window(browser) and global(server)
globalThis

//if you do not declare with var, const, let, it will save the value to the global object.
//ex this will cause a problem, because this will overwrite the alert function of the window.
alert  = 'hello';
alert('he');

//there are 2 modes that js is running.
//sloppy mode which is a default
//and the stirct mode, where it will throw more errors.
//strict mode can be declared by putting 'use strict'; in the very first line.

//but strict mode does not prevent everthing.

//example of hoisting
console.log(age);
var age = 25;

//how js sees this.
var age;
console.loe(age);
var age = 25;

//this is the reason why console.log(age) has value of undefined.
//because js will hoist

//this will not run, because let and const prevents the hoisting.
console.log(age2)
let age2 = 24;
//these is called temporal dead zone. 


//with let, you can update and change the value. 
//that is why you can initialize the let variable without assining it in the first place,
//but assign it later.
let age3;

age3 = 24;

age3 = 26;

//but with const, you must give the initial value. 
//and you cannot change or update it.
const age4 = 35;

