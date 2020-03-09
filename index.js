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