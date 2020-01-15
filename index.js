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

var price = 20;
var isSale = true;

// variable shadowing
// let & const - block-scoped
if (isSale) {
  // discount price of product
  var price = 20 -2;
  const price = 20 - 2; 
  // do something 
  console.log('sale price', price);
}

console.log('price', price);

const threeLines = `
This 
spans three 
lines.
`;

// if statements - evaluate boolean values
const prefersDarkMode = true;
const prefersSolarizedMode = true;

if (prefersDarkMode) {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else if (prefersSolarizedMode) {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}
  
const colorMode = 'dark';

switch (colorMode) {
  case 'solaried':
      console.log('solarized mode set!'); 
      document.body.style.background = 'palegoldenrod';
      break;
  case 'dark':
      console.log('dark mode set!');  
      document.body.style.background = 'black';
      break;
  default:
      console.log('light mode set!');
      document.body.style.background = 'ghostwhite';
}

// condition ? then expression : else expression;

//short-circuiting
const response = prompt("What’s your name?");
const isEmailVerified = true;

// let username;

// if (response) {
//   if (isEmailVerified) {      
//     username = response;
//   }  
// } else {
//   username = "guest";
// }

// const username = "" && "a better name";
// const username = response || 'guest';
const username = isEmailVerified && response || 'guest';
console.log(username);

function echo(input, greeting) {
  return `${greeting} ${input}`;  
 }
 
 const result = echo(42, "Hi");
 console.log(result);

const user1 = "Reed";
const user2 = "Doug";

// const message = `User (user) says: (text)`;

function display(user, text) {
    return `User ${user} says: ${text}`;
}

const message = display(user1, "hello");
console.log(message);

function handleLikePost(step) {
  let likeCount = 0;
  //To use a closure, define a function inside another function and expose it. 
  //To expose a function, return it or pass it to another function.
  //Among other things, closures are commonly used to give objects data privacy.
  return function addLike() {
    likeCount += step;    
    return likeCount;
  }
//   addLike();
  console.log('like count:', likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

//default parameters
//by giving decimalPlaces a default value of 1, 
//it will use 1 as default when the second argument has not been given to the function.
function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
  //   decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  //toFixed() is a function that you can formats a number using fixed-point notation.
  //but it returns string, so you need to use Number() function
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));

//arrow function returns the value by default. 
const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
//higher order function
function greetUser(name, callback) {
  return callback(capitalize(name));  
}

//the callback() is given here
const result = greetUser(username, name => `Hi there, ${name}!`);

console.log(result);

//partial application reduces the total number of argument for a function
//and giving a pattern to a function to remember a data that has been passed to it

//in arrow function format
const getData = baseUrl => route => callback => 
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  

//in function format
function getData(baseUrl) {
  return function(route) { 
    return function(callback) {    
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
    }     
  }  
}

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

//when getSocialMediaData function returns a function that takes a 'route' as argument, 
//you are giving that route argument here as '/posts', and storing that data in getSocialMediaPosts.
const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

//you are able to use arrow function with posts argument here,\
//because the callback function is returned from 'getSocialMediaData('/posts');'
getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});

//object
const blueColor = '#00f';
const orangeColor = '#f60';

const colors = {
    blue: '#00f',
    orange: '#f60',
}

//function stored inside of the object could look like this
{
  sayHi() {
    console.log('hi')  
  }
}

////primitive vs object types

//primitive has 6 types in total
/*
  undefined, null, boolean, number, string, symbol
*/

// primitive - passed by value
const num = 'hello world';
const anotherNum = 'hello world';
console.log(num === anotherNum);

// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);

const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

// colors[color] = hexCode;
console.log(colors);

//this function would not work, because 'key' does not exist in 'colors' object.
function getColor(key) {
  return colors.key;
}

//but this function would work, because it means the key property can be changed and updated.
function getColor(key) {
  return colors[key];
}

delete colors.blue;

//object destructuring
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

const { username, email } = user;

function displayUser() {
  console.log(`username: ${username}, email: ${email}`);  
}

displayUser()

// const { name, details: { title} } = user;

function displayUserBio({ name, details: { title} }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);

//merge objects with the object spread
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

//note that the order of the object matters.
const createdUser = { ...user, ...newUser, verified: false };

//target is the first parameter and the rest follows are the source.
console.log(Object.assign({}, user, newUser, { verified: false }));

//map
const nums = {
  1: 1,
  true: true
};

const map1 = new Map([
  [1, 1],
  [true, true]  
]);

//inserted order matters.
new Map([
  ['key', 'value'],
  ['key2', 'value2'],
])

map1.set('key', 'value');

map1.forEach((value, key) => {
  console.log(key, value);  
});

console.log([...map1.keys()])

const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const userData = new WeakMap([
  [user1, secretKey1],
  [user2, secretKey2]
]);

const key = userData.get(user1);

const userMap = new Map([
  ['name', 'john'],
  ['verified', true]
])

console.log(userMap.size);

//methods with arrow function
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  //this will throw en error bcs now it is refering to an 'window' not the this scope of userData.
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    //you need to save 'this' in 'that' variable so the child funcion can get acess to the this property.
    //at certain point, 'this' loses its binding.
    setTimeout(() => {
      console.log(`Would you like to friend ${that.username}?`);   
    }, 2000);  
  }  
}

userData.getBio();

//flexible collections with arrays
const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
todos.pop();
// todos[1] = todo2;
// todos[0] = todo1;
console.log(todos);

//check elements in arrays
const temperatures = [
  { degrees: 69, isRecordTemp: false }, 
  { degrees: 82, isRecordTemp: true }, 
  { degrees: 73, isRecordTemp: false }, 
  { degrees: 64, isRecordTemp: false }
];

console.log(temperatures.includes(50));
// const result = temperatures.some(temperature => temperature.isRecordTemp === true); // true / false
const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log(result);  

////falsy values
// false
// 0
// ''
// null
// undefined
// NaN

const username = '';

//js will do a coercion and convert the username's empty string value to false and compare that with the false value.
//which ends up with 'false', in this case, you can simply use bang, to say if username value is false.
if (username === false) {
  console.log('no user');
}

//short-circuiting
//or operator
const username = true || false;
//and operator
const isVerified = true && false;

//array method .map() amd .forEach()
const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

temperatures.map(temperature => 
  //with the spread operator, you are creating a new object with existing propertys and with comma seperate, 
  //you are adding the new property when the condition has been met.
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
).forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
  }
})

//get subjsets of arrays.
const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const result = restaurants.find(restaurant => 
  restaurant.name.lowerCase().includes('north') && restaurant.milesAway < 3
);
console.log(result);

const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const priceAdded = menuItems.reduce((accumulator, menuItem) => {
  return accumulator + menuItem.price;  
}, 0);
console.log(priceAdded)

const numbers = [1, 2, 3, 4, 5, 6];
const twiceNum = numbers.reduce((accumulator, number) => {
  accumulator.push(number * 2);
  return accumulator;
}, []);

const withMap = numbers.map( number => number * 2);

console.log(twiceNum);

const three = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);

console.log(three);

//mold arrays with the spread operator and decide on order.
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
console.log(otherMenuIdeas);

const bar = "stoplight";
const cafe = "4850";
const restaurant = "rijsel";

const favouritePlaces = {
    bar,
    cafe,
    restaurant,
    greeting() { console.log("greetings")}
}

const favouritePlacesObj = favouritePlaces.greeting()

console.log(favouritePlaces.bar)
console.log(favouritePlaces.cafe)
console.log(favouritePlaces.restaurant)


const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

//rest parameter
const [winner, ...losers] = finalMenuItems;

console.log({ winner, losers });

const favouriteSongs = [];
favouriteSongs.push("ll1", "2good", "why");
// const poppedSong = favouriteSongs.pop();
const songsIndex = favouriteSongs.length - 1;
const lastSong = favouriteSongs[songsIndex]
console.log(lastSong);

//turn objects to flexible arrays
const user = {
  name: 'John',
  age: 29  
};

const ageExists = Object.keys(user).includes('age');
console.log(ageExists);

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};

const monthlySum = Object.values(monthlyExpenses);
console.log(monthlySum)

const totalSum = monthlySum.reduce( (acc, num) => acc += num, 0);
console.log(totalSum);

const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

//instead of using chain methods, consider reduce
const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }  
  return acc;
}, []);
console.log(usersOver20);

const numbers = new Set([[1], [2], [3]]);

for (const num of numbers) {
  console.log(num);  
}

const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  "Beef Stroganoff",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  "Beef Stroganoff"
];

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes)

// JS -> HTML, CSS (DOM - Document Object Model)

document.body.addEventListener('click', event => {
  if (!event.target.closest('.post')) return;
  
  console.log('Do you want to edit this post?')  
})

function Student(id, name, subjects = []) {
  //these are all 'instance property'
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');

student1.addSubject('Math');
student2.addSubject('Physics');
console.log(student2.subjects);

// classes === constructor functions
// classes - create objects with shared methods

// function Student() {}

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }  
    
  getStudentName() {
    return `Student: ${this.name}`  
  }
}

const student1 = new Student(1, 'Reed');
console.log(student1.getStudentName());
console.log(Student.prototype.getStudentName)

class Film {
	//Your code here.
	constructor(id, title, director, releaseYear, genres = []) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
	}
	
	addGenre(genre) {
		this.genres = [...this.genres, genre];
	}
	
	getFilmTitle() {
		return this.title
	}
	
}

// Rest of your code here. 

const fav = new Film(1, "great expectation", "me", "1998");
console.log(fav.getFilmTitle());
fav.addGenre("drama"));
console.log(fav.genres)

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;  
  }  

  isDiscountable() {
    return this.discountable;  
  }

  get price() {
    return this._price;
  }
  
  set price(price) {
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price; 
    }
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable);
     this.percentOff = percentOff; 
  }  

  getSalePrice() {
    if (super.isDiscountable) {
      return this.price * ((100 - this.percentOff) / 100);
    } else {
       return `${this.name} is not eligible for a discount`;
    }
  }
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct = () => {
    if (isAuth) {
      //because you are passing favoriteProduct as callback to the setTimeout,
      //if you do not bind 'this', it would not know what 'this' is.
      //because it lost its bound to class Product.
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct = () => {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()

//asynchronous operation

// callbacks -> promises

// States of a promise:
// pending - defautl value of promise 
// fulfilled
// rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));

// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API  

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

//the endpoint url is wrong here, but
//it will still fetch and return {} empty object
fetch('https://jsonplaceholder.typicode.com/pots/1')
  //if response.ok is ture, the status code range would be 2xx
  .then(response => {
  if (!response.ok) {
    throw new Error(response.status);  
    // 4xx range status code means the request had a problem
    // 5xx range status code means the server had a problem
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))

  fetch('https://jsonplaceholder.typicode.com/users/3')
    .then( response => {
        if(!response.ok) {
            throw new Error(response.status)  
          
        } else {
            response.json()  
        }
    })
    .then( data => console.log(`name: ${data.name}, company: ${data.company.name}`))
    .catch(error => console.log(error))

    //mixin


//different way to resolve a Promise    
async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
  
  const result = await promise;
  console.log(result);
  console.log('done');
}

getBlogPost()

const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
  .then(response => response.json())
  .then(data => console.log(data));

async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getPost();

const getUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
  const person = await response.json();
  console.log(`${person.name} works for ${person.company.name}`);
}

getUser();

async function runAsync() {
  try { 
    //await keyword is the only thing that 
    //converts the rejected promise to a catchable error
    await Promise.reject('hello world'); 
    null.someProperty = true; 
  } catch (error) {
    console.error(error); 
  }  
}

runAsync();

async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.log('Could not fetch user, try resetting your connection');
    console.error(error);  
  } 
}
getGithubUser();