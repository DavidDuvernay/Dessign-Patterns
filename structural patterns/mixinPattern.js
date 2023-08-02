const mixin = {
  sayHello() {
    console.log(`Hello ${this.name}`)
  },

  sayGoodbye() {
    console.log(`Goodbye ${this.name}`)
  }
};

class User {
  constructor(name) {
    this.name = name
  }
};

Object.assign(User.prototype, mixin);

const user = new User('Checo Perez');

user.sayHello()
user.sayGoodbye()