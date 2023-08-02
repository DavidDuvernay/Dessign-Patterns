const users = [
  {age: 17, name: 'Nicolas', lastName: 'Soto'},
  {age: 18, name: 'Chanchito', lastName: 'Feliz'},
  {age: 12, name: 'Loreto', lastName: 'Fernadez'},
  {age: 1, name: 'Sofia', lastName: 'Zapata'}
];
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x );

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x );

const trace = x => y => console.log(x, y);

const filter = f => xs => xs.filter(f);

const head = xs => xs[0];

const format = x => ({
  fullname: `${x.name} ${x.lastName}`,
  age: x.age
});

const formatting = x => `${x.fullname} is ${x.age} years old.`;

const getFirstChild = pipe(
  filter(x => x.age < 2),
  //trace is for debugging
  trace('after'),
  head,
  format,
  formatting
);