// this: reference to an object

// 4 Rules to 'this'. How is it called?

// 1) in the global context
// 2) as a method on an object
// 3) as a constructor function or class constructor
// 4) as a DOM event handler

function whatIsThis() {
  console.log(this);
}

whatIsThis();

const userInfo = {
  title: "Programmer",
  user: {
     first: 'Reed',
     last: 'Barger',
     greetUser() {
      console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
     }   
  }  
}

userInfo.user.greetUser()

class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;  
  }  
  
  getAge() {
    console.log(`${this.first}'s age is ${this.age}`);  
  }
}

const user = new User('Bob', 24);
user.getAge();

function User(first, age) {
  this.first = first;
  this.age = age;
}

User.prototype.getAge = function() {
  console.log(`${this.first}'s age is ${this.age}`);  
}

const user2 = new User('jane', 25);
user2.getAge();

const button = document.createElement('button');
button.textContent = "Click";
document.body.appendChild(button);

button.addEventListener('click', function() {
  console.log(this);
})

// call(), apply(), bind()

const user = {
  name: "Reed",
  title: "Programmer"  
}

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

printUser.call(user);

const user = {
  name: "Reed",
  title: "Programmer"  
}

function printBio(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

printBio.call(user, 'London', 'England')
printBio.apply(user, ['London', 'England'])