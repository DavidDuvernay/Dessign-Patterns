const dog = {
  breed: 'Bulldog',
  bark: function () {
    console.log(`"Barks", I'm a ${this.breed}`)
  }
};

const bulldog = Object.create(dog);

dog.bark();

dog.breed = 'Corgie'
dog.bark()